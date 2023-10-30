import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({aoCadastrar, times, cadastrarTime}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const cadastraColaborador = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time
        })
    }
    
    const cadastraTime = (evento) => {
        evento.preventDefault()
        cadastrarTime({
            nome: nomeTime,
            cor: corTime
        })
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={cadastraColaborador}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <Campo
                    obrigatorio={true}
                    label='Cargo' 
                    placeholder='Digite seu cargo '
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <Campo 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Times'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao texto='Criar' />
            </form>
            <form className="formulario" onSubmit={cadastraTime}>
                <h2>Crie seu time!.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome do time'
                    placeholder='Digite o nome '
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    type='color'
                    obrigatorio={true}
                    label='Cor do time' 
                    placeholder='Digite a cor '
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                
                <Botao texto='Criar' />
            </form>
        </section>
    )
}

export default Formulario