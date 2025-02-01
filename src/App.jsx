import React, { useEffect, useState } from 'react';
import initialContacts from './contacts.json';
import './App.css';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import ContactList from './components/contactList/ContactList';
import Contact from './components/contact/Contact';
import { nanoid } from 'nanoid';
import Notification from './components/notification/Notification';

const filterContacts = (contacts, filteredValue) =>contacts && contacts.filter(contact =>
  contact.name.toLowerCase().includes(filteredValue.toLowerCase().trim())
);

const LS_KEY = "contacts"; 

function App() {
 const [contacts, setContacts] = useState(() =>
{
  const savedContacts = JSON.parse(localStorage.getItem(LS_KEY));
  if (!savedContacts){
    return initialContacts
  }
 return savedContacts
}
);



 useEffect(() => {
  localStorage.setItem(LS_KEY, JSON.stringify(contacts));
 }, [contacts]
);
 const [searchValue, setSearchValue] = useState('');
 const filteredContacts = filterContacts(contacts, searchValue);

 const addContacts = newContact =>{
  const checkName = contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase().trim());
  const checkNumber = contacts.find(contact => contact.number === newContact.number);

  if(checkName){
   alert('This name is already in your phone book');
   return;
  }
  if (checkNumber){
    alert('This number is already in your phone book');
    return;
  }
  newContact.id = nanoid();
  setContacts(prev => [...prev, newContact])
  
 };

 const handleDelete = id =>{
  const newContactList = contacts.filter(item => item.id !== id);
  setContacts(newContactList);
 };

 const handleSearchChange = e =>{
  console.log(e.target.value);
  setSearchValue(e.target.value);
 };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts}/>
      {contacts.length > 1 ? <SearchBox value={searchValue} onChange={handleSearchChange}/>:
     <div></div>}
     
      {contacts.length === 0 ?  <Notification /> :
      <ContactList contacts={filteredContacts} handleDelete={handleDelete}/>}
    </div>
  );
};

export default App;