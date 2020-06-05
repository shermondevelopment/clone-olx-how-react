import styled from 'styled-components';

export const SearchArea = styled.div`
 background-color:#DDD;
 border-bottom:1px solid #ccc;
 padding:20px 0;

 .searchBox {
   background-color:#9bb83c; padding:20px 15px; border-radius:5px;
   box-shadow:1px 1px 1px 0.3px rgba(0, 0, 0, 0.3); display:flex;
   form {
     flex:1; display:flex;
     input, select {
       height:40px; border:0px; border-radius:5px; outline:none; font-size:15px;
       color:#000; margin-right:20px;
     }
     input {
     flex:1; padding:0 10px;
    }
    select {
      width:100px;
    }
    button {
      background-color:#49AEEF; font-size:15px; border:none; border-radius:5px;
      color:#fff; padding:0 20px; height:40px; cursor:pointer; outline:none;
    }
   }
 }
 .categoryList {
   display:flex; flex-wrap:flex;
   margin-top:20px;
   .categoryItem {
     width:25%; display:flex; align-items:center; color:#000; text-decoration:none;
     height:50px; margin-bottom:10px;
     &:hover {
       color:#999;
     }
     img {
       width:45px; height:45px; margin-right:10px;
     }
   }
 }

@media (max-width:600px) {
  .searchBox form{
    flex-direction:column;
    input {
      padding:10px; margin-right:0px; margin-bottom:10px;
    }
    select {
      width:100%; margin-bottom:10px;
    }
  }
  .categoryList {
    flex-wrap:wrap; justify-content:center;
  }
  .categoryList .categoryItem
  {
    width:50%; padding:10px;
  }
}

`;

export const PageArea = styled.div`
 h2 { font-size:20px; }
 .List {
   display:flex; flex-wrap:wrap;
   .addItem { width:25%; }
 }
 .seeAllLink {
   color:#000; text-decoration:none; font-weight:bold; display:inline-block; margin-top:10px;
 }

 @media (max-width:600px) {
  & {
    margin:10px;
  }
   .List .addItem{
     width:50%;
   }
 }
`;
