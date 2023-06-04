import React, { useEffect, useState } from "react";
import { InmuebleForm } from "./InmuebleForm";
import { InmuebleTable } from "./InmuebleTable";
import { findAllInmueble, createInmueble, updateInmueble, deleteInmueble as DeleteInmueble } from "../../services/inmueble/InmuebleService";
import { getLocalUser } from "../../services/auth";

const InmuebleDashboard = () => {

    const [inmuebles, setInmuebles] = useState([]);

    const [isAdmin, setIsAdmin] = useState(false);

    const [inmueble, setInmueble] = useState({
        id: null,
        titulo: '',
        descripcion: '',
        direccion: '',
        precio: '',
        ambientes: '',
        totales: '',
        cubiertos: '',
        estrellas: '',
        idPropietario: ''
    });

    const loadInmuebles = async () => {
        const user = await getLocalUser();
        if (user.tipoPersona === 'ADMIN') {
            setIsAdmin(true);
        } else {
            setIsAdmin(false)
        }
        const inmuebles = await findAllInmueble();
        if (inmuebles) {
            setInmuebles(inmuebles);
        }
    }

    const deleteInmueble = async (id) => {
        const resp = await DeleteInmueble(id);
        if (resp === "") {
            loadInmuebles();
        }

    }

    const loadInmueble = (id) => {
        inmuebles.forEach((i) => {
            if (i.id === id)
                setInmueble(i);
        });
    }

    const createUpdateInmueble = async (inmueble) => {
        if (inmueble.id) {
            const resp = await updateInmueble(inmueble);
            if (resp)
                loadInmuebles();
        } else {
            const resp = await createInmueble(inmueble);
            if (resp)
                loadInmuebles();
        }
        setInmueble({
            id: null,
            titulo: '',
            descripcion: '',
            direccion: '',
            precio: '',
            ambientes: '',
            totales: '',
            cubiertos: '',
            estrellas: '',
            idPropietario: ''
        });
    }

    useEffect(() => {
        loadInmuebles()
    }, []);

    return <>
        <div className="flex grid-cols-2 gap-9 lg:p-10 md:p-20 mx-auto min-w-full justify-center">
            <InmuebleForm inmueble={inmueble} setInmueble={createUpdateInmueble} isAdmin={true} />
            <InmuebleTable inmuebles={inmuebles} loadInmueble={loadInmueble} deleteInmueble={deleteInmueble} isAdmin={isAdmin} />
        </div>
    </>;
}

export { InmuebleDashboard }
