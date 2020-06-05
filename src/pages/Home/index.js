import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchArea, PageArea } from './styled';
import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';
import useApi from '../../helpers/OlxAPi';

const Page = () => {

 const api = useApi();
 const [stateList, setStateList] = useState([]);
 const [categories, setCategories] = useState([]);
 const [asList, setAdList] = useState([]);

 useEffect(()=>{
   const getStates = async () => {
     const sList = await api.getStates();
     setStateList(sList);
   }
   getStates();
 }, []);

 useEffect(()=>{
   const getCategories = async () => {
     const cats = await api.getCategories();
     setCategories(cats);
   }
   getCategories();
 }, []);

 useEffect(()=>{
   const getRecentAds = async () => {
     const json = await api.getAds({
       sort:'desc',
       limit:8
     });
      setAdList(json.ads);
   }
   getRecentAds();
 }, []);

  return (
    <>
      <SearchArea>
       <PageContainer>
         <div className="searchBox">
           <form method="GET" action="/ads">
           <input type="text" name="q" placeholder="O que você procura?" />
           <select name="state">
             {stateList.map((i, k) => {
               return <option key={k} value={i.name}>{i.name}</option>
             })}
           </select>
           <button>Pesquisar</button>
           </form>
         </div>
         <div className="categoryList">
            {categories.map((i, k) => {
              return <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                 <img src={i.img} alt="" />
                 <span>{i.name}</span>
              </Link>
            })}
         </div>
       </PageContainer>
      </SearchArea>
      <PageContainer>
          <PageArea>
            <h2>Anúncios Recentes</h2>
            <div className="List">
             {asList.map( (i, k) => {
               return <AdItem key={k} data={i}/>
             } )}
            </div>
            <Link to="/ads" className="seeAllLink">Ver Todos </Link>
            <hr/>
            My Lord bag of rice long long ago there lived in japan a brave warrior known to all as tawara toda or muy lord bag of rice
            his true name was fugiwara hidesato and there is a very interesting story of how he came to change his name one day he went out in search of
            advetures because he had the nature of warrior and coul not bear to be dle so he picked up his two swords in his hand staped his quiver on his
            backand started out
          </PageArea>
      </PageContainer>
    </>
  );
}

export default Page;
