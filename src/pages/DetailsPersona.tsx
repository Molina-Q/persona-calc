import { useParams } from "react-router-dom"
import PersonaData from '../assets/PersonaData.json';
import BackArrow from "../components/BackArrow";

interface Persona {
    arcana: string;
    inherits: string;
    lvl: number;
    resists: { [key: string]: string };
    skills: { [key: string]: number };
    stats: {
        ag: number;
        en: number;
        lu: number;
        ma: number;
        st: number;
    };
}

export default function DetailsPersona() {
    const params = useParams()
    const persona = params.persona;

    const personaType: { [key: string]: Persona } = PersonaData;

    const personaData = Object.entries(personaType).find(([name]) => name === persona);

    if (!personaData) return <h1>Persona not found</h1>

    const [name, details] = personaData;

    return (
        <div>
            <BackArrow />
            <h1>{name}</h1>

            <div>
                <div className="personaTitle">
                    <p>level {details.lvl}</p>
                </div>
                <p>{details.arcana}</p>
            </div>

            <div className="personaSkills">
                <h2>Skills</h2>
                <ul>
                    {Object.entries(details.skills).map(([skill, level]) => (
                        <li key={skill}>{skill}: {level}</li>
                    ))}
                </ul>
            </div>

 


        </div>
    )
}