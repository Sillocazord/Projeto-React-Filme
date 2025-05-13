import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
import api from "../../Services/services";
import Swal from "sweetalert2"
//Importação de componentes ⬆️
import { useEffect, useState } from "react";

const CadastroGenero = () => {
    //funções ou constante são sempre criados fora do return, nunca dentro dele
    const [genero, setGenero] = useState("");
    function alerta (icone, mensagem){
        const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: icone,
                    title: mensagem
                });
    }
        //try = tentar(o esperado)
        //catch = lança a exeção  
    async function cadastrarGenero(evt) {
        //verificar se o input está vindo vazio (roxoooo🗣️🗣️🟣🟣🔥🔥)
        //comédia romântica
        evt.preventDefault();
        if (genero.trim() != "") {
            try {
                await api.post("Genero", { nome: genero });
                alerta("sucess", "Cadastro realizado com sucesso")
                setGenero("");

            } catch (error) {
                alerta("error", "Erro! Entre em contato com o suporte (os guri)")
                // alert("LOL,DEU ERRADO KKKKKKKK🫵🤣")
                // console.log(error);
            }
        } else {
            // alert("O campo precisa estar preenchido") //preenche o campo ae dog😔
            alerta("error", "Erro! Entre em contato com o suporte (os guri)")
        }

    };

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