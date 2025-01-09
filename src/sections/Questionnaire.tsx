import { InputField } from "@/components/InputField";
import { RadioGroupField } from "@/components/RadioGroupField";
import { Button } from "@/components/ui/button";
import { Form, FormMessage } from "@/components/ui/form";
import { config } from "@/config";
import { useTranslation } from "@/translations/useTranslation";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const Questionnaire = () => {
  const { t } = useTranslation();

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
    fullname: z.string({ required_error: t("questionnaire.requiredField") }),
    email: z
      .string({ required_error: t("questionnaire.requiredField") })
      .email(),
    phoneNumber: z.string({ required_error: t("questionnaire.requiredField") }),
  });

  const [sending, setSending] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { confirmAttendance } = form.getValues();

  const sendEmail = (formData: z.infer<typeof FormSchema>) => {
    setSending(true);
    emailjs
      .send(config.emailServiceId, config.emailTemplateId, formData, {
        publicKey: config.emailPublicKey,
      })
      .then(
        () => {
          toast.success(t("questionnaire.success"));
        },
        () => {
          toast.error(t("questionnaire.failure"));
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section id="questionnaire" className="section container flex flex-col justify-around items-center text-center h-viewport-1/2 md:h-viewport">
      <Form {...form}>
        <form
          className="flex flex-col gap-8 min-w-[900px] p-10 rounded-lg shadow-2xl"
          onSubmit={form.handleSubmit(sendEmail)}>
          <div className="grid grid-cols-2 gap-8">
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
              />
              {confirmAttendance === "yes" && (
                <>
                  <RadioGroupField
                    name="transportToWeddingVenue"
                    label={t("questionnaire.transportToWeddingVenue.title")}
                    options={[
                      {
                        label: t(
                          "questionnaire.transportToWeddingVenue.onMyOwn"
                        ),
                        value: "onMyOwn",
                      },
                      {
                        label: t(
                          "questionnaire.transportToWeddingVenue.needHelp"
                        ),
                        value: "needHelp",
                      },
                    ]}
                    required={
                      !FormSchema.shape.transportToWeddingVenue.isOptional()
                    }
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
                  />
                </>
              )}
            </div>
            <div className="flex flex-col gap-5">
              <InputField
                name="fullname"
                label={t("questionnaire.fullName")}
                required={!FormSchema.shape.fullname.isOptional()}
              />
              <InputField
                name="email"
                label={t("questionnaire.email")}
                required={!FormSchema.shape.email.isOptional()}
              />
              <InputField
                name="phoneNumber"
                label={t("questionnaire.phoneNumber")}
                required={!FormSchema.shape.phoneNumber.isOptional()}
              />
            </div>
          </div>
          <FormMessage />
          <Button className="w-full" type="submit" disabled={sending}>
            {t("questionnaire.send")}
          </Button>
        </form>
      </Form>
    </section>
  );
};
