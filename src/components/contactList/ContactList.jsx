import Contact from '../contact/Contact';

const ContactList =({contacts, handleDelete})=>{
    return (
        <li>
        {contacts.map(contact =>
        <Contact key={contact.id} handleDelete={handleDelete} data={contact} />
         )} </li>
    )

}

export default ContactList;