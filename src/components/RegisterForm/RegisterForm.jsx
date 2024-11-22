import React from 'react';
import './register.css';


export const RegisterForm = () => {
    return (
        <>
        <div className="register-container">
      <div className="register-form">
        <h2>Crie sua conta</h2>
        <p> Já possui uma conta? Entre <a href="login">aqui</a>.</p>
        <form>
          <label>Email *</label>
          <input type="text" placeholder="Insira seu email" required />

          <label>Senha *</label>
          <input type="password" placeholder="Insira sua senha" required />

       

          <button type="submit" className="register-button">Criar conta</button>
        </form>
        <div className="social-register">
          <p>Ou faça login com</p>
          <div className="social-icons">
            <img src="src/assets/login-image/gmail.png" alt="Gmail" />
            <img src="src/assets/login-image/facebook.png" alt="Facebook" />
          </div>
        </div>
      </div>
      <div className="register-image">
        <img class= "tenisL" src="src/assets/login-image/tenisL.png"  alt="Shoe 1" />
        <img class= "tenisR" src="src/assets/login-image/tenisR.png" alt="Shoe 1" />
      </div>
    </div>
        
        </>
    )
}