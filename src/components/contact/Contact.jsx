import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import s from './Contact.module.css';
import clsx from 'clsx'

const Contact = ({data:{id, name, number}, handleDelete}) => {

    return (
           <li className={clsx(s.wrapper)}>
            <div className={clsx(s.namePhone)}>
            <p className={clsx(s.text)}><span className={clsx(s.span)}><IoPersonSharp /></span>{name}</p>
            <p ><span className={clsx(s.span)}><FaPhoneAlt /></span>{number}</p></div>
            <div className={clsx(s.buttonContainer)}>
            <button onClick={() => handleDelete(id)} className={clsx(s.button)}>Delete</button>
            </div>
        </li>
       
    )

}

export default Contact;