import "./Lista.css"
import Editar from "../../assets/img/pen-to-square-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"
const Lista = (props) => {
    return (
        <>
            <section className="layout_grid listagem">
                <h1>{props.tituloLista}</h1>
                <hr />
                <div className="tabela">
                    <table>{/*TABELA/cabeçalho da tabela:*/}
                        <thead>{/*OF THE TABLE, THE OTC, ROMAN REIGNS!!🔵🗣️🗣️🗣️🔵🔥🔥🔥🔵*/}
                            <tr className="table_cabecalho"> {/*tr => table row*/}
                                <th>Nome</th>{/*th => table head : cabeça da tabela*/}
                                <th style={{ display: props.visivel }}>Gênero</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>

                        <tbody> {/*tbody => corpo da tabela*/}
                            {props.lista && props.lista.length > 0 ? (
                                props.lista.map((item) => ( //map lista as coisas, é o responsavel por imprimir todos os itens da lista no banco de dados
                                    <tr className="item_lista" key={item.idGenero}>
                                        <td data-cell="Nome">{item.nome}</td>
                                        <td style={{ display: props.visivel }} data-cell="Gênero">Ação</td>
                                        <td data-cell="Editar"><img src={Editar} alt="Imagem de uma caneta" onClick={() => props.editar(item)} style={{cursor:"pointer"}} /></td>
                                        <td data-cell="Excluir"><img src={Excluir} alt="Imagem de uma caixa de lixo" onClick={() => props.deletar(item.idGenero)} style={{cursor:"pointer"}} /></td>

                                    </tr>
                                    // onClick={filter((item) => item.idGenero !==)}
                                ))

                            ) :
                                (
                                    <p>Nenhum gênero foi encontrado.</p>
                                )
                            //      <button onClick={() => props.ola(item.nome)}>
                            //     n sei véi
                            // </button>
                            }
                           

                        </tbody>

                    </table>
                </div>
            </section>
        </>
    )
}
export default Lista;