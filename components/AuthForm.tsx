"use client"


import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CustomInput from "./CustomInput";
import { Button } from "@/components/ui/button"
import {
    Form,
} from "@/components/ui/form"

const formSchema = z.object({
    email: z.email({ message: 'invalid email' }),
    password: z.string({ message: 'invalid password' }).min(8)
})

function authForm({ type }: { type: string }) {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ''
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
    }
    return (
        <section className="auth-form">
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link href="/" className="cursor-pointer flex items-center gap-1">
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon logo"
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">YouBank</h1>
                </Link>
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
                        {type === 'sign-in'
                            ? 'Sign In'
                            : 'Sign Up'
                        }
                    </h1>
                </div>
            </header>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <CustomInput
                            control={form.control}
                            name="email"
                            label="Email"
                            placeholder="input your email"
                        />
                        <CustomInput
                            control={form.control}
                            name="password"
                            label="Password"
                            placeholder="input your password"
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </section>)
}

export default authForm