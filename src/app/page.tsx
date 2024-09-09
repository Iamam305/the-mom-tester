
import { create_questions } from "@/actions/generate-questions";
import SubmitButton from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


export default function Home() {
  
  return (

    <div className="w-full  py-20 lg:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>

            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-3xl md:text-5xl max-w-2xl tracking-tighter  ">
                <span className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  The Mom Tester
                </span>
                <br />Idea Validation for Solopreneurs and Indie Hackers
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl ">
                Simply input your product idea and target audience, and The Mom Tester will generate a set of unbiased, insightful questions for your user interviews. Get ready to unlock genuine feedback and validate your concept with confidence.
              </p>
            </div>

          </div>
          <Card className="max-w-3xl w-full p-8 mt-10">
            <CardContent>
              <form action={create_questions} className="flex flex-col gap-4 w-full">
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="product_idea">Idea</Label>
                  <Textarea required={true} id="product_idea" name="product_idea" className="w-full" />

                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="target_audience">Target audience</Label>
                  <Input required={true} id="target_audience" name="target_audience" type="text" className="w-full" />
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input required={true} id="email" name="email" type="email" className="w-full" />
                </div>
                <SubmitButton/>
              </form>
            </CardContent>

          </Card>
        </div>
      </div>
    </div>
  );
}
