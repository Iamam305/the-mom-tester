import { create_questions } from "@/actions/generate-questions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MoveRight, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Badge variant="outline">We&apos;re live!</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              This is the start of something new
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our goal
              is to streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
          <form action={create_questions} className="flex flex-col gap-3 max-w-2xl w-full">
            <div className="grid w-full items-center gap-1">
              <Label htmlFor="product_idea">Idea</Label>
              <Textarea id="product_idea" name="product_idea" className="w-full"/>
              
            </div>
            <div className="grid w-full items-center gap-1">
              <Label htmlFor="target_audience">Target audience</Label>
              <Input id="target_audience" name="target_audience" type="text" className="w-full"/>
            </div>
            <div className="grid w-full items-center gap-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" className="w-full" />
            </div>
            <Button variant="default" type="submit">Generate</Button>
          </form>
        </div>
      </div>
    </div>

  );
}
