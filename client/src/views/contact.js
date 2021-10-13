
import { Card,ListGroup,Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteHandler } from "../redux/action/contact-action";
import EditContact from './editContact'
export default function Contact({el}) {

  const dispatch = useDispatch()
   const deleteContact=()=>{
     dispatch(deleteHandler(el._id))
   }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header> {el.name} </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{el.email}</ListGroup.Item>
          <ListGroup.Item>{el.phone} </ListGroup.Item>
          <div className='contact-btns' >
          <Button variant="outline-light"  onClick={deleteContact} >Delete</Button>{' '}
          <EditContact el={el} />
          </div>
        </ListGroup>
      </Card>
    </div>
  );
}
