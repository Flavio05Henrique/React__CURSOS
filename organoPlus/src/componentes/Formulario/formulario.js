import CampoTexto from '../CampoTexto/campoTexto'
import ListaSuspensa from '../ListaSuspensa/listaSuspensa'
import Botao  from '../Botao/botao'
import './formulario.css'
import { useState } from 'react'


const Formulario = (props) => {

    // const [nome, setNome] = useState('')
    // const [cargo, setCargo] = useState('')
    // const [imagem, setImagem] = useState('')
    // const [time, setTime] = useState(props.times[0])

    const [nome, setNome] = useState('Flavio Henrique')
    const [cargo, setCargo] = useState('Programador')
    const [imagem, setImagem] = useState('https://github.com/flavio05henrique.png')
    const [time, setTime] = useState('Programação')

    const AoSalvar = event => {
        event.preventDefault()

        props.aoNovoColaborador({nome, cargo, imagem, time})
    }
    
    return (
        <section className='formulario'>
            <form onSubmit={AoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    requered={true}
                    valor={nome}
                    aoAlterado={ valor => setNome(valor)}
                />
                <CampoTexto 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={ valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={ valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={ valor => setTime(valor)}
                />
                <Botao> 
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario