import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista"
import api from "../../Services/services";
import { useState, useEffect } from "react";
import { Fragment } from "react";

const CadastroFilme = () =>{

    const [filme, setFilme] = useState("")
    const [listaFilme, setListaFilme] = useState([])

    const [listaGenero, setListaGenero] = useState([])
    //função para trazer os gêneros no select meu fí
    async function listarGenero() {
        try {
        const resposta = await api.get("genero");
            setListaGenero(resposta.data);
        } catch (error) {
            
        }
    }

    useEffect(()=>{
            listarGenero();
        }, [])


    async function listarFilme() {
        try {
          const resposta = await api.get("filme")
          setListaFilme(resposta.data)
        } catch (error) {
            console.log(error);
            
        }
        
    }


        // useEffect(() => {
        //         listarFilme();
        // },[listaFilme])

    return(

        <> {/*Fragment, o pai da estrutura e a forma melhor e mais segura pra não dar pau no seu codigo**/ }
            <Header/>
                <main>
                     <Cadastro
                     tituloCadastro ="Cadastro de Filme"
                     placeholder = "filme"
                     valorInput={filme}
                     setValorInput={setFilme}
                     lista={listaGenero}
                    />
                    <Lista
                    tituloLista = "Lista de Filmes"
                    // lista={listaFilme}
                    />
                </main>
            <Footer/>
        </>
    )
}
export default CadastroFilme;