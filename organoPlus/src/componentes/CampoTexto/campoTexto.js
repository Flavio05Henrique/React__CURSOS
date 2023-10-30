import { useState } from 'react'
import './campoTexto.css'

const CampoTexto = (props) => {

    const aoDigitar = event => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} placeholder={props.placeholder} required={props.requered}/>
        </div>
    )
}

export default CampoTexto