import React from "react";
import { InmuebleItem } from "./InmuebleItem";

const InmuebleTable = ({inmuebles, loadInmueble, deleteInmueble, isAdmin}) => {

    return <>
        <div className="w-11/12">
            <h3 className="font-bold text-center uppercase text-2xl">Inmuebles</h3>
            <input className="w-full p-2 rounded-md border-2 mb-2" type="text" placeholder="Buscar"></input>

            <div className="h-screen overflow-y-scroll">
                {inmuebles && inmuebles.length > 0 ? (
                    <>
                        {inmuebles.map((i) => <InmuebleItem inmueble={i} key={i.id} loadInmueble={loadInmueble} deleteInmueble={deleteInmueble}/>)}
                    </>
                ) : (
                    <>
                        <h3 className="text-2xl text-center mt-5">
                            
                            {isAdmin? "No hay inmuebles": "Aún no tiene inmuebles cargados"}
                        </h3>
                    </>
                )}
            </div>
        </div>
    </>;

}

export { InmuebleTable }