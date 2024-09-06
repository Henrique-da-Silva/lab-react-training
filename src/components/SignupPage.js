import Signuppage from '../FacebookCss/SignupPage.css';
import React, { useState } from 'react';


function SignupPage() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  // Validação de email simples
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Validação de senha (mínimo 6 caracteres)
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // Exibe saudação com base na nacionalidade
  const getGreeting = () => {
    switch (nationality) {
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  };

  return (
    <div className="signup-form">
      <h2>Signup Form</h2>

      {/* Campo de Email */}
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            borderColor: email && validateEmail(email) ? 'green' : 'red',
          }}
        />
        {email && (
          <p style={{ color: validateEmail(email) ? 'green' : 'red' }}>
            {validateEmail(email)
              ? 'Email válido'
              : 'Email inválido'}
          </p>
        )}
      </div>

      {/* Campo de Senha */}
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            borderColor: password && validatePassword(password) ? 'green' : 'red',
          }}
        />
        {password && (
          <p style={{ color: validatePassword(password) ? 'green' : 'red' }}>
            {validatePassword(password)
              ? 'Senha forte'
              : 'Senha fraca (mínimo de 6 caracteres)'}
          </p>
        )}
      </div>

      {/* Campo de Seleção de Nacionalidade */}
      <div className="form-group">
        <label>Nationality:</label>
        <select
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </div>

      {/* Saudação e Exibição de Email */}
      <div className="greeting-section">
        <p>{getGreeting()}</p>
        {<p>Your email is {email}</p>}
      </div>
    </div>
  );
}

export default SignupPage;
