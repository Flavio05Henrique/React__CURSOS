import './Tags.css'

const Tags = ({filter}) => {
    const options = [
        'Tudo',
        'Estrelas',
        'Galáxias',
        'Lua',
        'Planetas'
    ]

    const filtrar = (event) => {
        const tag = event.target.innerText
        filter(tag)
    }

    return (
        <div className='campoTags'> 
            <p className='campoTags__p'>Filtre por tags:</p>
            <ul className='campoTags__list'>
                {options.map( option => <li key={option} onClick={event => filtrar(event)} value={option}>{option}</li>)}
            </ul>
        </div>
    )
} 

export default Tags