import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import clsx from 'clsx';
import s from './ContactForm.module.css';

const ContactForm = ({addContacts}) => {
  const initialValues = {
    name: "",
    number: "",
  };


  const nameRegex = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
  const phoneNumberRegex = /^\+?\d{9,15}$/;

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "The name must contain more than 2 characters")
      .max(50, "The name must contain up to 50 characters")
      .required("This field is required")
      .matches(nameRegex, "Enter only letters"),
    number: Yup.string()
      .matches(
        phoneNumberRegex,
        "The phone number contains only numbers (from 9 to 15 characters)"
      )
      .required("This field is required"),
  });

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    addContacts(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      {({ values }) => (
        <section className={clsx(s.formSection)}>
        <Form className={clsx(s.form)}>
        
            <label className={clsx(s.lable)}>
              Name
              <Field name="name" className={clsx(s.input)} placeholder="enter contact name" />
              <ErrorMessage name="name" component="p" className={clsx(s.error)}></ErrorMessage>
            </label>
          

          
            <label className={clsx(s.lable)}>
              Phone
              <Field name="number" type="text" className={clsx(s.input)} placeholder="enter phone number"/>
              <ErrorMessage name="number" component="p" className={clsx(s.error)} />
            </label>
          

          <button disabled={!values.name || !values.number} type="submit" className={clsx(s.button)}>
            Add contact
          </button>
        </Form></section>
      )}
    </Formik>
  );
};

export default ContactForm;
