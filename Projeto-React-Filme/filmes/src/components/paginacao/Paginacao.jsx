import { useState } from "react";
import "./Paginacao.css"

const Paginacao = () => {
    const primeiraPagina = useState(1);
    const itemPagina = useState(4)

    // const [paginaAtual, definirPagina] = useState(1)
    // const [itensPagina, definirItens] = useState(4)

    // function pagina(itens, itensPorPagina) {

    //     const totalPaginas = 1;
    //     // Função para obter os itens da página atual
    //     function itensDaPagina() {
    //         const inicio = (paginaAtual - 1) * itensPorPagina;
    //         const fim = inicio + itensPorPagina;
    //         return itens.slice(inicio, fim)
    //     }
    //     // Função para atualizar a página
    //     function atualizarPagina() {
    //         const itens = itensDaPagina();
    //         console.log("itens da pagia", paginaAtual, ":", itens);

    //     }

    //     function paraPagina(pagina){
    //         paginaAtual = pagina;
    //         atualizarPagina();
    //     }
    // }
    return (
        <>
            <div>

            </div>
        </>
    )
}
export default Paginacao;