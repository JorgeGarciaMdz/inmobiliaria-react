import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { findById } from "../../services/publicacion";

const PublicationDetails = () => {

    const { id } = useParams();
    const [ publication, setPublication] = useState([]);

    const obtainPublicationDetail = async () => {
        setPublication(await findById(id));
    }

    const navigate = useNavigate();
    const handleOnClick = () => navigate('/');

    useEffect( () => {
        obtainPublicationDetail();
        // eslint-disable-next-line 
    }, []);

    return <>
        <div className="grid grid-cols-3 mt-10">
            {publication.id && 
            <div className="flex flex-col col-span-2 bg-white w-5/6 mx-auto mr-10 shadow-md rounded-md p-3">
            <h1 className="font-bold text-2xl text-center uppercase">{publication.inmuebleDTO.titulo}</h1>
            <p className="font-bold text-end text-xl pr-2">
                USD: <span className="">{publication.inmuebleDTO.precio}</span>
            </p>
    
            <div className="w-full mb-2 mt-2 text-lg">
              <h2 className="font-bold border-b-2 p-2">Descripcion:</h2>
              <p className="p-2"><span>{publication.inmuebleDTO.descripcion}</span></p>
              <h3 className="font-bold border-b-2 p-2">Detalles:</h3>
              <p className="p-2">
                Metros totales: <span>{publication.inmuebleDTO.totales}</span>
              </p>
              <p className="p-2">
                Metros cubiertos: <span>{publication.inmuebleDTO.cubiertos}</span>
              </p>
            </div>
            <button className="bg-sky-600 text-white uppercase font-bold p-2 rounded-sm cursor-pointer hover:bg-sky-700 w-full mx-auto transition-colors"
                onClick={handleOnClick}>
                Volver
            </button>
        </div>
            }
        </div>
    </>;
}

export { PublicationDetails }