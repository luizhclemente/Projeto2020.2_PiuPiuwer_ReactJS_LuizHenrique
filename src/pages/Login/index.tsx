import React, { useState, FormEvent, useCallback, useContext } from 'react';


import InputArea from '../../components/InputArea';
import LogoIcon from '../../assets/images/parrot-logo.svg'
import Button from '../../components/Button';
import { LoginDiv } from './styles'

import { useAuth } from '../../hooks/useAuth'
// import { useAuth } from '../../hooks/auth'

const Login: React.FC = () => {

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const { SignIn } = useAuth();
  const [erroText, setErrorText] = useState<string | undefined>();


  const handleLogin = useCallback(async () => {

    const erro = await SignIn(credentials);

    setErrorText(erro);

  }, [credentials, setErrorText, SignIn, erroText]);

  return (
    <LoginDiv>
      <img src={LogoIcon} />
      <h1>Entrar no <span>Piupiuwer</span></h1>
      <div className="container">
        <div className="inputs">
          <InputArea
            name="user"
            label="e-mail ou nome de usuário"
            value={credentials.username}
            type="text"
            onChange={(event) => {
              setCredentials({
                username: event.target.value,
                password: credentials.password
              })
            }
            }
            defaultValue={''}
          />
          <InputArea
            name="password"
            label="senha"
            value={credentials.password}
            type="password"
            onChange={event => setCredentials({
              ...credentials,
              password: event.target.value,
            })}
            defaultValue={''}
          />
        </div>
        <p>{erroText}</p>
        <Button
          title='Entrar'
          background='var(--color-login-button)'
          width='35'
          height='4.5'
          hover='var(--color-login-button-selected)'
          onClick={handleLogin}
        />
        <div className="password-register-text">
          <span>Esqueceu a senha?</span>
          <span >Registre-se no Piupiuwer</span>
        </div>
      </div>
    </LoginDiv>
  )
}

export default Login