import React from "react";
import Modal from "react-modal";

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      onEscapeKeyDown={onClose}
    >
      <button onClick={onClose}>X</button>
      {image && <img src={image.urls.full} alt={image.alt_description} />}
    </Modal>
  );
};
export default ImageModal;