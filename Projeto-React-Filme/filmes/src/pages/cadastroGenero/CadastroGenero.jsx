import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
const CadastroGenero = () => {
    return(
        <>
        <Header/>
        <main>
            <Cadastro
            tituloCadastro ="Cadastro de Gênero"
            visibilidade = "none" /*Faz o input de genero sumir, deixando só nome, para achar, é so ir lá em cadastro.jsx*/
            placeholder = "gênero"
            />
            
            <Lista
            tituloLista = "Lista de Gêneros"
            visivel = "none" //Apaga Genero da lista
            />
        </main>
        <Footer/>
        </>
    )

};
export default CadastroGenero;