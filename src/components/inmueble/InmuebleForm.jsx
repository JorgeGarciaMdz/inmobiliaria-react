import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { userNoAdmin } from "../../services/user";
import { getLocalUser } from "../../services/auth";

const InmuebleForm = ({inmueble, setInmueble, isAdmin}) => {

    const handleOnSubmit = async (values, { resetForm }) => {
        const user = await getLocalUser();
        if(!isAdmin)
            values.idPropietario = user.id;
        setInmueble(values);
        resetForm();
    }

    const [users, setUsers] = useState([]);

    const getUserNoAdmin = async () => {
        const resp = await userNoAdmin();
        if(resp){
            setUsers(resp);
            inmueble.idPropietario = resp[0].id;
        } 
    }

    useEffect( () => {
        if(isAdmin){
            getUserNoAdmin();
        }
        // eslint-disable-next-line
    }, []);
        

    const validateForm = (values) => {

        const errors = {};

        if (!values.titulo) {
            errors.titulo = 'Requerido';
        }

        if (!values.descripcion) {
            errors.descripcion = 'Requerido';
        }

        if(!values.direccion){
            errors.direccion = 'Requerido';
        }

        if(!values.precio){
            errors.precio = 'Requerido';
        }

        if(!values.ambientes){
            errors.ambientes = 'Requerido';
        }

        if(!values.totales){
            errors.totales = 'Requerido';
        }

        if (!values.cubiertos) {
            errors.cubiertos = 'Requerido';
        }

        if(!values.estrellas){
            errors.estrellas = 'Requerido'
        }

        return errors;
    }

    return <>
        <div className="w-11/12">
            <h3 className="font-bold text-center text-2xl uppercase">Nuevo Inmueble</h3>
            <Formik initialValues={inmueble} validate={validateForm} onSubmit={handleOnSubmit} enableReinitialize>
                { ({ errors, isSubmitting }) => (
                    <Form className="grid bg-white rounded-md p-5 shadow-lg">
                        <label htmlFor="titulo" className="font-bold uppercase p-1">Titulo</label>
                        <Field className="rounded-sm border-2" id="titulo" type="text" name="titulo"/>
                        <ErrorMessage name="titulo" component={ () => (<span className="text-red-700">{errors.titulo}</span>)} />

                        <label htmlFor="descripcion" className="font-bold uppercase p-1">Descripcion</label>
                        <Field className="rounded-sm border-2" id="descripcion" type="text" name="descripcion"/>
                        <ErrorMessage name="descripcion" component={ () => (<span className="text-red-700">{errors.descripcion}</span>)} />

                        <label htmlFor="direccion" className="font-bold uppercase p-1">Direccion</label>
                        <Field className="rounded-sm border-2" id="direccion" type="text" name="direccion"/>
                        <ErrorMessage name="direccion" component={ () => (<span className="text-red-700">{errors.direccion}</span>)} />

                        <label htmlFor="precio" className="font-bold uppercase p-1">Precio</label>
                        <Field className="rounded-sm border-2" id="precio" type="number" name="precio"/>
                        <ErrorMessage name="precio" component={ () => (<span className="text-red-700">{errors.precio}</span>)} />

                        <label htmlFor="ambientes" className="font-bold uppercase p-1">Cantidad de Ambientes</label>
                        <Field className="rounded-sm border-2" id="ambientes" type="number" name="ambientes"/>
                        <ErrorMessage name="ambientes" component={ () => (<span className="text-red-700">{errors.ambientes}</span>)} />

                        <label htmlFor="totales" className="font-bold uppercase p-1">Superficie Total</label>
                        <Field className="rounded-sm border-2" id="totales" type="number" name="totales"/>
                        <ErrorMessage name="totales" component={ () => (<span className="text-red-700">{errors.totales}</span>)} />

                        <label htmlFor="cubiertos" className="font-bold uppercase p-1">Superficie Cubierta</label>
                        <Field className="rounded-sm border-2" id="cubiertos" type="number" name="cubiertos"/>
                        <ErrorMessage name="cubiertos" component={ () => (<span className="text-red-700">{errors.cubiertos}</span>)} />

                        <label htmlFor="estrellas" className="font-bold uppercase p-1">Extrellas</label>
                        <Field className="rounded-sm border-2" id="estrellas" type="number" name="estrellas"/>
                        <ErrorMessage name="estrellas" component={ () => (<span className="text-red-700">{errors.estrellas}</span>)} />

                        {
                            isAdmin && 
                            (
                            <>
                                <label className="font-bold uppercase p-1" htmlFor="tipoPersona">Propietario</label>
                                <Field name="idPropietario" as="select"  className="rounded-sm border-2">
                                    {users.map( r => (<option key={r.id} value={r.id}>{r.nombre + ' ' + r.apellido}</option>))}
                                </Field>
                            </>
                            )
                        } 

                        <button type="submit" className="w-full rounded-md bg-sky-600 p-3 mt-4 hover:bg-sky-700 transition-colors cursor-pointer text-white font-bold uppercase">
                            {inmueble.id? "Actualizar Inmueble" : "Nuevo Inmueble"}
                        </button>
                    </Form>
                ) }
            </Formik>
        </div>
    </>;
}

export { InmuebleForm }
