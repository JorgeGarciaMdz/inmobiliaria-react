import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";

const UserForm = () => {

	const [user, setUser] = useState({ email: '-    s', password: '    p' })
    return <>
    <h1>Formik</h1><br/>
    <div className="flex justify-center items-center w-full h-3/4">

        <Formik
          initialValues={user}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            }
				if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
      
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className=" bg-white p-16 rounded-md shadow-lg w-96">
					<label className="uppercase font-bold justify-center flex" htmlFor="email">Email</label>
              <input
				  className="block border-2 w-full p-3 mb-6 mt-2 rounded-sm"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <span>{errors.email && touched.email && errors.email}</span>

					<br/>
					<label className="uppercase font-bold justify-center flex" htmlFor="password">Password</label>
              <input
				  className="block border-2 w-full p-3 mb-6 mt-2 rounded-sm"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
        
					<br/>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>

</div>
    </>
}

export { UserForm }
