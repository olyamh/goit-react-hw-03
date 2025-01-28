import { Field, Form, Formik } from "formik";



const ContactForm =() =>{

    const initialValues ={
        name:'',
    number:''
    };
    
    const handleSubmit = (values, actions) => {
        actions.resetForm();
        console.log(values)
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
           {({values})=>(
             <Form >
             <Field name='name'></Field>
             <Field name='number' type='number'></Field>
             <button disabled={!values.name || !values.number} type='submit' >Add contact</button>
         </Form>

           )}
        </Formik>
    )

}

export default ContactForm;