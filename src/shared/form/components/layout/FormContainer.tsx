import { ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, type ReactNode } from 'react';
import { useFormState } from 'react-hook-form';

import { useAppLocale } from '@/lib/i18n/use-locale';
import { useAppTranslation } from '@/lib/i18n/use-translation';
import { cn } from '@/lib/utils';

import { getFirstErrorPath } from '../../utilities/errors';


interface Props {
    children: ReactNode;
    submitText?: string;
    className?: string;
    contentClassName?: string;
    buttonClassName?: string;
    action?: ReactNode;
}

export function FormContainer({ action, children, submitText, contentClassName, className, buttonClassName }: Props) {
    const cardRef = useRef<HTMLDivElement>(null);

    const { isSubmitting, errors, submitCount, isSubmitted } = useFormState();

    const isUploading = Object.values(errors).some(err => err?.message === "uploading");

    const t = useAppTranslation("layout")
    const { lang } = useAppLocale()

    useEffect(() => {
        if (!isSubmitted || Object.keys(errors).length === 0) return;


        // const messages = getAllErrorMessages(errors);
        // messages.forEach((err) => {
        //     toast.error(err, { toastId: err });
        // });

        const fullErrorPath = getFirstErrorPath(errors);
        if (fullErrorPath) {
            const firstErrorPath = fullErrorPath.split('.')[0];

            const fieldElement =
                document.querySelector(`[name="${firstErrorPath}"]`) ||
                document.querySelector(`[name="${fullErrorPath}"]`) ||
                document.querySelector(`[data-test="${CSS.escape(firstErrorPath)}"]`);

            if (fieldElement) {
                fieldElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });

                fieldElement.classList.add('animate-shake');

                const timer = setTimeout(() => {
                    (fieldElement as HTMLElement).focus?.();
                    fieldElement.classList.remove('animate-shake');
                }, 400);

                return () => clearTimeout(timer);
            }
        }
    }, [errors, isSubmitted, submitCount]);

    return (

        <div
            ref={cardRef}
            className={cn("flex flex-col gap-5", contentClassName)}
        >
            {children}

            <div className="flex items-center gap-4 ">

                <button
                    type="submit"
                    disabled={isSubmitting || isUploading}
                    className={cn(
                        "flex items-center justify-center gap-3 cursor-pointer",
                        "px-3 py-1.5 min-h-0 rounded-4xl relative",
                        "bg-[linear-gradient(134.69deg,rgba(101,137,86,0.91)_0%,rgba(44,79,36,0.96)_52%,rgba(63,95,54,0.94)_100%)]",
                        "border border-[rgba(191,216,167,0.65)]",
                        "shadow-[0px_5px_15px_0px_rgba(43,69,31,0.17),inset_0px_1px_1px_1px_rgba(255,255,255,0.65),inset_0px_-2px_3px_1px_rgba(12,32,5,0.18)] backdrop-blur-[18px]",
                        "font-bold text-[12px] leading-4 tracking-normal text-[#FCFCF8]",
                    )}
                >
                    <div
                        className="absolute bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_100%)] w-[70%] h-4 top-0.5  inset-s-3 rounded-[40px]"
                    ></div>

                    {isSubmitting ? (
                        <div className="flex items-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            {submitText || t("form.actions.submit")}
                        </div>
                    ) : (
                        submitText || t("form.actions.submit")
                    )}
                    {lang === "en" ? <ArrowUpRight size={20} /> : <ArrowUpLeft size={20} />}

                </button>
                {action}
            </div>

        </div>
    );
}