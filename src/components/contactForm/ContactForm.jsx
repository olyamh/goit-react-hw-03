import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const ContactForm = ({addContacts}) => {
  const initialValues = {
    name: "",
    number: "",
  };
//   const phoneRegex = /^(\d{3}-\d{2}-\d{2}|\d{7})$/;
//   const nameRegex = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;

//   const ContactSchema = Yup.object().shape({
//     name: Yup.string()
//       .min(3, 'The name must contain more than 3 characters')
//       .max(50, 'The name must contain up to 50 characters')
//       .required('This field is required')
//       .matches(nameRegex, 'Enter only letters'),
//     number: Yup.string()
//       .required('This field is required')
//       .min(7, 'The number must contain at least 7 characters')
//       // .max(9, 'The number must contain up to 9 characters')
//       .matches(phoneRegex, 'Phone number format ХХХ-ХХ-ХХ'),
//   });

  const nameRegex = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
  const phoneNumberRegex = /^\+?3?8?(0\d{9})$/;

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "The name must contain more than 2 characters")
      .max(50, "The name must contain up to 50 characters")
      .required("This field is required")
      .matches(nameRegex, "Enter only letters"),
    // number: Yup.string()
    //   .min(7, "The number must contain at least 7 characters")
    //   .max(10, "The number must contain up to 10 characters")
    //   .matches(
    //     phoneNumberRegex,
    //     "Please enter your phone number in the following format: XXX-XX-XX"
    //   )
    //   .required("This field is required"),
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
        <Form>
          <div>
            <label>
              Name
              <Field name="name" />
              <ErrorMessage name="name" component="span"></ErrorMessage>
            </label>
          </div>

          <div>
            <label>
              Phone
              <Field name="number" />
              <ErrorMessage name="number" component="span" />
            </label>
          </div>

          <button disabled={!values.name || !values.number} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
