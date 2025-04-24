import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista"
import { Fragment } from "react";

const CadastroFilme = () =>{
    return(
        <> {/*Fragment, o pai da estrutura e a forma melhor e mais segura pra não dar pau no seu codigo**/ }
            <Header/>
            <Cadastro/>
            <Lista/>
            <Footer/>

        </>
    )
}
export default CadastroFilme;