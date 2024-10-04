"use client"
import axios from 'axios';
import { Formik, Field, Form } from 'formik';

const CartForm = () => {

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Email requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Email inválido';
    }
    return error;
  };

  const validateFirstName = (value) => {
    let error;
    if (!value) {
      error = 'Nombre requerido';
    }
    return error;
  };

  const addContact = async (values) => {
    
    const data = {contactData: values}
    const response = await axios.post ('api/add-contact', values)
    console.log((response).data)
   }

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-lg font-semibold text-gray-700 mb-2">Nombre</label>
            <Field
              name="firstName"
              placeholder="Jane"
              validate={validateFirstName}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            {errors.firstName && touched.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-lg font-semibold text-gray-700 mb-2">Apellido</label>
            <Field
              name="lastName"
              placeholder="Doe"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
            <Field
              name="email"
              placeholder="jane@acme.com"
              type="email"
              validate={validateEmail}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            {errors.email && touched.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-600 transition-colors duration-300"
          >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default CartForm;
