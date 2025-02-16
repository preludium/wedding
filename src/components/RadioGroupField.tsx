import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  name: string;
  label: string;
  options: { label: string; value: string }[];
  required: boolean;
  disabled?: boolean
}

export function RadioGroupField({ name, label, options, required, disabled }: Props) {
  const { control } = useFormContext();

  const labelWithAsterisk = (
    <>
      {label}
      {required && <span className="text-destructive ml-1 inline-block">*</span>}
    </>
  );

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3 text-start">
          <FormLabel>{labelWithAsterisk}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              disabled={disabled}
              className="flex flex-col space-y-1">
              {options.map((option) => (
                <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={option.value} />
                  </FormControl>
                  <FormLabel className="font-normal">{option.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
