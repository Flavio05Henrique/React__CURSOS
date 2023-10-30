import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMin from "./paginas/sobreMin";
import Menu from "./componentes/Menu";

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/sobreMin" element={<SobreMin/>}/>
          <Route path="*" element={<div> pagina não encontrada </div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
