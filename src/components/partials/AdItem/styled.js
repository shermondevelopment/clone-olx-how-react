import styled from 'styled-components';

export const Item = styled.div`
  a { display:block; color:#000; border:1px solid #fff; margin:10px; text-decoration:none; background:#fff; padding:10px; transition:all 0.3s linear; border-radius:5px; &:hover {background:#eee;border:1px solid #ccc;} }
  .itemImage img {
    width:100%; border-radius:5px;
   }
   .itemName {
      font-weight:bold;
   }
`;
