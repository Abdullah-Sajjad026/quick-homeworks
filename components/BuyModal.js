import React from "react";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

const BuyModal = ({open, toggle, subject}) => {
  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader>
        <h2 className="text-3xl">{subject}</h2>
      </ModalHeader>
      <ModalBody>
        <div className="border-b-2 border-indigo-100 py-3 mb-3">
          <p className="text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit ipsam assumenda voluptatibus fugit eum quidem nihil
            aut ab ipsa ut libero aperiam, quibusdam porro veritatis magni!
            Error tempora sint molestias.
          </p>
        </div>
        <div className="grid-cols-2 place-items-center ">
          <a
            href="http://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <span className="p-3 rounded-lg bg-teal-700  inline-block">
              Contact on Whatsapp
            </span>
          </a>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default BuyModal;
