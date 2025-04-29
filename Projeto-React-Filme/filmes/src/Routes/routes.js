import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"

const Rotas = () => {
    return(
         <BrowserRouter>
        
            <Routes>
                    {/*http://localhost:3000/ => Login*/}
                    {/*http://localhost:3000/CadastroFilme => Cadastro de filmes*/}
                    {/*http://localhost:3000/CadastroGenero => Cadastro de Gênero*/}

                <Route path="/" element={<Login/>}/>
                 {/*http://localhost:3000/ => Login*/}
                <Route path="/Filme" element={<CadastroFilme/>}/>
                {/*http://localhost:3000/CadastroFilme => Cadastro de filmes*/}
                <Route path="/Genero" element={<CadastroGenero/>}/>
                {/*http://localhost:3000/CadastroGenero => Cadastro de Gênero*/}

            </Routes>

        </BrowserRouter>
    )
};
export default Rotas;