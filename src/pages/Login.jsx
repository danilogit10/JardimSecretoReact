import React from 'react';
import "./CadastroLogin.css";

export function Login() {

  return (
    <div className="card">
      <h2>Entre na sua conta</h2>

      <form>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            required
          />
        </div>

        <a href="#" className="link-esqueci">
          Esqueci minha senha
        </a>

        <button type="submit">Entrar</button>
      </form>

      <p className="footer-text">
        Ainda não possui uma conta? <a href="/cadastro">Criar conta</a>
      </p>
    </div>
  );
}

export default Login;