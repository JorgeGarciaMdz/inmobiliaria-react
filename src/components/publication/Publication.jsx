import React, {useState, useEffect} from "react";

import { PublicationItem } from "./PublicationItem";

import { findAll } from "../../services/publicacion";

import casa from "./../../images/casa.jpg"

function Publication() {
    
    const [publications, setPublications] = useState([]);

    const obtainsPublications = async () => {
        const data = await findAll();
        console.log("data: " + JSON.stringify(data));
        setPublications(data);
    }
    

    useEffect( () => {
        obtainsPublications();
    }, []);

    return <>
        <div className="mb-8 bt-8">
            <div className="grid grid-cols-3 gap-5 m-10">
                {publications.map((p) => ( <PublicationItem publication={p} image={casa}  />))}
            </div>
        </div>
    </>;
}

export { Publication }