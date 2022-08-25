import Modal from "react-modal";

import { Fragment, useState } from "react";
import { XIcon } from "@heroicons/react/solid";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: 0,
    background: "rgba(121, 122, 121, 0)",
  },
  overlay: {
    backgroundColor: "rgba(3, 3, 3, 0.8)",
  },
};

Modal.setAppElement("body");

export default function ImageComp({ image, odd }) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <picture key={image.sys.id}>
        <img
          onClick={openModal}
          src={image.fields.file.url}
          alt={image.fields.description}
          className={`-ml-1 max-h-24 max-w-[100px] ${
            odd ? "-rotate-6 -ml-1" : "rotate-6"
          }`}
        />
        <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
          <picture onClick={() => closeModal()}>
            <img
              className="max-w-screen max-h-screen"
              src={image.fields.file.url}
              alt={image.fields.description}
            />
          </picture>
        </Modal>
      </picture>
    </div>
  );
}
