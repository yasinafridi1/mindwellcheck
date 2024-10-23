import React from "react";
import Modal from "./Modal";

const SocialMediaModal = ({ onClick, open }) => {
  return (
    <Modal headerText={"Social Media"} onclick={onClick} open={open}></Modal>
  );
};

export default SocialMediaModal;
