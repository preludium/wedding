import { InputField } from "@/components/InputField";
import { RadioGroupField } from "@/components/RadioGroupField";
import { TextareaField } from '@/components/TextareaField';
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
    seafood: z.enum(["yes", "no"], {
      required_error: t("questionnaire.requiredField"),
    }),
    meat: z.enum(["yes", "no"], {
      required_error: t("questionnaire.requiredField"),
    }),
    hotel: z.string({
      required_error: t("questionnaire.requiredField"),
    }),
    busToTheCastle: z.enum(["yes", "no"], {
      required_error: t("questionnaire.requiredField"),
    }),
    busToNovotel: z.enum(["yes", "no"], {
      required_error: t("questionnaire.requiredField"),
    }),
    fullname: z.string({ required_error: t("questionnaire.requiredField") }),
    email: z
      .string({ required_error: t("questionnaire.requiredField") })
      .email(),
    phoneNumber: z.string({ required_error: t("questionnaire.requiredField") }),
    address: z
      .string({ required_error: t("questionnaire.requiredField") })
      .optional(),
    anyOtherQueries: z
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
      <div className="flex flex-col items-center gap-4 bg-secondary">
        <h3 className="text-4xl font-medium font-PlayfairDisplay mb-2">
          {t("questionnaire.title")}
        </h3>
        <div className="border-[#e8ca9b] border-b-2 md:w-[30%] -md:w-[50%]" />
        <p>{t("questionnaire.p")}</p>
      </div>
      <Form {...form}>
        <form
          className="flex flex-col gap-8 md:min-w-[900px] p-10 rounded-xl shadow-around text-start"
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
              <div
                className={cn("flex flex-col gap-6", {
                  hidden: form.watch("confirmAttendance") !== "yes",
                })}>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium">
                    {t("questionnaire.section.menu")}
                  </h3>
                  <RadioGroupField
                    name="seafood"
                    label={t("questionnaire.seafood.title")}
                    options={[
                      {
                        label: t("questionnaire.seafood.yes"),
                        value: "yes",
                      },
                      {
                        label: t("questionnaire.seafood.no"),
                        value: "no",
                      },
                    ]}
                    required={
                      !FormSchema.shape.seafood.isOptional()
                    }
                    disabled={sent}
                  />
                </div>
                <RadioGroupField
                  name="meat"
                  label={t("questionnaire.meat.title")}
                  options={[
                    {
                      label: t("questionnaire.meat.yes"),
                      value: "yes",
                    },
                    {
                      label: t("questionnaire.meat.no"),
                      value: "no",
                    },
                  ]}
                  required={
                    !FormSchema.shape.meat.isOptional()
                  }
                  disabled={sent}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium">
                    {t("questionnaire.section.hotel")}
                  </h3>
                  <RadioGroupField
                    name="hotel"
                    label={t("questionnaire.hotel.title")}
                    options={[
                      {
                        label: t("questionnaire.hotel.novotel"),
                        value: "Novotel",
                      },{
                        label: t("questionnaire.hotel.abbayeDuGolf"),
                        value: "Abbaye du Golf",
                      },
                      {
                        label: t("questionnaire.hotel.no"),
                        value: "no",
                      },
                    ]}
                    required={
                      !FormSchema.shape.hotel.isOptional()
                    }
                    disabled={sent}
                  />
                </div>
              </div>
            </div>
            <div
              className={cn("flex flex-col gap-6", {
                hidden: form.watch("confirmAttendance") !== "yes",
              })}>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">
                  {t("questionnaire.section.transportation")}
                </h3>
                <RadioGroupField
                  name="busToTheCastle"
                  label={t("questionnaire.busToTheCastle.title")}
                  options={[
                    {
                      label: t("questionnaire.busToTheCastle.yes"),
                      value: "yes",
                    },
                    {
                      label: t("questionnaire.busToTheCastle.no"),
                      value: "no",
                    },
                  ]}
                  required={
                    !FormSchema.shape.busToTheCastle.isOptional()
                  }
                  disabled={sent}
                />
              </div>
              <RadioGroupField
                name="busToNovotel"
                label={t("questionnaire.busToNovotel.title")}
                options={[
                  {
                    label: t("questionnaire.busToNovotel.yes"),
                    value: "yes",
                  },
                  {
                    label: t("questionnaire.busToNovotel.no"),
                    value: "no",
                  },
                ]}
                required={
                  !FormSchema.shape.busToNovotel.isOptional()
                }
                disabled={sent}
              />
              <TextareaField
                    name="anyOtherQueries"
                    label={t("questionnaire.anyOtherQueries")}
                    required={!FormSchema.shape.anyOtherQueries.isOptional()}
                    disabled={sent}
                  />
            </div>
            <div className="flex flex-col gap-6">
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
