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
    const [genero, setGenero] = useState(""); //estate = genero (Estamos amarzenando a informação do input dentro de gênero)
    const [listaGenero, setListaGenero] = useState([]);
    function alerta(icone, mensagem) {
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

    async function cadastrarGenero(evt) {
        //verificar se o input está vindo vazio
        //comédia romântica
        evt.preventDefault();
        if (genero.trim() != "") {
            try {
                await api.post("Genero", { nome: genero });
                alerta("sucess", "Cadastro realizado com sucesso")
                setGenero("");

            } catch (error) {
                alerta("error", "Erro! Entre em contato com o suporte (os guri)")
            }
        } else {
            // alert("O campo precisa estar preenchido")
            alerta("error", "Erro! Entre em contato com os guri")
        }

    };
    //função Sícrona = acontece simultaneamente (vai seguindo os demais blocos de codigo ao mesmo tempo)
    //função Assincrona = espera algo acontecer para depois seguir o codigo (espera um retorno da solicitação)
    async function listarGenero() { //trycat🐈😺🐈‍⬛
        try {       // setListaGenero(resposta);
            //.data = usado para listar somente os objetos
            //teste o codigo e seja curioso (so n seja dedin nervoooossssssu=o

            //console.log(resposta.data[3]);
            //console.log(resposta.data[3].idGenero);
            //console.log(resposta.data[3].nome);

            const resposta = await api.get("genero");
            setListaGenero(resposta.data)
        } catch (error) {
            console.log(error);
        }
    }
    //inicio do teste
    useEffect(() => {
        listarGenero();

    }, [])
    // //fim do teste


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
                    //atribuiir para lista, o meu estado atual:
                    lista = {listaGenero}
                />
            </main>
            <Footer />
        </>
    )

};
export default CadastroGenero;