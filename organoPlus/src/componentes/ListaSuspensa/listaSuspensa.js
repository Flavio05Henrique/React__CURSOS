import './listaSuspensa.css'
import IdGenerator from '../IdGenerator/IdGenerator.js'

const ListaSuspensa = props => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.valor} onChange={ event => props.aoAlterado(event.target.value)}>
                {props.itens.map( item => <option key={IdGenerator(item)} value={item}>{item}</option>)}
            </select>
        </div>
    )
} 

export default ListaSuspensa