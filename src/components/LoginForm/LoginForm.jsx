import React from 'react';
import './loginform.css';

export const LoginForm = () => {
  return (
    <>
    <div className="login-container">
      <div className="login-form">
        <h2>Acesse sua conta</h2>
        <p> Novo cliente? Então registre-se <a href="#">aqui</a>.</p>
        <form>
          <label>Login *</label>
          <input type="text" placeholder="Insira seu login ou email" required />

          <label>Senha *</label>
          <input type="password" placeholder="Insira sua senha" required />

          <a href="#" className="forgot-password">Esqueci minha senha</a>

          <button type="submit" className="login-button">Acessar Conta</button>
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
        <img src="https://s3-alpha-sig.figma.com/img/95ea/b6de/38b674033b641e23cb9d658703e259af?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0YgSvviQuE9Gl9Q43bQIgzLxQtrZKYH7Z0n4oT8TooLEsMHjLRBreor7I9k-WEhdoKlegGxuOJaveyEPMzqndNs2AvnNh3gJkO~nzSM-wQGdYDyuWYeMVWdm03M8HRp5Erv2wgdNR3FklSGtaB3ixMba6tldexyAw4wDcLVo6wVlJobguIG5jKvH19uubJJghS3pwST6PIQk06JpYvWvboV2mlIpNnO1SxHWWtqM3poC~qZw3VQIuoc-9huaMWyGPKDzgna7RugQ-h02nn~Ufkm~fhGuRZtiqBN4oG-hxHHkEvVuX0DFAnMpXYjoCaDUqSXk0SEPYvjoJVAxlPX9Q__" alt="Shoe 1" />
      </div>
    </div>
    </>
  );
};
