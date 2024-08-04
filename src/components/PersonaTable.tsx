type Props = {
    persona: {
        name: string,
        arcana: string
    }
}

export default function PersonaTable({ persona }: Props) {
    return (
        <div className='table-row'>
            <p className='table-item'>{persona.name}</p>
            <p className='table-item'>{persona.arcana}</p>
        </div>
    )
}