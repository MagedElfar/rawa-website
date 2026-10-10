"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Key } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { useAppTranslation } from "@/lib/i18n/use-translation";
import { FormTextAreaField } from "@/shared/form/components/inputs/FormTextAreaField";
import { FormTextField } from "@/shared/form/components/inputs/FormTextField";
import { FormContainer } from "@/shared/form/components/layout/FormContainer";
import { AppFormProvider } from "@/shared/form/providers/AppFormProvider";
import { errorMapper } from "@/utils/error";

import { ContactFormSchema, ContactFormValues } from "../constants/contact-form-schema";

export function ContactForm() {
    const t = useAppTranslation("home");

    const methods = useForm<ContactFormValues>({
        resolver: zodResolver(ContactFormSchema(t)),

        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
    });

    const onSubmit = async (data: ContactFormValues) => {
        try {
            // eslint-disable-next-line no-console
            console.log("data")
            methods.reset()
            toast.success(t("contact.form.messages.success"))
        } catch (error) {
            errorMapper(error).forEach((err) => toast.error(err));
        }
    };

    return (
        <AppFormProvider<ContactFormValues> methods={methods} onSubmit={onSubmit}>
            <FormContainer
                className="my-1 space-y-4"
                buttonClassName="w-full"
                submitText={t("contact.form.actions.submit")}
            >

                <FormTextField
                    name="name"
                    label={t("contact.form.inputs.name")}
                    required
                />

                <FormTextField
                    name="email"
                    label={t("contact.form.inputs.email")}
                    required
                    type="email"
                />

                <FormTextAreaField
                    name="message"
                    label={t("contact.form.inputs.message")}
                    required
                />

            </FormContainer>
        </AppFormProvider>
    );
}