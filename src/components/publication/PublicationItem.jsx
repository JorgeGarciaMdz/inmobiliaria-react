import React from "react";

import { useNavigate } from "react-router-dom";

const PublicationItem = ({publication, image}) => {
    
    const navigate = useNavigate();
    const handleOnClick = () => navigate(`publication/detail/${publication.id}`);
    return <>
        <div className="w-auto bg-white shadow-md hover:translate-y-px rounded-sm"> 
            <div className='font-bold'>
                <img className='w-80 h-56 p-2 hover:opacity-80 hover:cursor-pointer' src={image} alt="Imagen Casa"
                />
                <div className='p-2 grid grid-rows-2'>
                    <div>
                        <p className='col-span-2 text-center'><span>{publication.titulo}</span></p>
                        <p className='col-span-2 font-normal text-gray-500'>{publication.inmuebleDTO.direccion}</p>
                    </div>
                    <div className='flex justify-between pt-2'>
                        <p>USD <span>{publication.inmuebleDTO.precio}</span></p>
                        <button className='bg-sky-600 p-2 text-white rounded-sm hover:opacity-80 transition-opacity cursor-pointer'
                            onClick={handleOnClick}>
                            Ver detalle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export { PublicationItem }