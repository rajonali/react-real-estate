import styled from 'styled-components';


export const DualColOptionsWrapper = styled.div`
  margin: 0 2rem;
  padding:100px;

  line-height: 2;
display:flex;
flex-direction:row;
`;


export const FirstCol = styled.div`
display:flex;
height:100%;
flex:1;
flex-direction:column;
margin:0 !important;
padding:0 !important;
`;



export const Img1 = styled.img`
width: 100%;
overflow: hidden;    
display: inline-block;
height:100%;

object-fit:cover;

`;


export const Img2 = styled.img`

width: 100%;

height:100%;
overflow: hidden;    
display: inline-block;  
object-fit:cover;
display: block;


`;


export const SecondCol = styled.div`
flex:1;
display:flex;
height:100%;
flex-direction:column;
margin:0 !important;
padding:0 !important;
`;


export const Info1 = styled.div`
display:flex;
flex:1;
flex-direction:column;
justify-content:center;
display: inline-block;

align-items:center;
height:100%;
text-align:center;

`;


export const Info2 = styled.div`
flex:1;
display:flex;
display: inline-block;

flex-direction:column;
text-align:center;
height:100%;
justify-content:center;
align-items:center;



`;