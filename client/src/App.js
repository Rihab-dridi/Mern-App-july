import "./App.css";
import ContactList from "./views/contactList";

const contactList = [
  { id: 1, name: "rihab", email: "rihab@gmail.com", phone: 216555555 },
  { id: 2, name: "haythem", email: "haythem@gmail.com", phone: 216555555 },
];

function App() {
  return (
    <div className="App">
      <ContactList contactList={contactList} />
    </div>
  );
}

export default App;
