import { useState } from 'react';
import PersonaData from '../assets/PersonaData.json';
import { getElementIcon } from '../utils/getElementIcon';
import { Link } from 'react-router-dom';

interface Persona {
    arcana: string;
    inherits: string;
    lvl: number;
}

export default function PersonaTable() {

    const [sortCriteria, setSortCriteria] = useState<string>('name');
    const personae: { [key: string]: Persona } = PersonaData;

    const sortedPersonas = Object.entries(personae).sort(([nameA, detailsA], [nameB, detailsB]) => {
        switch (sortCriteria) {
            case 'lvl':
                return detailsA.lvl - detailsB.lvl;
            case 'arcana':
                return detailsA.arcana.localeCompare(detailsB.arcana);
            case 'inherits':
                return detailsA.inherits.localeCompare(detailsB.inherits);
            case 'name':
            default:
                return nameA.localeCompare(nameB);
        }
    });

    console.log(sortedPersonas);

    return (
        <>
            <div className="sort-controls">
                <label>Sort by: </label>
                <select onChange={(e) => setSortCriteria(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="arcana">Arcana</option>
                    <option value="lvl">Level</option>
                    <option value="inherits">Inherits</option>
                </select>
            </div>
            {
                sortedPersonas.map(([name, details]) => (
                    <div className='table-row' key={name}>
                        <figure className='table-item'>
                            <img src={getElementIcon(details.inherits)} alt="element icon" />
                        </figure>
                        <Link to={`/persona/${name}`} className='table-item' >
                            <p>{name}</p>
                        </Link>
                        <p className='table-item'>{details.lvl}</p>
                        <p className='table-item'>{details.arcana}</p>
                    </div>
                ))
            }
        </>
    )
}