import styled from '@emotion/styled'

export const GogleHeader = styled.header`
    width: 100vw;
    height: 10vh;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;
export const Goglenav1 = styled.div`
  padding:0 10px;
&>a{
    padding-left:20px;
}
`;
export const Goglenav2 = styled.div`
    width:200px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    & a{
        font-size:15px;
    }
    &>img{
        width:32px;
        height:32px;
        border-radius:50%;
    }
`;
export const Gb_ue = styled.svg`
    width:22px;
    height:22px;
}
`;