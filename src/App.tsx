import './App.css'
import PersonaData from './assets/PersonaData.json'
import PersonaTable from './components/PersonaTable';

interface Persona {
  name: string,
  arcana: string
}

function App() {

  const personaeUsableData = {
    names: Object.keys(PersonaData),
    arcana: Object.values(PersonaData).map(persona => persona.arcana)
  };

  console.log(personaeUsableData.arcana);
  
  return (
    <>
      <h1>Personae</h1>
      
      <div >
        <div className='table-header'>
          <p className='table-item'>name</p>
          <p className='table-item'>arcana</p>
        </div>
        {PersonaData.map((persona: Persona) => (
          <PersonaTable persona={persona} key={persona.name} />
        ))}
      </div>
    </>
  )
}

export default App
