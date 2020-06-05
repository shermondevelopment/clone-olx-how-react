import styled from 'styled-components';
export const Fake = styled.div`

 background-color:#ddd;
 height:${props=>props.height || 20}px;
`;

export const PageArea = styled.div`

 display:flex; margin-top:20px;
 .box {
   background-color:#fff;
   border-radius:5px; box-shadow:0px 0px 4px #999; margin-bottom:20px;
 }
.box--padding {
  padding:10px;
}
.leftSide {
  flex:4; margin-right:20px;
  .box {
    display:flex;
  }
  .adImage {
    width:320px; height:320px; margin-right:20px;
    .each-slide img {
      display:flex; align-items:center;
      justify-content:center;
      background-size:cover; height:320px;
    }
  }
  .adInfo {
    flex:1;
    .adName {
     margin-bottom:20px;
     h2 {
       margin:0px;
       margin-top:20px;
     }
     small {
       color:#999;
     }
    }
    .addDescription {
     small { color:#999; }
    }
  }
}
.rightSide{
 flex:1;
 .price span {
   color:#0000FF; display:block;
   font-size:27px; font-weight:bold;
 }
 .selectNameLink {
   background-color:#0000FF;
   color:#FFF; height:30px; border-radius:5px; box-shadow:0px 0px 40px #999;
   display:flex; justify-content:center; align-items:center; text-decoration:none;
   margin-bottom:20px;
 }

 .createBy small{
   display:block; color:#999; margin-top:10px;
 }
}
@media (max-width:600px) {
  &{
    flex-direction:column;
  }
  .leftSide {
    margin:0;
   .box {
     width:320px;
     flex-direction:column; margin:auto;
   }
   .adInfo {
     padding:10px;
   }
  }
  .rightSide {
    width:auto;
    margin-top:20px;
    .box {
      width:320px;
      margin:auto;
    }
    .selectNameLink {
      width:320px; margin:20px auto;
    }
  }
}
`;

export const OthersArea = styled.div`
 h2 { font-size:20px; }
 .List {
   display:flex; flex-wrap:wrap;
   .addItem { width:25%; }
 }
 @media (max-width:600px) {
   & {
     margin:10px;
   }
   .List .addItem {
     width:50%;
   }
 }
`;

export const BreadChumb = styled.div`
 font-size:13px; margin-top:20px;
 a {
 display:inline-block; margin:0px 5px; text-decoration:underline; color:#000;
}
@media (max-width:600px){
  & {
    margin:20px;
  }
}
`;
