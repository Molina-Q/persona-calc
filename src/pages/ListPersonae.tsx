import PersonaTable from '../components/PersonaTable'

export default function ListPersonae() {
    return (
        <>
            <h1>Personae</h1>

            <div >
                <div className='table-header'>
                    <p className='table-item'>Inherits</p>
                    <p className='table-item'>Name</p>
                    <p className='table-item'>Level</p>
                    <p className='table-item'>Arcana</p>
                </div>

                <PersonaTable />

            </div>
        </>
    )
}