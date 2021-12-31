import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ConfirmDeleteModal(props) {
  const { onHideConfirm, onDelete, contactDetails, ...remainingProps } = props;
  return contactDetails ? (
    <Modal
      {...remainingProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      data-testid="confirmDeleteModal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirm Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="tableBody">
        {`Do you really wants to delete the record ${contactDetails.id}?`}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => onDelete(contactDetails)}>
          Delete
        </Button>
        <Button variant="light" onClick={onHideConfirm}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  ) : null;
}

export default ConfirmDeleteModal;
