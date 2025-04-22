
import Logo from "../../assets/img/logo.svg"
import "./Login.css"

const Login = () => {
    return(
        <main className = "main_login">
            <div className = "banner"></div>
            <section className = "section_login">
                <img src={Logo} alt="Logo do Filmoteca"x />
                <form action="">
                    <h1>Login</h1>

                     <div>
                        <div>
                            <label htmlFor="">Email:</label>
                            <input type="email" name="email" placeholder="Digite seu e-mail" />
                        </div>

                        <div>
                            <label htmlFor="">Senha:</label>
                            <input type="password" name="senha" placeholder="Digite sua senha"/>
                        </div>
                    </div> 
                </form>
            </section>
        </main>
    )
}

export default Login;