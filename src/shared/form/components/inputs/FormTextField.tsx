import React, { ReactNode } from "react";
import { useFormContext, Controller } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";


export interface FormTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    containerClassName?: string;
    icon?: ReactNode;
    /** when set (inside an AssistProvider), a sparkle control appears in the field */
}

export const FormTextField: React.FC<FormTextFieldProps> = ({
    name,
    label,
    className,
    containerClassName,
    type = "text",
    icon,
    onChange,
    ...props
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div className={cn("flex flex-col gap-2 w-full", containerClassName)}>
                    {label && (
                        <Label
                            htmlFor={name}
                            className="font-inter font-semibold text-[14px] leading-5 tracking-normal text-[#1C1917] align-middle inline-block"
                        >
                            {label}
                            {props?.required && <span className="text-red-500 font-bold">*</span>}
                        </Label>
                    )}

                    <div className="relative flex items-center"
                    >
                        {icon && (
                            <div className="absolute inset-s-3 text-ink-400 pointer-events-none [&>svg]:h-5 [&>svg]:w-5 z-10">
                                {icon}
                            </div>
                        )}


                        <Input
                            {...field}
                            {...props}
                            id={name}
                            type={type}
                            value={field.value ?? ""}

                            onChange={(e) => {
                                let val = e.target.value;

                                if (type === "tel") {
                                    val = val.replace(/[^\d+]/g, '');
                                    if (val.indexOf('+') > 0) {
                                        val = val.replace(/\+/g, '');
                                    }
                                }

                                field.onChange(val);
                                if (onChange) onChange(e);
                            }}
                            className={cn(
                                "transition-all focus-visible:ring-2",
                                "border border-[#EDE6D5] bg-white h-12 md:h-14",
                                icon ? "ps-10" : "ps-4",
                                error
                                    ? "border-error-700 focus-visible:ring-error-700/20"
                                    : "focus-visible:border-primary-700 focus-visible:ring-primary-700/20",
                                className
                            )}
                        />
                    </div>

                    {error && (
                        <p className="ms-1 text-xs font-medium text-error-700 animate-in fade-in slide-in-from-top-1 text-red-500">
                            {error.message}
                        </p>
                    )}
                </div>
            )}
        />
    );
};

