import React, { useEffect, useState } from "react";
import telefono from "./../../images/telefono.png";
import correo from "./../../images/correo.png";
import { useNavigate } from "react-router-dom";
import { userProfile } from "../../services/user/UserService";
import { getLocalToken, setLocalUser } from "../../services/auth";
import { removeLocalToken } from "../../services/auth/LocalUser";

function Header() {

    const [user, setUser] = useState([]);
    const [isLoged, setIsLoged] = useState(false);

    const loadUser = async () => {
        const data = await userProfile();
        setUser(data);
        setLocalUser(data);
        if (data && data.email)
            setIsLoged(true);
    }

    const logout = () => {
        removeLocalToken();
        window.location.reload(true);
    }

    useEffect(() => {
        if (getLocalToken()) {
            loadUser();
        }
    }, [isLoged]);

    const navigate = useNavigate();

    return <>
        {
            user && user.email && (
                <div className="bg-sky-600 h-7 pr-48 pt-1 flex justify-end text-white ">
                    <img className="w-6 h-6 p-1" src={telefono} alt="Icono Teléfono" />
                    <p className="text-sm">{user.telefono}</p>

                    <img className="w-6 h-6 p-1" src={correo} alt="Icono Correo" />
                    <p className="text-sm">{user.email}</p>
                </div>)

        }
        {!user.email &&
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
                    <li className="p-2 hover:-translate-y-px uppercase" onClick={() => navigate('/')}>
                        Inicio
                    </li>

                    {
                        user && user.email ? (
                            <>
                                <li className="p-2 hover:-translate-y-px uppercase" onClick={() => navigate('/inmueble')}>
                                    Inmuebles
                                </li>
                                <li className="bg-sky-600 text-white p-2 rounded-sm cursor-pointer hover:-translate-y-px" onClick={logout}>
                                    Cerrar sesión
                                </li>
                            </>
                        )
                            : (
                                <>
                                    <li className="p-2 hover:-translate-y-px uppercase" onClick={() => navigate('/singin')}>
                                        Ingresar
                                    </li>
                                    <li className="bg-sky-600 text-white p-2 rounded-sm cursor-pointer hover:-translate-y-px" onClick={() => navigate('/singup')}>
                                        Registrarse
                                    </li>
                                </>
                            )
                    }

                </ul>
            </nav>
        </div>
    </>
}

export { Header }