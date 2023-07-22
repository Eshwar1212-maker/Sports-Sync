import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { FC } from "react";

const CustomOption = (props: any) => {
  return (
    <components.Option {...props}>
      <div className="flex justify-between h-10 cursor-pointer">
      <div style={{ marginLeft: 10 }}>{props.label}</div>
        <img className="rounded-full" src={props.data.image} alt="User" width={46} height={46} />
      </div>
    </components.Option>
  );
};

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
          components={{ Option: CustomOption }}
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
