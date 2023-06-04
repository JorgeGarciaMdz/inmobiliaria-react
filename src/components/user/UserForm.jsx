import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Register } from "../../services/auth";

const UserForm = () => {

    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        password: '',
        username: '',
        passwordRepet: '',
        tipoPersona: 'PROPIETARIO'
    })

    const rol = ['PROPIETARIO', 'CLIENTE'];

    const handleOnSubmit = async (values, { setSubmitting, resetForm }) => {
        setUser(values)
        values.username = values.email;
        setSubmitting(true);
        const r = await Register(values);
        if(r)
            console.log("Error in create user values")
        else{
            resetForm();
            values.passwordRepet = ''
        }
    }

    const validateForm = (values) => {
        const errors = {};

        if (!values.nombre) {
            errors.nombre = 'Requerido';
        }

        if (!values.apellido) {
            errors.apellido = 'Requerido';
        }

        if (!values.telefono) {
            errors.telefono = 'Requerido';
        }

        if (!values.password) {
            errors.password = 'Requerido'
        } else if(values.password.length < 7)
            errors.password = 'La contraseña debe tener al menos 8 caracteres'

        if(!values.passwordRepet){
            errors.passwordRepet = 'Requerido'
        } else if( values.passwordRepet !== values.password )
            errors.passwordRepet = 'Las contraseñas no son iguales'

        if (!values.email) {
            errors.email = 'Requerido';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Formato de email inválido';
        }

        return errors;
    }

    return <>
        <div className="flex justify-center items-center w-full h-3/4 mt-5 mb-5">

            <Formik
                initialValues={user}
                validate={validateForm}
                onSubmit={handleOnSubmit}
            >
                {({
                    errors,
                    isSubmitting,
                }) => (
                    <Form className="max-w-md bg-white p-10  rounded-md shadow-lg
            grid grid-cols-2 gap-2 place-items-baseline">
                        <div>
                            <label className="uppercase font-bold" htmlFor="nombre">Nombre</label>
                            <Field
                                className="border-2 p-1.5 rounded-sm mb-2 w-full"
                                id="nombre"
                                type="text"
                                name="nombre"
                                placeholder="your name"
                            />
                            <ErrorMessage name="nombre" component={() => (<span className="text-red-700">{errors.nombre}</span>)} />
                        </div>
                        <div>
                            <label className="uppercase font-bold" htmlFor="apellido">Apellido</label>
                            <Field
                                className="border-2 p-1.5 rounded-sm mb-2 w-full"
                                id="apellido"
                                type="text"
                                name="apellido"
                            />
                            <ErrorMessage name="apellido" component={() => (<span className="text-red-700">{errors.apellido}</span>)} />
                        </div>

                        <div>
                            <label className="uppercase font-bold" htmlFor="email">Email</label>
                            <Field
                                className="border-2 p-1.5 rounded-sm mb-2 w-full"
                                id="email"
                                type="email"
                                name="email"
                            />
                            <ErrorMessage name="email" component={() => (<span className="text-red-700">{errors.email}</span>)} />
                        </div>
                        <div>
                            <label className="uppercase font-bold" htmlFor="telefono">Telefono</label>
                            <Field
                                className="border-2 p-1.5 rounded-sm mb-2 w-full"
                                id="telefono"
                                type="number"
                                name="telefono"
                            />
                            <ErrorMessage name="telefono" component={() => (<span className="text-red-700">{errors.telefono}</span>)} />
                        </div>
                        <div>
                            <label className="uppercase font-bold" htmlFor="password">Contraseña</label>
                            <Field
                                className="border-2 p-1.5 rounded-sm mb-2 w-full"
                                id="password"
                                type="password"
                                name="password"
                            />
                            <ErrorMessage name="password" component={() => (<span className="text-red-700">{errors.password}</span>)} />
                        </div>
                        <div>
                            <label className="uppercase font-bold" htmlFor="passwordRepet">Repetir Contraseña</label>
                            <Field
                                className="border-2 p-1.5 rounded-sm mb-2 w-full"
                                id="passwordRepet"
                                type="password"
                                name="passwordRepet"
                            />
                            <ErrorMessage name="passwordRepet" component={() => (<span className="text-red-700">{errors.passwordRepet}</span>)} />

                        </div>
                        <div>
                            <label className="uppercase font-bold" htmlFor="tipoPersona">Rol</label>
                            <Field name="tipoPersona" as="select"  className="border-2 p-1.5 rounded-sm mb-2 w-full">
                                {rol.map( r => (<option key={r} value={r}>{r}</option>))}
                            </Field>
                        </div>
                        <button type="submit" disabled={isSubmitting}
                            className="bg-sky-600 text-white text-center font-bold p-3 w-full col-span-2 uppercase rounded-md mt-3 hover:bg-sky-700 transition-colors" >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>

        </div>
    </>
}

export { UserForm }
