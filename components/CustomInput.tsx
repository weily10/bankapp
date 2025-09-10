import React from 'react'
import {
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Form, Control, FieldPath } from "react-hook-form"
import { z } from "zod"
import { authFormSchema } from '@/lib/utils'


interface CustomInput {
    control: Control<z.infer<typeof authFormSchema>>,
    name: FieldPath<z.infer<typeof authFormSchema>>
    label: string,
    placeholder: string
}


function CustomInput({ name, control, label, placeholder }: CustomInput) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">
                        {label}
                    </FormLabel>
                    <div className="flex w-full flex-col">
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                type={name === 'password' ? 'password' : 'text'}
                                className="input-class"
                                {...field}>
                            </Input>
                        </FormControl>
                        <FormMessage className="form-message mt-1" />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput