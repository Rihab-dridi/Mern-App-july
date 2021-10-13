import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHandler } from "../redux/action/contact-action";

export default function Example() {
  const [show, setShow] = useState(false);
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const addContact = () => {
    const newContact = { name, email, phone };
    dispatch(addHandler(newContact));
    handleClose()
    setname('')
    setemail('')
    setphone('')
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a contact </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="enter the  name"
            onChange={(e) => setname(e.target.value)}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="enter the phone number"
            onChange={(e) => setphone(e.target.value)}
          />
          <br />
          <Form.Control
            type="email"
            placeholder="enter the  email"
            onChange={(e) => setemail(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addContact}>
            add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
