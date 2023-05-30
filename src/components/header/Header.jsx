import React from "react";
import telefono from "./../../images/telefono.png";
import correo from "./../../images/correo.png";
import { useNavigate } from "react-router-dom";

function Header() {

    const login = undefined;

    const navigate = useNavigate();
    const handleOnInit = () => navigate('/');
    const handleOnInput = () => navigate('/');
    const handleOnRegister = () => navigate('/');
    
    return <>
        { login && 
            <div className="bg-sky-600 h-7 pr-48 pt-1 flex justify-end text-white ">
                <img className="w-6 h-6 p-1" src={telefono} alt="Icono Teléfono" />
                <p className="text-sm">261 - 471242</p>

                <img className="w-6 h-6 p-1" src={correo} alt="Icono Correo" />
                <p className="text-sm">jorge.garcia.mdz@gmail.com</p>
            </div>
        }
        { !login && 
            <div className="bg-sky-600 h-7 pr-48 pt-1 flex justify-end text-white ">
            </div>
        }
        <div className="flex justify-around bg-white py-1">
            <h3 className="text-3xl cursor-pointer p-4  font-bold w-52 hover:-translate-y-px">

                Team{" "}
                <span className="bg-sky-600 shadow-lg text-white rounded-md p-1">
                    Five
                </span>
            </h3>
            <nav>
                <ul className="flex space-x-16 pt-4 text-sky-600 font-bold uppercase">
                    <li className="p-2 hover:-translate-y-px uppercase" onClick={handleOnInit}>
                        Inicio
                    </li>
                    <li className="p-2 hover:-translate-y-px uppercase" onClick={handleOnInput}>
                        Ingresar
                    </li>
                    <li  className="bg-sky-600 text-white p-2 rounded-sm cursor-pointer hover:-translate-y-px" onClick={handleOnRegister}>
                        Registrarse
                    </li>
                </ul>
            </nav>
        </div>
    </>
}

export { Header }