import {useState}from 'react';
import {Link, useNavigate} from "react-router";

import api from "../services/api";

export function Cadastro() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const navigate = useNavigate();

    async function handleCadastro(event) {
      event.preventDefault();
      console.log ("Botaõ clicado")
      
      if (senha !== confirmarSenha){
        alert("As senhas não são iguais.");
        return;
      }
      try {
        const response = await api.post("/users/register",{
          email:email,
          password:senha
        });
        console.log(response.data);
        alert("Cadastro realizado com ssucesso!");
        navigate("/login");
      } catch (error){
        console.error(error);

        if (error.response) {

          alert(
            error.response.data.mensagem ||
            "Erro ao realizar cadastro."
          );
        } else {
          alert("Não foi possível conectar ao servidor.");
        }
      }
    }
  return (
    <div className="card">
      <h2>Crie sua conta</h2>

      <form onSubmit={handleCadastro}>
        <div className="input-group">
          <label htmlFor="email-cad">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }

            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            onChange={(event)=>
              setSenha(event.target.value)
            }
            placeholder="Digite sua senha"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirmar-senha">Confirmar senha</label>
          <input
            type="password"
            id="confirmar-senha"
            value={confirmarSenha}
            onChange={(event)=>
              setConfirmarSenha(event.target.value)

            }
            placeholder="Digite sua senha novamente"
            required
          />
        </div>

        <button type="submit">Criar conta</button>
      </form>

      <p className="footer-text">
        Já possui uma conta? <a href="/login">Entrar</a>
      </p>
    </div>
  );
}

export default Cadastro;