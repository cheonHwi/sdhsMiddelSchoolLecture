import styled from '@emotion/styled'

export const GoogleFooter = styled.footer`
width: 100vw;
height: 10vh;
background: #f2f2f2;

`;
export const GoogleTop =styled.div`
padding: 15px 30px;
    border-bottom: 1px solid #dadce0;
    font-size: 15px;
    color: #70757a;
`;
export const GoogleBottom = styled.div`
display: flex;
height:40px;
justify-content: space-between;
padding: 0 20px;
align-items:center;
& div>a{
    padding:0 10px;
    color: #70757a;
}
& a:hover{
    text-decoration: underline;
}
`;
