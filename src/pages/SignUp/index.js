import React, { useState, useEffect } from 'react';
import { PageArea } from './styled';
import { PageContainer, PageTitle } from '../../components/MainComponents';
import {doLogin} from '../../helpers/AuthHandler';
import useApi from '../../helpers/OlxAPi';


import {ErrorMessage } from '../../components/MainComponents';

const Page = () => {
  const api = useApi();

  const [name, setName] = useState('');
  const [stateLoc, setStateLoc] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    const getStates = async () => {
     const sList = await api.getStates();
     setStateList(sList);
    }
    getStates();
  }, []);



  const handleSubmit = async (e) => {
     e.preventDefault();
     setDisabled(true);
     setError('');
     if(password !== confirmPassword) {
       setError('Senha não Batem');
       setDisabled(false);
       return;
     }
    const json = await api.register(name, email, password, stateLoc);
    if(json.error) {
      setError(json.error);
    }else {
      doLogin(json.token);
      window.location.href = "/";
    }
    setDisabled(false)
  }

  return (
    <PageContainer>
      <PageTitle>Cadastro</PageTitle>
        <PageArea>
        {error &&
          <ErrorMessage>{error}</ErrorMessage>
        }
          <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Nome Completo</div>
            <div className="area--input">
              <input type="text" required disabled={disabled} value={name} onChange={e=>setName(e.target.value)}/>
            </div>
          </label>
          <label className="area">
            <div className="area--title">Estado</div>
            <div className="area--input">
              <select value={stateLoc} onChange={e=>setStateLoc(e.target.value)} required>
                <option></option>
                {stateList.map( (i, k) => {
                  return <option key={k} value={i._id} >{i.name}</option>
                })}
              </select>
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
             <div className="area--title">Confirmar Senha</div>
             <div className="area--input">
               <input type="password" required disabled={disabled} value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
             </div>
           </label>
           <label className="area">
             <div className="area--title"></div>
             <div className="area--input">
               <button disabled={disabled}>Fazer Cadastro</button>
             </div>
           </label>
          </form>
        </PageArea>
    </PageContainer>
  );
}

export default Page;
