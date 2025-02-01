import Contact from '../contact/Contact';

const ContactList =({contacts, handleDelete})=>{
    return (
        <ul>
        {contacts.map(contact =>
        <Contact key={contact.id} handleDelete={handleDelete} data={contact} />
         )} </ul>
    )

}

export default ContactList;