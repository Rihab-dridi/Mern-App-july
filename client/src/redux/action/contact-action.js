import {
  DELETE_CONTACT,
  GET_CONTACT,
} from "../action-types/contact-action-types";
import axios from "axios";

// export const getHandler=(contacts)=>{
//     return {
//         type: GET_CONTACT,
//         payload:contacts
//     }
// }

export const getHandler = () => async (dispatch) => {
  await axios
    .get("http://localhost:5000/api/contacts/all")
    .then((res) =>
      dispatch({
        type: GET_CONTACT,
        payload: res.data,
      })
    )

    .catch((err) => console.log(err));
};

export const addHandler = (newContact) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/contacts/add", newContact)
    .then((res) => dispatch(getHandler()))
    .catch((err) => console.log(err));
};

export const deleteHandler=(id)=>dispatch=>{
  axios.delete(`http://localhost:5000/api/contacts/delete/${id} `)
  .then((res) => dispatch(getHandler()))
  .catch((err) => console.log(err));
}

export const editHandler=(editedContact,id)=>dispatch=>{
  axios.put(`http://localhost:5000/api/contacts/edit/${id}`, editedContact)
  .then((res) => dispatch(getHandler()))
  .catch((err) => console.log(err));

}



