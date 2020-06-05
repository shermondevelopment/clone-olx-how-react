import React, { useState } from 'react';
import { PageArea } from './styled';
import Cookies from 'js-cookie';
import { PageContainer, PageTitle } from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPi';
import { doLogin, isLogged } from '../../helpers/AuthHandler';

import {ErrorMessage } from '../../components/MainComponents';

const Page = () => {
  const api = useApi();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');


  const preencherCampos = async () => {
    if(isLogged) {
      const json = await api.userInfo();
    }
  }

  // preencherCampos();

  const handleSubmit = async (e) => {
   e.preventDefault();
   setDisabled(true);
   setError('');
   // const json = await api.userInfo();

   //
   // if(json.error) {
   //   setError(json.error);
   // } else {
   //   doLogin(json.token, rememberPassword);
   //   window.location.href = "/";
   // }
   //
   // setDisabled(false);

  }
  return (
    <PageContainer>
      <PageTitle>Alterar Informações</PageTitle>
        <PageArea>
        {error &&
          <ErrorMessage>{error}</ErrorMessage>
        }
          <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Nome</div>
            <div className="area--input">
              <input type="email" required disabled={disabled} value={nome} onChange={e=>setNome(e.target.value)}/>
            </div>
          </label>
           <label className="area">
             <div className="area--title">Email</div>
             <div className="area--input">
               <input type="email" required disabled={disabled} value={email} onChange={e=>setEmail(e.target.value)}/>
             </div>
           </label>
           <label className="area">
             <div className="area--title">Senha</div>
             <div className="area--input">
               <input type="password" required disabled={disabled} value={password} onChange={e=>setPassword(e.target.value)}/>
             </div>
           </label>
           <label className="area">
             <div className="area--title"></div>
             <div className="area--input">
               <button disabled={disabled}>Trocar Informações</button>
             </div>
           </label>
          </form>
        </PageArea>
    </PageContainer>
  );
}

export default Page;
