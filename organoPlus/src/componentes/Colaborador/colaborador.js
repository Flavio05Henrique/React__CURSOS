import './colaborador.css'

const Colaborador = ({colaborador, cor}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <img src={colaborador.imagem} alt='Foto de um colaborador'/>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador