import openIcon from './open.png'
import favoritoIcon from './favorito.png'

const Cards = ({imgs}) => {
    return (
        <ul className='galeria__cards'>
            {imgs.map( img => {
                return (
                    <li className='galeria__card' key={img.id}>
                        <img src={img.imagem} alt={img.titulo} className='galeria__imagem'/>
                        <p className="galeria__descricao">{img.titulo}</p>
                        <div className='galeria__info'>
                            <p className='galeria__creditos'>{img.creditos}</p>
                            <span>
                                <img src={openIcon} alt='ícone de coração' />
                                <img src={favoritoIcon} alt='ícone de abrir modal' />
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Cards