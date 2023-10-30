import logo from './logo.png'
import search from './search.png'
import './Cabecalho.css'

const Cabecalho = () => {
    return (
        <header className='cabecalho'>
            <img src={logo} alt="Logo do Alura Space" className='logo'/>
            <div className='cabecalho__container'>
                <input type="text" placeholder="O que você procura ?" className='cabecalho__input'/>
                <img src={search} alt="ícone de lupa"/>
            </div>
        </header>
    )
}

export default Cabecalho