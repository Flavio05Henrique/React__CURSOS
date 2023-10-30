import imgs from './fotos-populares.json'
import './Populares.css'

const Populares = () => {
    return (
        <aside className='populares'>
            <h2 className='populares__titulo'>Populares</h2>
            <ul className='populares__imgs'>
                {imgs.map( img => {
                    return (
                        <li key={img.id}>
                            <img src={img.path} alt={img.alt}/>
                        </li>
                    )
                })}
            </ul>
            <button className='populares__bnt'>Ver mais</button>
        </aside>
    )
}

export default Populares