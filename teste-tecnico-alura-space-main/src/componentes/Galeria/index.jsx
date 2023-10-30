import Tags from '../Tags'
import './Galeria.css'
import imgs from './fotos.json'
import Cards from './cards'
import { useState } from 'react'

const Galeria = () => {

    const [cards, setCards] = useState(imgs)

    const filtraPorTag = (tag) => {
        const cardsFiltrados = imgs.filter( card => card.tag === tag)
        setCards(tag === 'Tudo' ? imgs : cardsFiltrados)
    }

    return (
        <section className='galeria'>
            <div className='galeria__container'>
                <h2>Navegue pela galeria</h2>
                <Tags filter={filtraPorTag}/>
                <Cards imgs={cards}/>
            </div>
        </section>
    )
}

export default Galeria