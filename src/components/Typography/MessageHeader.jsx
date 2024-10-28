import React from "react";

const MessageHeader = ({ header, description }) => {
  return (
    <>
      {header && <h1 className="text-3xl poppin-700 mb-2">{header}</h1>}
      {description && (
        <h4 className="text-base text-gray-700 w-full text-left">
          {description}
        </h4>
      )}
    </>
  );
};

export default MessageHeader;
