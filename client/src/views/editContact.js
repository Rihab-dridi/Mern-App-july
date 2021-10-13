import { Button, Modal, Form } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import { editHandler } from "../redux/action/contact-action";
import { useState } from "react";

export default function Example({ el }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setname] = useState(el.name)
  const [phone, setphone] = useState(el.phone)
  const [email, setemail] = useState(el.email)
  const dispatch = useDispatch()
  
  const editContact=()=>{
     
   const editedContact={name,email,phone} 
   dispatch( editHandler(editedContact, el._id) )
   handleClose()

  }

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update contact </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder="enter the  name" value={name} onChange={(e)=>setname(e.target.value)}  />
          <br />
          <Form.Control type="text" placeholder="enter the phone number" value={phone} onChange={(e)=>setphone(e.target.value)} />
          <br />
          <Form.Control type="email" placeholder="enter the  email"  value={email} onChange={(e)=>setemail(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editContact }>
            save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
