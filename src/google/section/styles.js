import styled from '@emotion/styled'

export const GoogleSection = styled.section`
width: 100vw;
height: 82vh;
background:#fff;

`;
export const GoogleLogo = styled.div`
display:flex;
justify-content:center;
align-items:flex-end;
width:100vw;
height:35%;
& img{
height:93px;
}
`;
export const GoogleSearch = styled.div`
width:100vw;
display:flex;
flex-direction:column;
height:20%;
align-items:center;
justify-content:center;position:relative;
`;
export const GoogleInput = styled.div`
width:550px;
display:flex;
border: 1px solid #dfe1e5;
justify-content:center;
align-items:center;
border-radius:30px;
&>img:nth-child(1){

}
&>button{
  border:0;
  outline:0;
  background:#fff;
}
&>input{
  border:none;
  outline:none;
  padding:20px;
  width:480px;
height:45px;
font-size:14px;
}
&:hover{
  background-color: #fff;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  border-color: rgba(223,225,229,0);
}
`;
export const GoogleButton = styled.div`
width:350px;
display:flex;
justify-content:space-around;

&>button{
  width:200px;
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  border-radius: 4px;
  color: #3c4043;
  font-size: 14px;
  margin: 11px 4px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  text-align: center;
  cursor: pointer;
}
&>button:hover{
  background-color: #f8f9fa;
  border: 1px solid #dadce0;
  color: #202124;
}

`;
