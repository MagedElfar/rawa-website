import { useTranslations } from "next-intl";
import { z } from "zod";


export const ContactFormSchema = (t: ReturnType<typeof useTranslations<'home'>>) => {

    return z.object({
        name: z.string().nonempty(t("contact.form.error.name")),
        email: z.email(t("contact.form.error.name")),
        message: z.string().nonempty(t("contact.form.error.message"))
    })
};

export type ContactFormValues = z.infer<ReturnType<typeof ContactFormSchema>>;