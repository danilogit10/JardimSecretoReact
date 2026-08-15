import React from 'react';
import "./CadastroLogin.css";

export function Cadastro() {

  return (
    <div className="card">
      <h2>Crie sua conta</h2>

      <form>
        <div className="input-group">
          <label htmlFor="email-cad">E-mail</label>
          <input
            type="email"
            id="email-cad"
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="senha-cad">Senha</label>
          <input
            type="password"
            id="senha-cad"
            placeholder="Digite sua senha"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirma-senha">Confirmar senha</label>
          <input
            type="password"
            id="confirma-senha"
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