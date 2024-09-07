"use server"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import prisma from "../../../../prisma"

const Page = async ({ params }: { params: { id: string } }) => {
    const questions = await prisma.idea.findFirst({
        where: {
            id: params.id
        }
    })


    return (
        <main>
        <div className="max-w-5xl w-full mx-auto my-10 gap-4 flex flex-col">
            {questions?.questions.map((e, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle>{e.question}</CardTitle>
                        <CardDescription>{e.explanation}</CardDescription>
                    </CardHeader>


                </Card>
            ))}
            {/* <Accordion type="single" collapsible className="w-full p-4 ">
                {questions?.questions.map((e, index) => (
                    <AccordionItem key={index} value={"index-" + index}>
                        <AccordionTrigger className="text-left">
                            {e.question}
                        </AccordionTrigger>
                        <AccordionContent>
                            {e.explanation}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion> */}
        </div>
        </main>

    )
}

export default Page