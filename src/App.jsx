import { useState } from 'react';
import initialContacts from './contacts.json';
import './App.css'
import ContactForm from './components/contactForm/ContactForm'
import SearchBox from './components/searchBox/SearchBox'
import ContactList from './components/contactList/ContactList'
import Contact from './components/contact/Contact';
import { nanoid } from 'nanoid/non-secure';


const filterContacts = (contacts, filteredValue)=> contacts.filter(contact =>
  contact.name.toLowerCase().includes(filteredValue.toLowerCase().trim())
);
function App() {
 const [contacts, setContact] = useState(initialContacts);

 const [searchValue, setSearchValue] = useState('');
 const filteredContacts =filterContacts (contacts, searchValue);

 const addContacts = newContact =>{
  const checkName = contacts.find(contact => contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase().trim());
  const checkNumber = contacts.find(contact => contact.number === newContact.number);

  if(checkName){
   alert('this name is in your phone book');
   return;
  }
  if (checkNumber){
    alert('this number is in your phone book');
    return;
  }
  newContact.id=nanoid();
  setContact(prev => [...prev, newContact])
  
 }

const handleDelete = id =>{
  const newContactList = contacts.filter(item => item.id !== id);
  setContact(newContactList);
};
const handleSearchChange = e =>{
  console.log(e.target.value)
  setSearchValue(e.target.value)
}
  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm addContacts={addContacts}/>
  <SearchBox value={searchValue} onChange={handleSearchChange}/>
  <ContactList contacts={filteredContacts} handleDelete={handleDelete}/>
</div>
  )
}

export default App
