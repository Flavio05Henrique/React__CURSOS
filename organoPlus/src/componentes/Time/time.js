import Colaborador from '../Colaborador/colaborador'
import IdGenerator from '../IdGenerator/IdGenerator'
import './time.css'

const Time = props => {
    const corSecundaria = {backgroundColor: props.corPrimaria}
    const corPrimaria = {borderColor: props.corSecundaria}

    const listaDeColaboradores = props.colaboradores
        .map( colaborador => <Colaborador colaborador={colaborador} cor={props.corSecundaria} key={IdGenerator(colaborador.nome)}/>)

    const componenteSectionDeTime = 
        <section className='time' style={corSecundaria}>
            <h3 style={corPrimaria}>{props.nome}</h3>
            <div className='colaboradores'>
                {listaDeColaboradores}
            </div>
        </section>

    return (
        props.colaboradores.length > 0 ? componenteSectionDeTime : ''
    )
}

export default Time