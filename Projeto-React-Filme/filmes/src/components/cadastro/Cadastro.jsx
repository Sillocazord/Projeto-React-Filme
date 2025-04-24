import "./Cadastro.css"
import Botao from "../botao/Botao"
const Cadastro = () => {
    return(
        <>
        <section className="section_cadastro">

            <form action="" className="layout_grid form_cadastro">
                <h1>Cadastre um Filme</h1>

                <hr />

                <div className="campos_cadastros">

                    <div className="campo-cad_nome">
                        <label htmlFor="nome">Nome</label>
                        <input style={{color:"red"}} type="text" name="nome" />
                    </div>

                    <div className="campo-cad_genero">
                        <label htmlFor="genero">Genero</label>
                        <select style={{color:"red"}} name="genero" id="">
                            <option value="" disabled selected>Selecione</option>
                            <option value="">op 1</option>
                            <option value="">op 2</option>
                            <option value="">op 3</option>
                        </select>
                    </div>

                    <Botao/>

                </div>

            </form>



        </section>
        
        </>
    )
}
export default Cadastro;