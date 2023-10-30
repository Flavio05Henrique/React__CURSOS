import './Menu.css'
import home from './icones/home-ativo.png'
import maisCurtidas from './icones/mais-curtidas-inativo.png'
import maisVistas from './icones/mais-vistas-inativo.png'
import novas from './icones/novas-inativo.png'
import surpreendaMe from './icones/surpreenda-me-inativo.png'

const Menu = () => {
    return (
        <nav className='menu'>
            <ul className='menu__lista'>
                <li className='menu__item'>
                    <img src={home} alt='Botão home'/>
                    <a href=''>Início</a>
                </li>
                <li className='menu__item'>
                    <img src={maisCurtidas} alt='Botão mais curtidas'/>
                    <a href=''>Mais curtidas</a>
                </li>
                <li className='menu__item'>
                    <img src={maisVistas} alt='Botão mais vistas'/>
                    <a href=''>Mais vistas</a>
                </li>
                <li className='menu__item'>
                    <img src={novas} alt='Botão novas'/>
                    <a href=''>Novas</a>
                </li>
                <li className='menu__item'>
                    <img src={surpreendaMe} alt='Botão surpreenda-me'/>
                    <a href=''>Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu