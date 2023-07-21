import AsyncSelect from "react-select/async";
import { FC } from "react";

interface SelectProps {
  label: string;
  value?: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
  disabled?: boolean;
  loadOptions: (inputValue: string) => Promise<any[]>;
}

const Select: FC<SelectProps> = ({
  label,
  value,
  onChange,
  disabled,
  loadOptions,
}) => {
  return (
    <div className="z-[100]">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <AsyncSelect
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          isMulti={true}
          menuPortalTarget={document.body}
          defaultOptions
          loadOptions={loadOptions}
          styles={{
            menuPortal: (base) => ({
                ...base,
                zIndex: 9999
            }),
          }}
          classNames={{
            control: () => "text-sm"
          }}
        />
      </div>
    </div>
  );
};

export default Select;
