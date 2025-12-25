import { FormControl, FormDescription, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import type { ControllerRenderProps, UseFormReturn } from "react-hook-form";

interface FormCertification {
  certification: File;
}

interface FormCertificatesContentProps {
  form: UseFormReturn<FormCertification, any, FormCertification>;
}

const FormCertificatesContent = ({ form }: FormCertificatesContentProps) => {
  const [selectedImg, setSelectedImg] = useState<string>("");
  const fileImg = useRef<HTMLInputElement | null>(null);

  const handleImage = (
    field: ControllerRenderProps<FormCertification, "certification">
  ) => {
    const file = fileImg?.current?.files?.[0];
    if (!file) return;
    const blob = URL.createObjectURL(file);
    setSelectedImg(blob);
    field.onChange(file);
  };

  useEffect(() => {
    return () => URL.revokeObjectURL(selectedImg);
  });
  return (
    <div className="w-full h-55 bg-[#222] rounded-md relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-1/2 w-11/12 gap-2 text-center flex flex-col items-center">
        <Icon icon="ri:image-add-fill" width={60} />
        <h2 className="font-semibold text-xl">Add Your Image</h2>
      </div>
      {selectedImg && (
        <img
          src={selectedImg!}
          alt="img-certificate"
          className="w-full h-full object-cover absolute "
        />
      )}
      <FormField
        control={form.control}
        name="certification"
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

export default FormCertificatesContent;
