import { InputField } from "@/components/InputField";
import { RadioGroupField } from "@/components/RadioGroupField";
import { Form } from "@/components/ui/form";
import { useTranslation } from "@/translations/useTranslation";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

export const Questionnaire = () => {
  const { t } = useTranslation();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const sendEmail = () => {
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="container flex flex-col justify-around items-center text-center h-viewport-1/2 md:h-viewport">
      <Form {...form}>
        <form>
          <RadioGroupField
            name="confirmAttendance"
            label={t("questionnaire.confirmAttendance.title")}
            options={[
              { label: t("questionnaire.confirmAttendance.yes"), value: "yes" },
              { label: t("questionnaire.confirmAttendance.no"), value: "no" },
            ]}
          />
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
          />
          <InputField name="fullname" label={t("questionnaire.fullName")} />
          <InputField name="email" label={t("questionnaire.email")} />
          <InputField
            name="phoneNumber"
            label={t("questionnaire.phoneNumber")}
          />
        </form>
      </Form>
    </section>
  );
};
