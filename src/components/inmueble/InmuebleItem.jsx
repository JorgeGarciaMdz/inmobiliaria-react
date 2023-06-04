import React from "react";

const InmuebleItem = ({inmueble, loadInmueble, deleteInmueble}) => {
    return <>
        <div className="bg-white p-5 mb-3 rounded-md shadow-md">
            <div className='flex-grow'>
                <p className='font-bold uppercase text-base'>
                    Titulo: <span className='text-base font-normal lowercase'>{inmueble.titulo}</span>
                </p>
                <p className='font-bold uppercase text-base'>
                    Descripcion: <span className='text-base font-normal lowercase'>{inmueble.descripcion}</span>
                </p>
                <p className='font-bold uppercase text-base'>
                    Precio: <span className='text-base font-normal lowercase'>{inmueble.precio}</span>
                </p>
                <p className='font-bold uppercase text-base'>
                    Dirección: <span className='text-base font-normal lowercase'>{inmueble.direccion}</span>
                </p>
                <p className='font-bold uppercase text-base'>
                    Ambientes: <span className='text-base font-normal lowercase'>{inmueble.ambientes}</span>
                </p>
                <p className='font-bold uppercase text-base'>
                    Superficie Total: <span className='text-base font-normal lowercase'>{inmueble.totales}</span>
                </p>
                <p className='font-bold uppercase text-base'>
                    Superficie Cubierta: <span className='text-base font-normal lowercase'>{inmueble.cubiertos}</span>
                </p>
                <p className='font-bold uppercase text-base'>
                    Calificación: <span className='text-base font-normal lowercase'>{inmueble.estrellas}</span>
                </p>
            </div>
            <div className="flex items-center space-x-3 mt-3">
                <button className="bg-emerald-600 text-white font-bold p-2  rounded-md uppercase hover:bg-emerald-700 cursor-pointer transition-colors"
                    onClick={() => loadInmueble(inmueble.id)}>Editar</button>
                <button className="bg-red-600 text-white font-bold p-2  rounded-md uppercase hover:bg-red-700 cursor-pointer transition-colors"
                    onClick={() => deleteInmueble(inmueble.id)}>Eliminar</button>
            </div>
        </div>
    </>;
}

export { InmuebleItem }
