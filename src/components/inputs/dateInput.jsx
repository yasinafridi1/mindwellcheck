import React from "react";
import InputWrapper from "../wrapper/InputWrapper";
import ErrorText from "../Typography/ErrorText";

const DateInput = ({
  name,
  value,
  onChange,
  onBlur,
  placeHolder,
  error,
  touch,
}) => {
  return (
    <InputWrapper>
      <input
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeHolder}
        className="border border-[--primary] outline-none text-gray-900 sm:text-sm rounded-full focus:border-[--primary-dark] block w-full p-3"
      />
      {error && touch && <ErrorText text={error} />}
    </InputWrapper>
  );
};

export default DateInput;