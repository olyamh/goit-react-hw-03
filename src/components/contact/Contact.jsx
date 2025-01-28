import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({data:{id, name, number}, handleDelete}) => {

    return (
           <div>

            <p ><IoPersonSharp />{name}</p>
            <p ><FaPhoneAlt />{number}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>

        </div>
       
    )

}

export default Contact;