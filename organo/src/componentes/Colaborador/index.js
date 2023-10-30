import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, favoritar }) => {
    const aoFavoritar = () => {
        favoritar(colaborador.id)
    }

    const propsFavorito = {
        size: 23,
        onClick: aoFavoritar,
        color:'#ff0000'
    }

    return (
        <div className="colaborador">
            <AiFillCloseCircle size={30} className='deletar' onClick={event => aoDeletar(colaborador.id)}/>
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favorito'>
                    {colaborador.favorito ? 
                    <AiFillHeart {...propsFavorito} /> : 
                    <AiOutlineHeart {...propsFavorito}/>}
                </div>
            </div>
        </div>
    )
}

export default Colaborador