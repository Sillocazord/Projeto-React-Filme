import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista"
import api from "../../Services/services";
import Swal from "sweetalert2";
import { useState, useEffect, useActionState } from "react";
import { Fragment } from "react";

const CadastroFilme = () => {

    const [filme, setFilme] = useState("");
    const [genero, setGenero] = useState("");
    const [listaFilme, setListaFilme] = useState([]);

    const [listaGenero, setListaGenero] = useState([]);
    //função para trazer os gêneros no select meu fí
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

    async function listarGenero() {
        try {
            const resposta = await api.get("genero");
            setListaGenero(resposta.data);
        } catch (error) {

        }
    }

    async function cadastrarFilme() {
        if (filme.trim() !== "") {
            try {
                await api.post("filme", { titulo: filme, idGenero: genero });
                alertar("success", "CADASTRADO DIREITO MIZERA")
                setFilme("")
                setGenero("")
            } catch (error) {
                console.log(error);
            }
        } else {
            alertar("error", "CADASTRA DIREITO MIZERA")
        }

    }


    useEffect(() => {
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

    return (

        <> {/*Fragment, o pai da estrutura e a forma melhor e mais segura pra não dar pau no seu codigo**/}
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    placeholder="filme"

                    valorInput={filme}
                    setValorInput={setFilme}

                    valorSelect={genero}
                    setValorSelect={setGenero}
                    funcCadastro={cadastrarFilme}

                    lista={listaGenero}
                />
                <Lista
                    tituloLista="Lista de Filmes"
                // lista={listaFilme}
                />
            </main>
            <Footer />
        </>
    )
}
export default CadastroFilme;