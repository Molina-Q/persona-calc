import { useParams } from "react-router-dom"
import PersonaData from '../assets/PersonaData.json';

interface Persona {
    arcana: string;
    inherits: string;
    lvl: number;
}

export default function DetailsPersona() {

    const params = useParams()
    const persona = params.persona;

    const personaType: { [key: string]: Persona } = PersonaData;

    const personaData = Object.entries(personaType).find(([name]) => name === persona);
    
    const name = personaData && personaData[0];
    const details = personaData && personaData[1];

    return (
        <div>
            <h1>DetailsPersona</h1>

            <div>
                <p>{name}</p>
                {details && <p>{details.arcana}</p>}
            </div>


        </div>
    )
}