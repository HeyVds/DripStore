import "./loginform.css";

export const LoginForm = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h2>Acesse sua conta</h2>
          <p>
            Novo cliente? Então registre-se <a href="register">aqui</a>.
          </p>
          <form>
            <label>Login *</label>
            <input
              type="text"
              placeholder="Insira seu login ou email"
              required
            />

            <label>Senha *</label>
            <input type="password" placeholder="Insira sua senha" required />

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
            alt="Shoe 1"
          />
        </div>
      </div>
    </>
  );
};
