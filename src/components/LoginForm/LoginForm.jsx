import "./loginform.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../service/instance";
import { useEffect, useState } from "react";

export const LoginForm = () => {
  const [hasToken, setHasToken] = React.useState(localStorage.getItem("authToken"));
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await api.post("/users/login", form);
      
      // Armazenar o token no localStorage
      localStorage.setItem("authToken", data.authToken);
      setHasToken(data.authToken);

      // Redirecionar para a página "home"
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Login falhou. Verifique suas credenciais.");
    }
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({
      ...form,
      [id]: value,
    });
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Acesse sua conta</h2>
        <p>
          Novo cliente? Então registre-se <a href="register">aqui</a>.
        </p>
        <form onSubmit={handleSubmit}>
          <label>Login *</label>
          <input
            type="email"
            placeholder="Insira seu login ou email"
            required
            onChange={handleChange}
            id="email"
          />

          <label>Senha *</label>
          <input
            type="password"
            placeholder="Insira sua senha"
            required
            onChange={handleChange}
            id="password"
          />

          <a href="#" className="forgot-password">
            Esqueci minha senha
          </a>

          <button type="submit" className="login-button">
            Acessar Conta
          </button>
        </form>
        <div className="social-login">
          <p>Ou faça login com</p>
          <div className="social-icons">
            <img src="src/assets/login-image/gmail.png" alt="Gmail" />
            <img src="src/assets/login-image/facebook.png" alt="Facebook" />
          </div>
        </div>
      </div>
      <div className="login-image">
        <img
          className="tenisL"
          src="src/assets/login-image/tenisL.png"
          alt="Shoe 1"
        />
        <img
          className="tenisR"
          src="src/assets/login-image/tenisR.png"
          alt="Shoe 2"
        />
      </div>
    </div>
  );
};
