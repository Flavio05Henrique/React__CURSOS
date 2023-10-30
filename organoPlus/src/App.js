import { useState } from 'react';
import Banner from './componentes/Banner/banner'
import Formulario from './componentes/Formulario/formulario'
import IdGenerator from './componentes/IdGenerator/IdGenerator';
import Time from './componentes/Time/time';

function App() {

const times = [
  {
    nome: 'Programação',
    corPrimaria:'#d9f7e9',
    corSecundaria:'#57c278'
  },
  {
    nome: 'Front-End',
    corPrimaria:'#e8f8ff',
    corSecundaria:'#82cffa'
  },
  {
    nome: 'Data Science',
    corPrimaria:'#f0f8e2',
    corSecundaria:'#a6d157'
  },
  {
    nome: 'UX e Design',
    corPrimaria:'#fde7e8',
    corSecundaria:'#e06b69'
  },
  {
    nome: 'Mobile',
    corPrimaria:'#fff5d9',
    corSecundaria:'#ddba05'
  },
  {
    nome: 'Inovação e Gestão',
    corPrimaria:'#ffeedf',
    corSecundaria:'#ffba29'
  }
]

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaborador = (colaborador) => {
  console.log(colaboradores)
  setColaboradores([...colaboradores, colaborador])
}

const listNomesDosTimes = times.map( ({nome}) => `${nome}`)

const colaboradoresFiltrados = time => colaboradores.filter(colaborador => colaborador.time === time)
const listaComponeteTimes= times.map( ({nome, corPrimaria, corSecundaria}) => 
  <Time 
    key={IdGenerator(nome)} 
    nome={nome} 
    corPrimaria={corPrimaria} 
    corSecundaria={corSecundaria}
    colaboradores={colaboradoresFiltrados(nome)}
  />)

 

  return (
    <div className="App">
      <Banner/>
      <Formulario times={listNomesDosTimes} aoNovoColaborador={colaborador => aoNovoColaborador(colaborador)}/>
      {listaComponeteTimes}
    </div>
  );
}

export default App;
