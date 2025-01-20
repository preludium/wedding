import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from './ui/textarea';

interface Props {
  name: string;
  label: string;
  required: boolean;
  disabled?: boolean;
}

export function TextareaField({ name, label, required, disabled }: Props) {
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
            <Textarea {...field} invalid={Boolean(errors[name])} disabled={disabled} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
