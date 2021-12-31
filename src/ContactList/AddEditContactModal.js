import React, { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function AddEditContactModal(props) {
  const { action, contactDetails, ...remainingProps } = props;
  const fNameRef = useRef();
  const lNameRef = useRef();
  const pnumberRef = useRef();
  const emailRef = useRef();
  const statusRef = useRef();
  const formRef = useRef();

  const onFormSave = () => {
    const newContact = {
      first_name: fNameRef.current.value,
      last_name: lNameRef.current.value,
      email: emailRef.current.value,
      phone_number: pnumberRef.current.value,
      status: statusRef.current.value,
    };

    if (formRef.current.checkValidity()) {
      if (action === "Add") {
        props.addContact(newContact);
      } else {
        props.updateContact({
          ...contactDetails,
          ...newContact,
        });
      }
      props.onHide();
    } else {
      alert("Please properly fill up form!");
    }
  };
  return (
    <Modal
      {...remainingProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      data-testid="addEditModal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {`${action} contact`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="tableBody">
        <Form ref={formRef}>
          <FloatingLabel
            controlId="first_name"
            label="First name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="First Name"
              defaultValue={contactDetails ? contactDetails.first_name : ""}
              ref={fNameRef}
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="last_name"
            label="Last name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Last Name"
              defaultValue={contactDetails ? contactDetails.last_name : ""}
              ref={lNameRef}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="email" label="Email Id" className="mb-3">
            <Form.Control
              type="email"
              placeholder="abc@xyz.com"
              defaultValue={contactDetails ? contactDetails.email : ""}
              ref={emailRef}
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="phone_number"
            label="Phone number (XXXXXXXXXX) "
            className="mb-3"
          >
            <Form.Control
              type="tel"
              placeholder="Phone number (XXXXXXXXXX) "
              defaultValue={contactDetails ? contactDetails.phone_number : ""}
              ref={pnumberRef}
              pattern="^\d{10}$"
              required
            />
          </FloatingLabel>
          <Form.Select
            size="md"
            defaultValue={
              contactDetails && contactDetails.status
                ? contactDetails.status
                : "inactive"
            }
            ref={statusRef}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onFormSave}>
          {action === "Add" ? "Save" : "Update"}
        </Button>
        <Button variant="light" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
