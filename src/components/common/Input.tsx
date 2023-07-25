import React, { ChangeEventHandler } from "react";

type InputProps = {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
  placeholder,
}) => (
  <div className="mb-6">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-1 px-4 py-2 w-full border rounded-md focus:ring-[#23272F] focus:border-[#23272F] border-gray-300"
      required={required}
    />
  </div>
);

export default Input;
