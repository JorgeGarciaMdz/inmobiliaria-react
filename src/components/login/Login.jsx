import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Login } from "../../services/auth/Auth";
import { setLocalToken } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { removeLocalToken } from "../../services/auth/LocalUser";

const LoginForm = () => {

  const [user, setUser] = useState({ email: '', password: '' })
  const navigate = useNavigate();

  // setSubmittin habilita el boton
  const handleOnSubmit = async (values, { setSubmitting, resetForm }) => {
    values.username = values.email;
    setUser(values);
    const { token } = await Login(values)
    resetForm();
    setSubmitting(true);
    if (token) {
      removeLocalToken();
      setLocalToken(token);
      navigate('/');
      window.location.reload(true);
    }
  }

  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Requerido';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Formato de email inválido';
    }

    if (!values.password) {
      errors.password = 'Requerido'
    }

    return errors;
  }

  return <>
    <div className="flex justify-center items-center w-full h-3/4">

      <Formik
        initialValues={user}
        validate={validateForm}
        onSubmit={handleOnSubmit}
      >
        {({
          errors,
          isSubmitting,
        }) => (
          <Form className=" bg-white p-16 rounded-md shadow-lg w-96">
            <label className="uppercase font-bold justify-center flex" htmlFor="email">Email</label>
            <Field
              className="block border-2 w-full p-3 mb-6 mt-2 rounded-sm"
              id="email"
              type="email"
              name="email"
              placeholder="usuario@usuario.com"
            />
            <ErrorMessage name="email" component={() => (<span className="text-red-700">{errors.email}</span>)} />

            <label className="uppercase font-bold justify-center flex" htmlFor="password">Password</label>
            <Field
              className="block border-2 w-full p-3 mb-6 mt-2 rounded-sm"
              id="password"
              type="password"
              name="password"
            />
            <ErrorMessage name="password" component={() => (<span className="text-red-700">{errors.password}</span>)} />

            <button type="submit" disabled={isSubmitting}
              className="bg-sky-600 text-white text-center font-bold p-3 uppercase rounded-md w-full hover:bg-sky-700 transition-colors" >
              Submit
            </button>
          </Form>
        )}
      </Formik>

    </div>
  </>;
}

export { LoginForm }
