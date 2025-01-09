import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props {
  name: string;
  label: string;
  required: boolean;
}

export function InputField({ name, label, required }: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="text-start">
          <FormLabel className="flex gap-1">
            {label}
            {required && <span className="text-destructive">*</span>}
          </FormLabel>
          <FormControl>
            <Input {...field} invalid={Boolean(errors[name])} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
