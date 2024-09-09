"use client"

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"

const SubmitButton = () => {
    const { pending } = useFormStatus()
  return (
    <Button disabled={pending} variant="default" type="submit">
    {pending ? "Generating..." : "Generate"}
  </Button>
  )
}

export default SubmitButton