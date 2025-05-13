import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
import api from "../../Services/services";
//Importação de componentes ⬆️
import { useEffect, useState } from "react";

const CadastroGenero = () => {
    //funções ou constante são sempre criados fora do return, nunca dentro dele
    const [genero, setGenero] = useState("");

    async function cadastrarGenero() {
        //verificar se o input está vindo vazio (roxoooo🗣️🗣️🟣🟣🔥🔥)
        //comédia romântica
        if (genero.trim() === "") {
            alert("O campo precisa estar preenchido") //preenche o campo ae dog😔
        }
        //try = tentar(o esperado)
        //catch = lança a exeção
        try {
            await api.post("Genero", { nome: genero });
            alert("Rodou meu fí, pode olhar no banco of the dados")
            setGenero("");

        } catch (error) {
            alert("LOL,DEU ERRADO KKKKKKKK🫵🤣")
            console.log(error);
            
        }
    };

    //------------------------------------------------------------
    //testezin (so apagar se der erro) toda vez que alguem mexer na variavel, vai receber um diferente efeito ao alterar a variavel
    // useEffect(() => {
    //     console.log(genero)
    // },[genero]);
    //------------------------------------------------------------

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    //atribuindo a função
                    funcCadastro={cadastrarGenero}
                    //atribuindo valor ao input
                    valorInput={genero}
                    //atribuindo a função que atualiza o meu gênero
                    setValorInput={setGenero}

                    tituloCadastro="Cadastro de Gênero"
                    visibilidade="none" /*Faz o input de genero sumir, deixando só nome, para achar, é so ir lá em cadastro.jsx*/
                    placeholder="gênero"
                />

                <Lista
                    tituloLista="Lista de Gêneros"
                    visivel="none" //Apaga Genero da lista
                />
            </main>
            <Footer />
        </>
    )

};
export default CadastroGenero;