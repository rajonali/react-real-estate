import styled from 'styled-components';
import ImgBg from '../../images/hero1.png';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;


export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 1050px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 10px 10px #e9ba23;
  letter-spacing: 3px;
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



