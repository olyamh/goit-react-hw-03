import { useState } from 'react';
import contacts from './contacts.json';
import './App.css'
import ContactForm from './components/contactForm/ContactForm'
import SearchBox from './components/searchBox/SearchBox'
import ContactList from './components/contactList/ContactList'
import Contact from './components/contact/Contact';


const filterContacts = (contacts, filteredValue)=> contacts.filter(contact =>
  contact.name.toLowerCase().includes(filteredValue.toLowerCase().trim())
);
function App() {
 const [contact, setContact] = useState(contacts);

 const [searchValue, setSearchValue] = useState('');
 const filteredContacts =filterContacts (contact, searchValue)

const handleDelete = id =>{
  const newContactList = contact.filter(item => item.id !== id);
  setContact(newContactList);
};
const handleSearchChange = e =>{
  console.log(e.target.value)
  setSearchValue(e.target.value)
}


// const searchContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim()))



  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox value={searchValue} onChange={handleSearchChange}/>
  <ContactList contacts={filteredContacts} handleDelete={handleDelete}/>
</div>
  )
}

export default App
