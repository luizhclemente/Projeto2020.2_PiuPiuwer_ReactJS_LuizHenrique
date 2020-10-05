import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

import api from '../services/api';

import * as Yup from 'yup';

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextData extends AuthState {
  user: object;
  SignIn({ username, password }: LoginCredentials): Promise<string | undefined>;
  LogOut(): void;
}

interface LoginCredentials {
  username: string;
  password: string;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Project:token');
    const user = localStorage.getItem('@Project:user');

    if (user && token) {
      api.defaults.headers.Authorization = `JWT ${token}`;
      return { user: JSON.parse(user), token };
    }

    return {} as AuthState;
  });

  const SignIn = useCallback(async ({ username, password }: LoginCredentials) => {

    try {
      const response = await api.post('/login/',
        {
          username,
          password
        });

      const { token } = response.data;
      localStorage.setItem('@Project:token', token);

      if (!!token) {
        api.defaults.headers.Authorization = `JWT ${token}`;
        const userResponse = await api.get('usuarios/?search=' + username);
        const user = userResponse.data[0];
        localStorage.setItem('@Project:user', JSON.stringify(user));

        setData({ token, user });
      }

    } catch (err) {
      const { data } = err.response;

      console.log(err.response)
      if (err.response) {

        if (data.global !== undefined && data.global[0] === 'Impossível fazer login com as credenciais fornecidas.')
          return "Atenção: Usuário e senha não existem"

        if (data.username !== undefined && data.username[0] === 'Este campo não pode ser em branco.')
          return 'Atenção: Usuário em branco';

        if (data.password !== undefined && data.password[0] === 'Este campo não pode ser em branco.')
          return "Atenção: Senha em branco";
      }
    }

  }, [])

  const LogOut = () => {
    localStorage.removeItem('@Project:user');
    localStorage.removeItem('@Project:token');

    setData({} as AuthState);

  }

  return (
    <AuthContext.Provider value={{ user: data.user, SignIn, LogOut, token: data.token }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}