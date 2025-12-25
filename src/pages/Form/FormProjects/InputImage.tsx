import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import type { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import type { FormValues } from "./InputItem";

interface InputImageProps {
  form: UseFormReturn<FormValues, any, FormValues>;
}

const InputImage = ({ form }: InputImageProps) => {
  const [selectedImg, setSelectedImg] = useState<string>("");
  const fileImg = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    return () => URL.revokeObjectURL(selectedImg);
  });

  const handleImage = (field: ControllerRenderProps<FormValues, "img">) => {
    const file = fileImg?.current?.files?.[0];
    if (!file) return;
    const blob = URL.createObjectURL(file);
    setSelectedImg(blob);
    field.onChange(file);
  };

  return (
    <div className="w-5/12 h-full rounded-md bg-[#333] relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-1/2 w-11/12 gap-2 text-center flex flex-col items-center">
        <Icon icon="ri:image-add-fill" width={60} />
        <h2 className="font-semibold text-xl">Add Your Image</h2>
      </div>
      {selectedImg && (
        <img
          src={selectedImg!}
          alt="img-project"
          className="w-full h-full object-cover absolute "
        />
      )}
      <FormField
        control={form.control}
        name="img"
        render={({ field }) => (
          <FormItem>
            <FormControl className="flex">
              <Input
                type="file"
                ref={fileImg}
                id="img"
                name={field.name}
                onBlur={field.onBlur}
                className="size-full absolute cursor-pointer opacity-0"
                onChange={() => handleImage(field)}
              />
            </FormControl>
            <FormDescription />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputImage;
