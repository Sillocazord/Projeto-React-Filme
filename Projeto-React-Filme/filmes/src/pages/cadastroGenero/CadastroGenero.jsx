import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
import api from "../../Services/services";
import Swal from "sweetalert2"
//Importação de componentes ⬆️
import { useEffect, useState } from "react";
import { data } from "react-router-dom";

const CadastroGenero = () => {
    //funções ou constante são sempre criados fora do return, nunca dentro dele
    const [genero, setGenero] = useState(""); //estate = genero (Estamos amarzenando a informação do input dentro de gênero)
    const [listaGenero, setListaGenero] = useState([]);
    // const [deletaGenero, setDeletaGenero] = useState();
    //useState = So usamos useState quando precisamos guardar uma informação que muda e o React precisa acompanhar(ex: Excluir um item de uma lista, cadastrar um item em uma lista, atualizar um item de uma lista).


    function alertar(icone, mensagem) {
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
                alertar("success", "Cadastrado com sucesso")
                setGenero("");
                //Atualiza a lista ao cadastrar um novo genero
                listarGenero();
            } catch (error) {
                alertar("error", "Erro! Entre em contato com o suporte (os guri)")
            }
        } else {
            // alert("O campo precisa estar preenchido")
            alertar("error", "Erro! Entre em contato com os guri")
        }

    };
    //função Sícrona = acontece simultaneamente (vai seguindo os demais blocos de codigo ao mesmo tempo)
    //função Assincrona = espera algo acontecer para depois seguir o codigo (espera um retorno da solicitação)
    async function listarGenero() { //trycat🐈😺🐈‍⬛
        try {       // setListaGenero(resposta);
            //.data = usado para listar somente os objetoss
            const resposta = await api.get("genero");
            setListaGenero(resposta.data)
        } catch (error) {
            console.log(error);
        }
    }
    //funcao de excluir o genero
    async function excluirGenero(idGenero) {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Você tem certeza?",
            text: "Esta ação é irreversivel!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim, deleta ae!",
            cancelButtonText: "Não, deleta não man",
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await api.delete(`genero/${idGenero}`);
                    //⬆️Interpolação X Concatenação
                    // alertar("success", "Excluido com sucesso")
                    listarGenero();
                }
                catch (error) {
                    console.log(error);
                }
                swalWithBootstrapButtons.fire({
                    title: "Deletado!",
                    text: "Gênero deletado com sucesso",
                    icon: "success"
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelado",
                    text: "Seu gênero imaginario está a salvo :)",
                    icon: "error"
                });
            }
        });

    }

    //-----------------
    async function editarGenero(genero) {
        const { value: novoGenero } = await Swal.fire({
            title: "Insira o novo nome do Gênero",
            input: "text",
            inputLabel: "Novo nome do gênero:",
            //através do input value, faremos com que o input ja venha preenchido com o gênero que queremos editar
            inputValue: genero.nome,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "Você tem que escrever alguma coisa! >:(";
                }
            }
        });
        if (novoGenero) {
             try {
                 await api.put(`genero/${genero.idGenero}`,{nome : novoGenero});
                 Swal.fire(`Seu gênero agora é: ${novoGenero}`);
             } catch (error) {
                
             }
            
        }

    }


    useEffect(() => {
        listarGenero();

    }, [listaGenero])
    //listargen

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
                    lista={listaGenero}
                    deletar={excluirGenero}
                    editar={editarGenero}
                />
            </main>
            <Footer />
        </>
    )

};
export default CadastroGenero;