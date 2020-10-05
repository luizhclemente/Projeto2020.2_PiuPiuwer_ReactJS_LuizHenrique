import React, { useState, useCallback, useMemo } from 'react';

import { PiuDiv } from './styles';

import Answer from '../../assets/images/message-square.svg'
import Like from '../../assets/images/like.svg'
import selectedLike from '../../assets/images/likeselected.svg'
import Favorite from '../../assets/images/star.svg'
import Trash from '../../assets/images/trash.svg'

import { formatDistance } from 'date-fns';


import api from '../../services/api';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';


export interface UserProps {
  usuario: Usuario;
  likers: [];
  favoritado_por: [];
  texto: string;
  horario: string;
  id: number;
}

export interface Usuario {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  sobre: string;
  foto: string;
}

interface PiuItemProps {
  piar: UserProps
}

const Piu: React.FC<PiuItemProps> = ({ piar }) => {

  const { user, token }: any = useAuth();
  const [likes, setLikes] = useState<Array<Usuario>>(piar.likers);

  const usuarioDeuLike = useMemo(() => {
    // Se no array de likes possuir o user, o piarLikers retornará uma array vazio
    // e portanto a função usuarioDeuLike retornará false. Caso tenha dado like, 
    // retorna true
    const piarLikers = likes.filter((e: Usuario) => e.id === user.id);
    return piarLikers.length > 0
  }, [likes, user])

  const likePiu = useCallback(async () => {

    if (usuarioDeuLike) {
      // deslike -> likesCopy retorna um array dos likers sem o user
      const likesCopy = likes.filter((e: Usuario) => e.id !== user.id);
      // atualiza o numero de likes 
      setLikes(likesCopy);
    } else {
      setLikes([...likes, user])
    }


    await api.post('/pius/dar-like/', {
      usuario: user.id,
      piu: piar.id,
    }
    )
  }, [api, token, setLikes, piar, user, likes, usuarioDeuLike])

  const deletePiu = useCallback(async () => {
    if (piar.usuario.id === user.id) {
      await api.delete(`/pius/${piar.id}`,
      )
    }
  }, [piar, api, user])

  const today = new Date();
  const distance = formatDistance(
    new Date(piar.horario),
    today
  )
  return (
    <PiuDiv>
      <div className="piu">
        <img className="avatar" src={piar.usuario.foto} />
        <div className="piu-content">
          <div className="info-user">
            <strong>{piar.usuario.first_name}</strong>
            <span>@{piar.usuario.username}</span>
            <span>· {distance}</span>
          </div>
          <div className="piu-text">
            <span>{piar.texto}</span>
          </div>
          <div className="piu-icons">
            <button type="button"><img src={Answer} /></button>
            <button type="button" onClick={likePiu}>
              <div className="likeBtn">
                <img src={usuarioDeuLike ? selectedLike : Like} />
                <div className="numero-likes">
                  <span>{likes.length}</span>
                </div>
              </div>
            </button>
            <button type="button">
              <div className="likeBtn">
                <img src={Favorite} />
                <div className="numero-likes">
                  <span>{piar.favoritado_por.length}</span>
                </div>
              </div>
            </button>
            <button
              type="button"
              onClick={deletePiu}
            >
              <img src={Trash} />
            </button>
          </div>
        </div>
      </div>
    </PiuDiv >
  );
}

export default Piu