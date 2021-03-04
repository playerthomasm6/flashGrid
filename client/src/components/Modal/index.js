import React from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

function ModalForm(props) {
  const editData = props.editData;

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}

      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit the task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Task Name:
              </Form.Label>
              <Col sm="10">
                <Form.Control onChange={props.editChangeData} defaultValue={editData.taskName} name = "taskName"/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Task Desc:
              </Form.Label>
              <Col sm="10">
                <Form.Control onChange={props.editChangeData} defaultValue={editData.taskDescription} name = "taskDescription" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Task Assignee:
              </Form.Label>
              <Col sm="10">
                <Form.Control onChange={props.editChangeData} defaultValue={editData.taskAssigne} name = "taskAssigne"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Task Duedate:
              </Form.Label>
              <Col sm="10">
                <Form.Control onChange={props.editChangeData} defaultValue={editData.taskDueDate} name = "taskDueDate"/>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.editDataSave}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;
