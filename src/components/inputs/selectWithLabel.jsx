import React from "react";
import InputWrapper from "../wrapper/InputWrapper";
import ErrorText from "../Typography/ErrorText";

const SelectWithLabel = ({
  label,
  name,
  onChange,
  options,
  value,
  touch,
  error,
  onBlur,
}) => {
  return (
    <InputWrapper>
      <label className="mt-3 mb-1 ml-2 text-gray-600 text-sm">{label}</label>
      <select
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        className="border border-[--primary] outline-none text-gray-900 sm:text-sm rounded-full focus:border-[--primary-dark] block w-full p-3"
      >
        {options.map((item, index) => (
          <option key={index} value={item.value} disabled={item.disabled}>
            {item.label}
          </option>
        ))}
      </select>
      {error && touch && <ErrorText text={error} />}
    </InputWrapper>
  );
};

export default SelectWithLabel;
