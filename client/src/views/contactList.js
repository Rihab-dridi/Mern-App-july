import Contact from "./contact";
import AddContact from "./addContact";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getHandler } from "../redux/action/contact-action";
import { useSelector } from "react-redux";

export default function ContactList({ contactList }) {

  const dispatch = useDispatch();
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/contacts/all")
  //     .then((res) => dispatch(getHandler(res.data)))
  //     .catch((err) => console.log(err));
  // }, []);
  useEffect(() => {
   dispatch(getHandler())
   
  }, [])

const contact = useSelector(state => state.contact)
  return (
    <div>
      <h1> Contact List</h1>
      <AddContact />
      <div className="contactListContainer">
        {contact.map((el, key) => (
          <Contact el={el} key={el.id} />
        ))}
      </div>
    </div>
  );
}
