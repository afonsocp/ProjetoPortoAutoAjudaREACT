import React, { useState } from "react";
import '../assets/css/register.css';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <React.Fragment>
      <img src="./src/assets/img/LOGO-PORTO-AUTOAJUDA.png" alt="logotopportoseguro" className="logoautoajuda" />
      <main className="login-register">
        <form className="container container-register">
          <h1 className="titulo-register">Crie sua Conta</h1>
          <h2 className="subtitulo-register">Preencha seus dados pessoais para continuar.</h2>
          <div className="form-register">
            <input className="input-nome-register" type="text" placeholder="Nome Completo" required />
            <input className="input-email-register" type="email" placeholder="Email" required />
            <input className="input-nascimento-register" type="date" placeholder="Data de Nascimento" required />
            <select className="input-genero-register" required>
              <option selected value="">Gênero</option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </select>
            <input className="input-cpf-register" type="text" placeholder="CPF ou CNPJ" required />
            <input className="input-celular-register" type="tel" placeholder="Celular" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" required />
            <input className="input-senha-register" type={showPassword ? "text" : "password"} placeholder="Senha" required />
            <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`} id="olho" onClick={togglePasswordVisibility}></i>
            <input className="input-senha-register" type={showConfirmPassword ? "text" : "password"} placeholder="Confirme sua Senha" required />
            <i className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"}`} id="olho2" onClick={toggleConfirmPasswordVisibility}></i>
            <Link to="/dashboard" className="button-register">
              Cadastrar
              <i className="bi bi-arrow-right" id="seta-direita"></i>
            </Link>
          </div>
        </form>
      </main>
      <footer>
        <div className="footercontent-register">
          <img src='./src/assets/img/logo-porto.png' id="portologorodape" alt="logoportorodape" />
          <p id="textorodape">Acompanhe a Porto nas redes sociais</p>
          <ul className="socialicons-register">
            <Link to="https://www.facebook.com/porto">
              <li>
                <img src="./src/assets/img/redes-sociais/FACEBOOK 1.png" alt="facebook" />
              </li>
            </Link>
            <Link to="https://www.instagram.com/porto">
              <li>
                <img src="./src/assets/img/redes-sociais/instagram.png" alt="instagram" />
              </li>
            </Link>
            <Link to="https://www.linkedin.com/company/porto/">
              <li>
                <img src="./src/assets/img/redes-sociais/linkedin 1.png" alt="linkedin" />
              </li>
            </Link>
            <Link to="https://www.youtube.com/portoseguro">
              <li>
                <img src="./src/assets/img/redes-sociais/youtube.png" alt="youtube" />
              </li>
            </Link>
            <Link to="https://twitter.com/portoseguro">
              <li>
                <img src="./src/assets/img/redes-sociais/twitter 1.png" alt="twitter" />
              </li>
            </Link>
            <Link to="https://www.tiktok.com/@portoseguro">
              <li>
                <img src="./src/assets/img/redes-sociais/tiktok 1.png" alt="tiktok" />
              </li>
            </Link>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Register;