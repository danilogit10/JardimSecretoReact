import {BrowserRouter, Routes, Route} from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro";
import Pesquisa from "./pages/Pesquisa";


function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path= "/login" element={<Login/>}/>
      <Route path= "/cadastro" element={<Cadastro/>}/>
      <Route path= "/home" element={<home/>}/>
      <Route path="/pesquisa" element={<Pesquisa />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;