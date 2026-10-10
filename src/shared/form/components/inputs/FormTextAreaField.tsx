import React from "react";
import { useFormContext, Controller } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";



export interface FormTextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label?: string;
    containerClassName?: string;
    /** when set (inside an AssistProvider), a sparkle control appears in the field */
}

export const FormTextAreaField: React.FC<FormTextAreaFieldProps> = ({
    name,
    label,
    className,
    containerClassName,
    rows = 4,
    ...props
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div className={cn("flex flex-col gap-1.5 w-full", containerClassName)}>
                    {label && (
                        <Label
                            htmlFor={name}
                            className="font-inter font-semibold text-[14px] leading-5 tracking-normal text-[#1C1917] align-middle inline-block"
                        >
                            {label}
                            {props?.required && <span className="text-red-500 font-bold">*</span>}
                        </Label>
                    )}
                    <Textarea
                        {...field}
                        {...props}
                        id={name}
                        rows={rows}
                        value={field.value ?? ""}
                        className={cn(
                            "min-h-25 rounded-xl transition-all focus-visible:ring-2 resize-y",
                            "border border-[#EDE6D5] bg-white",

                            error
                                ? "border-error-700 focus-visible:ring-error-700/20"
                                : "focus-visible:border-primary-700 focus-visible:ring-primary-700/20",
                            className
                        )}
                    />

                    {error && (
                        <p className="text-xs font-medium text-error-700 ml-1 animate-in fade-in slide-in-from-top-1 text-red-500">
                            {error.message}
                        </p>
                    )}
                </div>
            )}
        />
    );
};