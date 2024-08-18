import { useParams } from "react-router-dom"
import PersonaData from '../assets/PersonaData.json';
import BackArrow from "../components/BackArrow";
import { getResists } from "../utils/getResists";
import { capitalizeFirstLetter } from "../utils/getElementIcon";

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
    const params = useParams();
    const persona = params.persona;

    const personaType: { [key: string]: Persona } = PersonaData;

    const personaData = Object.entries(personaType).find(([name]) => name === persona);

    if (!personaData) return <h1>Persona not found</h1>;

    const [name, details] = personaData;

    const elementResists: { [key: string]: string } = {
        Phys: "",
        Fire: "",
        Ice: "",
        Elec: "",
        Wind: "",
        Psy: "",
        Nuke: "",
        Bless: "",
        Curse: "",
        Gun: "",
    };

    Object.entries(details.resists).map(([element, value]) => (
        elementResists[capitalizeFirstLetter(element)] = value
    ));

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

            <div className="personaSkills-container">
                <h2>Skills</h2>

                {Object.entries(details.skills).map(([skill, level]) => (
                    <div key={skill} className="personaSkills">
                        <p>
                            <b>{skill}</b> at level <b>{level}</b>
                        </p>
                    </div>
                ))}
            </div>

            <div className="personaStats">
                <h2>Stats</h2>
                <ul>
                    <li>Agility: {details.stats.ag}</li>
                    <li>Endurance: {details.stats.en}</li>
                    <li>Luck: {details.stats.lu}</li>
                    <li>Magic: {details.stats.ma}</li>
                    <li>Strength: {details.stats.st}</li>
                </ul>
            </div>

            <div className="personaResists">
                <h2>Resists</h2>
                <div>
                    {Object.entries(elementResists).map(([element, value]) => (
                        <div className="table-col" key={element}>
                            <div className="table-row">
                                <p className="table-item">{element}</p>
                                <p className="table-item">{getResists(value)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}