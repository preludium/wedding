import { InputField } from "@/components/InputField";
import { RadioGroupField } from "@/components/RadioGroupField";
import { TextareaField } from "@/components/TextareaField";
import { Button } from "@/components/ui/button";
import { Form, FormMessage } from "@/components/ui/form";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/translations/useTranslation";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const Questionnaire = () => {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const FormSchema = z.object({
    confirmAttendance: z.enum(["yes", "no"], {
      required_error: t("questionnaire.requiredField"),
    }),
    transportToWeddingVenue: z.enum(["onMyOwn", "needHelp"]).optional(),
    transportToHotel: z
      .enum(["onMyOwn", "needHelp", "notRelevant"], {
        required_error: t("questionnaire.requiredField"),
      })
      .optional(),
    allergies: z
      .string({ required_error: t("questionnaire.requiredField") })
      .optional(),
    fullname: z.string({ required_error: t("questionnaire.requiredField") }),
    email: z
      .string({ required_error: t("questionnaire.requiredField") })
      .email(),
    phoneNumber: z.string({ required_error: t("questionnaire.requiredField") }),
    address: z
      .string({ required_error: t("questionnaire.requiredField") })
      .optional(),
  });

  const [sending, setSending] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const sendEmail = (formData: z.infer<typeof FormSchema>) => {
    setSending(true);
    emailjs
      .send(config.emailServiceId, config.emailTemplateId, formData, {
        publicKey: config.emailPublicKey,
      })
      .then(
        () => {
          toast.success(t("questionnaire.success"), { duration: 5000 });
          setSent(true);
        },
        () => {
          toast.error(t("questionnaire.failure"), { duration: 5000 });
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section
      id="questionnaire"
      className="section container flex flex-col gap-16 justify-center items-center text-center min-h-viewport-1/2 md:min-h-viewport py-28">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-4xl font-medium font-PlayfairDisplay mb-2">
          {t("questionnaire.title")}
        </h3>
        <div className="border-[#e8ca9b] border-b-2 md:w-[30%] -md:w-[50%]" />
        <p>{t("questionnaire.p")}</p>
      </div>
      <Form {...form}>
        <form
          className="flex flex-col gap-8 md:min-w-[900px] p-10 rounded-md shadow-around"
          onSubmit={form.handleSubmit(sendEmail)}>
          <div
            className={cn("grid md:grid-cols-2 gap-8", {
              "md:grid-cols-3": form.watch("confirmAttendance") === "yes",
            })}>
            <div className="flex flex-col gap-6">
              <RadioGroupField
                name="confirmAttendance"
                label={t("questionnaire.confirmAttendance.title")}
                options={[
                  {
                    label: t("questionnaire.confirmAttendance.yes"),
                    value: "yes",
                  },
                  {
                    label: t("questionnaire.confirmAttendance.no"),
                    value: "no",
                  },
                ]}
                required={!FormSchema.shape.confirmAttendance.isOptional()}
                disabled={sent}
              />
              <TextareaField
                name="allergies"
                label={t("questionnaire.allergies")}
                required={!FormSchema.shape.allergies.isOptional()}
                disabled={sent}
              />
            </div>
            <div
              className={cn('flex flex-col gap-5',{
                hidden: form.watch("confirmAttendance") !== "yes",
              })}>
              <RadioGroupField
                name="transportToWeddingVenue"
                label={t("questionnaire.transportToWeddingVenue.title")}
                options={[
                  {
                    label: t("questionnaire.transportToWeddingVenue.onMyOwn"),
                    value: "onMyOwn",
                  },
                  {
                    label: t("questionnaire.transportToWeddingVenue.needHelp"),
                    value: "needHelp",
                  },
                ]}
                required={
                  !FormSchema.shape.transportToWeddingVenue.isOptional()
                }
                disabled={sent}
              />
              <RadioGroupField
                name="transportToHotel"
                label={t("questionnaire.transportToHotel.title")}
                options={[
                  {
                    label: t("questionnaire.transportToHotel.onMyOwn"),
                    value: "onMyOwn",
                  },
                  {
                    label: t("questionnaire.transportToHotel.needHelp"),
                    value: "needHelp",
                  },
                  {
                    label: t("questionnaire.transportToHotel.notRelevant"),
                    value: "notRelevant",
                  },
                ]}
                required={!FormSchema.shape.transportToHotel.isOptional()}
                disabled={sent}
              />
            </div>
            <div className="flex flex-col gap-5">
              <InputField
                name="fullname"
                label={t("questionnaire.fullName")}
                required={!FormSchema.shape.fullname.isOptional()}
                disabled={sent}
              />
              <InputField
                name="phoneNumber"
                label={t("questionnaire.phoneNumber")}
                required={!FormSchema.shape.phoneNumber.isOptional()}
                disabled={sent}
              />
              <InputField
                name="email"
                label={t("questionnaire.email")}
                required={!FormSchema.shape.email.isOptional()}
                disabled={sent}
              />
              <InputField
                name="address"
                label={t("questionnaire.address")}
                required={!FormSchema.shape.address.isOptional()}
                disabled={sent}
              />
            </div>
          </div>
          <FormMessage />
          <Button className="w-full" type="submit" disabled={sending || sent}>
            {sent ? t("questionnaire.sent") : t("questionnaire.send")}
          </Button>
        </form>
      </Form>
    </section>
  );
};
