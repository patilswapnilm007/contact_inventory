import "./ContactListContainer.css";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
// import data from "../Contacts.json";
import AddEditContactModal from "./AddEditContactModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { connect } from "react-redux";
import { addContact, updateContact, deleteContact } from "../redux/actions";

function ContactListContainer(props) {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [action, setAction] = useState();
  const [contactDetails, setContactDetails] = useState();

  const onAddClickHandler = () => {
    setAction("Add");
    setShowModal((showModal) => !showModal);
  };

  const onEditClickHandler = (value) => {
    setAction("Edit");
    setShowModal((showModal) => !showModal);
    setContactDetails(value);
  };
  const onModalCloseHandler = () => {
    setShowModal(false);
    setAction("");
    setContactDetails(null);
  };

  const onDeleteClickHandler = (contact) => {
    // if (
    //   window.confirm(
    //     `Do you really wants to delete the record ${contact.id}?`
    //   ) == true
    // ) {
    //   props.deleteContact(contact);
    // }
    setShowConfirmModal(true);
    setContactDetails(contact);
  };

  const onHideConfirm = () => {
    setShowConfirmModal(false);
    setContactDetails(null);
  };

  const onDelete = (contact) => {
    setShowConfirmModal(false);
    props.deleteContact(contact);
    setContactDetails(null);
  };
  return (
    <div>
      <div className="add-btn-container">
        <Button
          variant="primary"
          onClick={onAddClickHandler}
          className="add-btn"
        >
          Add contact
        </Button>
      </div>
      <AddEditContactModal
        show={showModal}
        onHide={onModalCloseHandler}
        action={action}
        contactDetails={contactDetails}
        addContact={props.addContact}
        updateContact={props.updateContact}
      />
      <ConfirmDeleteModal
        show={showConfirmModal}
        onHideConfirm={onHideConfirm}
        onDelete={onDelete}
        contactDetails={contactDetails}
      />
      <Table className="table-fixed" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Phone number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {props.contacts.map((value, index) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.first_name}</td>
              <td>{value.last_name}</td>
              <td>{value.email}</td>
              <td>{value.phone_number}</td>
              <td>{value.status}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => onEditClickHandler(value)}
                  className="btn edit-btn"
                >
                  Edit
                </Button>
                <Button
                  variant="primary"
                  onClick={() => onDeleteClickHandler(value)}
                  className="btn delete-btn"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { contacts: state.contactsList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(addContact(contact)),
    updateContact: (contact) => dispatch(updateContact(contact)),
    deleteContact: (contact) => dispatch(deleteContact(contact)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListContainer);
