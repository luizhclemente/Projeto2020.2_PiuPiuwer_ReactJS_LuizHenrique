import React, { FormEvent, useState, useCallback } from 'react';

import Modal from 'react-modal';

import { WritePiuDiv, ModalStyle } from './styles';

import Smile from '../../assets/images/smile.svg'
import ImageIcon from '../../assets/images/image.svg'
import VideoIcon from '../../assets/images/video.svg'
import CloseIcon from '../../assets/images/x-circle.svg'


import { useAuth } from '../../hooks/useAuth';
import { Usuario } from '../Piu';
import api from '../../services/api';
import CharacterCounter from '../CharacterCounter';
import { zhCN } from 'date-fns/esm/locale';

interface charactersCounterColor {

}

const WritePiu: React.FC = () => {


  const { user }: any = useAuth();
  const [piuText, setPiuText] = useState('');
  const [contaChar, setContaChar] = useState(0);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [colorCounter, setColorCounter] = useState('#fff')

  const closePopUp = useCallback(() => {
    setmodalIsOpen(false)
  }, [setmodalIsOpen])

  const contaCaracteres = useCallback((e) => {
    if (e.target.value.length == 0) {
      console.log("entrei aqui")
      setColorCounter('#fff');
    }
    setPiuText(e.target.value);
    setContaChar(e.target.value.length);
    if (e.target.value.length > 140) {
      setColorCounter('#f00')
    } else if (e.target.value.length > 0 && e.target.value.length < 140) {
      setColorCounter('#000')
    }
  }, [setPiuText, setContaChar, contaChar])



  const publicaPiu = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (piuText.length < 140) {
      await api.post('/pius/',
        {
          usuario: user.id,
          texto: piuText,
        });
      setPiuText(piuText);
    } else {
      // Lança a mensagem de erro
      setmodalIsOpen(true);
    }
    setPiuText('');
    setColorCounter('#fff');

  }, [api, user, piuText, setPiuText, setmodalIsOpen])


  return (
    <WritePiuDiv>
      <Modal
        isOpen={modalIsOpen}
        style={ModalStyle}
      >
        <div>
          <button
            style={{ background: 'none', border: 'none', outline: 'none' }}
            onClick={closePopUp}
          >
            <img src={CloseIcon} />
          </button>
          <h1>Verifique se o seu Piu possui menos que 140 caracteres ;D</h1>
        </div>
      </Modal>
      <img src={user.foto} className="photo-user" />
      <div className="write-piu-and-icons">
        <textarea
          placeholder="Já piou hoje?"
          value={piuText}
          onChange={contaCaracteres}
        />
        <CharacterCounter color={colorCounter} character={contaChar} />
        <div className="icons-write-piu">
          <button><img src={Smile} /></button>
          <button><img src={ImageIcon} /></button>
          <button><img src={VideoIcon} /></button>
          <button
            className="piu-button"
            onClick={publicaPiu}
          >
            Piu
            </button>
        </div>
      </div>
    </WritePiuDiv >
  )
}

export default WritePiu