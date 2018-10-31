import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class ModalCandy extends React.Component {
  render() {
    const closeBtn = (
      <button
        className="close"
        onClick={() => {
          this.props.closeBtn();
        }}
      />
    );
    return (
      <div>
        {this.props.selectedCandy && (
          <Modal
            isOpen={this.props.modal}
            toggle={this.props.closeModal}
            className={this.props.className}
          >
            <ModalHeader toggle={this.props.closeModal} close={closeBtn}>
              Modal title
            </ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
          </Modal>
        )}
      </div>
    );
  }
}

export default ModalCandy;
