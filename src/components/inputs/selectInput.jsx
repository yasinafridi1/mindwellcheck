import React from "react";
import InputWrapper from "../wrapper/InputWrapper";
import ErrorText from "../Typography/ErrorText";

const SelectInput = ({ name, onChange, options, value, touch, error }) => {
  return (
    <InputWrapper>
      <select
        name={name}
        onChange={onChange}
        value={value}
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

export default SelectInput;
