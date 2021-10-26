import styled from 'styled-components';
import ImgBg from '../../images/house1.jpg';
export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;


export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

export const HeroItems = styled.div`
  display: flex;
  border-radius: 5px;
  background-color:rgba(255,255,255,0.5);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-height: 100%;
  padding: 0 2rem;
  height:75vh;
  
  width: 1050px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH2 = styled.h2`
  font-size: clamp(2rem, 10vw, 4rem);
  margin-bottom: 1rem;
  letter-spacing: 3px;
  font-weight:bold;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroInput = styled.input`
  margin-bottom:30px;
  height:40px;
  align-items: center;
  justify-content:center;
  font-size:20px;
  padding:0;  
  margin:0;
  padding-left:10px;
  width:500px;
`;

export const QuickListings = styled.div`
display:flex;
flex-direction:row;


`;


export const HeroSearchButton = styled.button`
font-size:25px;
margin:0;
border:0;
background-color:#e9ba23;
border-radius: 0 10px 10px 0;
margin:0px;
padding:4px;
align-items: center;
justify-content:center;
`;


export const QuickListingsButton = styled.button`
margin-top:20px;
font-size: 1.4rem;
border:none;
border-right: 1px solid rgba(0,0,0,0.2);
padding: 1rem 4rem;

background: rgba(11,110,250,0.9);
color: #fff;
transition: 0.2s ease-out;

&:last-child {
  border:none;
}


&:hover {
  background: #ffc500;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #000;
}

`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;



