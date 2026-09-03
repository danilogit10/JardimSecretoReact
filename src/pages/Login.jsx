import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./CadastroLogin.css";

import api from "../services/api";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    console.log("Botão de login clicado");

    try {
      const response = await api.post("/users/login", {
        email: email,
        password: senha
      });

      console.log(response.data);

      // Recebe o token do backend
      const token = response.data.token;

      // Salva o token no navegador
      localStorage.setItem("token", token);

      alert("Login realizado com sucesso!");

      navigate("/");

    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(
          error.response.data.message ||
          "E-mail ou senha incorretos."
        );
      } else {
        alert("Não foi possível conectar ao servidor.");
      }
    }
  }

  return (
    <div className="card">
      <h2>Entre na sua conta</h2>

      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>

          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="senha">Senha</label>

          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            placeholder="Digite sua senha"
            required
          />
        </div>

        <Link to="#" className="link-esqueci">
          Esqueci minha senha
        </Link>

        <button type="submit">Entrar</button>
      </form>

      <p className="footer-text">
        Ainda não possui uma conta?{" "}
        <Link to="/cadastro">Criar conta</Link>
      </p>
    </div>
  );
}

export default Login;