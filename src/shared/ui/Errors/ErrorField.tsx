import { CircleAlert, LucideIcon } from "lucide-react";
import { FieldError } from "react-hook-form";

type Props = {
  icon?: LucideIcon;
  field: FieldError | undefined;
  id: string;
};

export const ErrorField = ({ icon: Icon, field, id }: Props) => {
  return (
    <>
      {field && (
        <div id={id} className="font-mono text-red-500 text-sm mt-1 flex items-center gap-2">
          {Icon ? <Icon /> : <CircleAlert />}
          <span className="pl-1">{field.message}</span>
        </div>
      )}
    </>
  );
};
