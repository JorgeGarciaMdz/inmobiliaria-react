import React, {useState, useEffect} from "react";

import { PublicationItem } from "./PublicationItem";

import { findAll } from "../../services/publicacion";

import casa from "./../../images/casa.jpg"

function Publication() {
    
    const [publications, setPublications] = useState([]);

    const obtainsPublications = async () => {
        setPublications(await findAll());
    }
    

    useEffect( () => {
        obtainsPublications();
    }, []);

    return <>
        <div className="mb-8 bt-8">
            {
                publications && 
                <div className="grid grid-cols-3 gap-5 m-10">
                    {publications.map((p) => ( <PublicationItem publication={p} image={casa} key={p.id} />))}
                </div>
            }
        </div>
    </>;
}

export { Publication }