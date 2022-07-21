import styled from '@emotion/styled'

export const GoogleHeader = styled.header`
    width: 100vw;
    height: 8vh;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;
export const Googlenav1 = styled.div`
  padding:0 10px;
&>a{
    padding-left:20px;
}
& a:hover{
    text-decoration: underline;
}
`;
export const Googlenav2 = styled.div`
    width:220px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    & a{
        font-size:15px;
    }
    & a:hover{
        text-decoration: underline;
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