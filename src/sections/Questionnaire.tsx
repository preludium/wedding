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
import { Heart } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const Questionnaire = () => {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  
  
  const yesNoEnum = z.enum(["yes", "no"], {
    required_error: t("questionnaire.requiredField"),
  });

  const FormSchema = z.discriminatedUnion('confirmAttendance',[
    z.object({
    confirmAttendance: yesNoEnum.extract(['yes']),
    seafood: yesNoEnum,
    main: z.enum(["meat", "fish", "vegetarian"], {
      required_error: t("questionnaire.requiredField"),
    }),
    hotel: z.string({
      required_error: t("questionnaire.requiredField"),
    }),
    busToTheCastle: yesNoEnum,
    busToNovotel: yesNoEnum,
    breakfast: yesNoEnum,
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
  }),
  z.object({
    confirmAttendance: yesNoEnum.extract(['no']),
    fullname: z.string({ required_error: t("questionnaire.requiredField") }),
    email: z
      .string({ required_error: t("questionnaire.requiredField") })
      .email(),
    phoneNumber: z.string({ required_error: t("questionnaire.requiredField") }),
    address: z
      .string({ required_error: t("questionnaire.requiredField") })
      .optional()
  })
]);

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
      className="flex flex-col gap-16 justify-center items-center text-center py-28 bg-[#fcfcfc]">
      <div className="container flex flex-col gap-16 max-w-[1032px]">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-4xl font-medium font-PlayfairDisplay mb-2">
            {t("questionnaire.title")}
          </h3>
          <div className="flex items-center justify-center w-full">
            <div className="h-[1px] bg-[#e8ca9b] md:w-[15%] -md:w-[25%]"></div>
            <Heart className="mx-2 text-[#e8ca9b] h-5 w-5" />
            <div className="h-[1px] bg-[#e8ca9b] md:w-[15%] -md:w-[25%]"></div>
          </div>
          <p>{t("questionnaire.p")}</p>
        </div>
        <Form {...form}>
          <form
            className="flex flex-col gap-8 md:min-w-[900px] p-6 rounded-xl shadow-around-sm text-start bg-secondary"
            onSubmit={form.handleSubmit(sendEmail)}>
            <div
              className={cn("grid md:grid-cols-2 gap-8", {
                "md:grid-cols-2": form.watch("confirmAttendance") === "yes",
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
                  required={!FormSchema.options[0].shape.confirmAttendance.isOptional()}
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
                      required={!FormSchema.options[0].shape.seafood.isOptional()}
                      disabled={sent}
                    />
                  </div>
                  <RadioGroupField
                    name="main"
                    label={t("questionnaire.main.title")}
                    options={[
                      {
                        label: t("questionnaire.main.meat"),
                        value: "meat",
                      },
                      {
                        label: t("questionnaire.main.fish"),
                        value: "fish",
                      },
                      {
                        label: t("questionnaire.main.vegetarian"),
                        value: "vegetarian",
                      },
                    ]}
                    required={!FormSchema.options[0].shape.main.isOptional()}
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
                        },
                        {
                          label: t("questionnaire.hotel.abbayeDuGolf"),
                          value: "Abbaye du Golf",
                        },
                        {
                          label: t("questionnaire.hotel.no"),
                          value: "no",
                        },
                      ]}
                      required={!FormSchema.options[0].shape.hotel.isOptional()}
                      disabled={sent}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">
                      {t("questionnaire.section.breakfast")}
                    </h3>
                    <RadioGroupField
                      name="breakfast"
                      label={t("questionnaire.breakfast.title")}
                      options={[
                        {
                          label: t("questionnaire.breakfast.yes"),
                          value: "yes",
                        },
                        {
                          label: t("questionnaire.breakfast.no"),
                          value: "no",
                        },
                      ]}
                      required={!FormSchema.options[0].shape.breakfast.isOptional()}
                      disabled={sent}
                    />
                    </div>
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
                      required={!FormSchema.options[0].shape.busToTheCastle.isOptional()}
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
                    required={!FormSchema.options[0].shape.busToNovotel.isOptional()}
                    disabled={sent}
                  />
                  <TextareaField
                    name="anyOtherQueries"
                    label={t("questionnaire.anyOtherQueries")}
                    required={!FormSchema.options[0].shape.anyOtherQueries.isOptional()}
                    disabled={sent}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <InputField
                  name="fullname"
                  label={t("questionnaire.fullName")}
                  required={!FormSchema.options[0].shape.fullname.isOptional()}
                  disabled={sent}
                />
                <InputField
                  name="phoneNumber"
                  label={t("questionnaire.phoneNumber")}
                  required={!FormSchema.options[0].shape.phoneNumber.isOptional()}
                  disabled={sent}
                />
                <InputField
                  name="email"
                  label={t("questionnaire.email")}
                  required={!FormSchema.options[0].shape.email.isOptional()}
                  disabled={sent}
                />
                <InputField
                  name="address"
                  label={t("questionnaire.address")}
                  required={!FormSchema.options[0].shape.address.isOptional()}
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
      </div>
    </section>
  );
};
