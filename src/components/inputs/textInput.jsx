import React from "react";
import InputWrapper from "../wrapper/InputWrapper";
import ErrorText from "../Typography/ErrorText";

const TextInput = ({
  name,
  value,
  onchange,
  placeholder,
  error,
  onBlur,
  touch,
}) => {
  return (
    <InputWrapper>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        onBlur={onBlur}
        className="border border-[--primary] outline-none text-gray-900 sm:text-sm rounded-full focus:border-[--primary-dark] block w-full p-3"
      />
      {error && touch && <ErrorText text={error} />}
    </InputWrapper>
  );
};

export default TextInput;
