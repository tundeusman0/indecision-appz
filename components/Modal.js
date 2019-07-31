import React from "react";
import Modal from "react-modal"

// Modal.setAppElement(document.getElementById("app"))
const OptionModal = (props) => (
    <Modal
        className="modal"
        isOpen={!!props.modal}
        ariaHideApp={false}
        onRequestClose={props.closeModal}
        contentLabel="Selected Option"
    >
        <div className="modal__content">
            <h3>Selected Option</h3>
            <h4>{props.modal}</h4>
            <button onClick={props.closeModal}>Okay</button>
        </div>
        
    </Modal>
);

export default OptionModal