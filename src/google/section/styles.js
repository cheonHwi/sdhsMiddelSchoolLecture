import styled from '@emotion/styled'

export const GogleSection = styled.section`
width: 100vw;
height: 80vh;
background:#fff;

`;
export const GogleLogo = styled.div`
display:flex;
justify-content:center;
align-items:flex-end;
width:100vw;
height:35%;
& img{
height:93px;
}
`;
export const GogleSearch = styled.div`
width:100vw;
display:flex;
justify-content:center;position:relative;
`;
export const GoogleInput = styled.div`
width:550px;
display:flex;
justify-content:center;
align-items:center;
border-radius:20px;
border:1px solid black;
&>img:nth-child(1){

}
&>input{
  border:none;
  outline:none;
  padding:20px;
  width:480px;
height:45px;
}
`;
