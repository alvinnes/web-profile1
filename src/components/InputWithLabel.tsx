import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";

interface InputWithLabelProps {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
}

const InputWithLabel = ({
  label,
  id,
  placeholder,
  type = "text",
}: InputWithLabelProps) => {
  return (
    <div className="grid w-full items-center gap-3">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className="py-7 px-4"
      />
    </div>
  );
};

export default InputWithLabel;
