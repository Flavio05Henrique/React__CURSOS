import Cabecalho from "../../componentes/Cabecalho"
import Galeria from "../../componentes/Galeria"
import Menu from "../../componentes/Menu"
import Populares from "../../componentes/populares"
import Tags from "../../componentes/Tags"
import banner from './banner.png'
import './PaginaInicial.css'


const PaginaInicial = () => {
    return (
        <>
            <Cabecalho/>
            <main>
                <section className="menuArea">
                    <Menu/>
                    <div className="menuArea__img">
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="A imagem da terra vista do espaço" />
                    </div>
                </section>
                <div className="imgsArea">
                    <Galeria/>
                    <Populares/>
                </div>
            </main>
        </>
    )
}

export default PaginaInicial