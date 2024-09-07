'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {


    return (
        <nav className="bg-background shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between ">
                    <Link href={"/"} className="flex items-center">
                        <div className="flex-shrink-0">
                            <img src="https://iili.io/d8VvJRI.jpg" alt="The mom tester" className="h-auto w-24" />
                        </div>

                    </Link>
                    <Link href={"https://insigh.to/b/the-mom-tester"} target='_blank' className="hidden md:block">
                        <Button variant={"outline"}>Feedback</Button>
                    </Link>

                </div>
            </div>


        </nav>
    )
}