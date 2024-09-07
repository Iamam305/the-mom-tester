"use server";

import { PromptTemplate } from "@langchain/core/prompts";
import { ChatGroq } from "@langchain/groq";
import {
  OutputFixingParser,
  StructuredOutputParser,
} from "langchain/output_parsers";
import { z } from "zod";
import prisma from "../../prisma";
import { redirect } from "next/navigation";

export async function create_questions(formData: FormData) {

  const product_idea = formData.get("product_idea") as string;
  const target_audience = formData.get("target_audience") as string;
  const email = formData.get("email") as string;
  console.log(email, product_idea, target_audience);

  const parser = StructuredOutputParser.fromZodSchema(
    z.array(
      z.object({
        question: z.string(),
        explanation: z.string(),
      })
    )
  );
  const llm_model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY, // Default value.
    model: "llama-3.1-8b-instant",
  });
  const prompt = PromptTemplate.fromTemplate(
    `You are tasked with generating user/customer interview questions for a product or startup idea based on the principles outlined in the book "The Mom Test" by Rob Fitzpatrick. The goal is to create questions that will help you gather valuable, unbiased information about potential customers' problems, behaviors, and needs without pitching your idea or leading the interviewee.

        Here's the product/startup idea you'll be working with:
        <idea>
        {idea}
        </idea>

        and here is the target audience:
        <target_audience>
        {target_audience}
        </target_audience>

        Before generating questions, keep in mind these key principles from "The Mom Test":
        
        1. Talk about the customer's life instead of your idea
        2. Ask about specifics in the past rather than generics or opinions about the future
        3. Talk less and listen more
        4. Focus on learning about actual behaviors and problems, not hypothetical situations
        
        Now, generate a set of interview questions that adhere to these principles. The questions should help you understand the potential customer's current behaviors, pain points, and needs related to the problem your idea aims to solve, without revealing or pitching your specific solution.
        
        Present your questions in a numbered list format, like this:
        {format_instructions}
        
        After each question, provide a brief explanation of why you chose that question and how it aligns with "The Mom Test" principles.         
        Remember, the goal is to learn about the customer's problems and behaviors, not to pitch your idea or get validation for it. Avoid asking leading questions or mentioning your specific product or solution.`
  );

  const chain = prompt.pipe(llm_model);
  const output = await chain.invoke({
    format_instructions: parser.getFormatInstructions(),
    idea: product_idea,
    target_audience: target_audience,
  });

  let questions: z.infer<typeof parser.schema>;
  try {
    questions = await parser.parse(output.content.toString());
  } catch (error) {
    console.error("Error parsing summary, trying to fix it");
    const fixParser = OutputFixingParser.fromLLM(llm_model, parser);
    questions = await fixParser.parse(output.content.toString());
  }

  const new_idea = await prisma.idea.create({
    data: {
      idea: product_idea,
      questions: questions,
      email: email,
    },
  });

  redirect(`/questions/${new_idea.id}`);
}
