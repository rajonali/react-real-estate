import styled from 'styled-components';

export const OptionsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #000;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const OptionsCard = styled.div`
  margin: 0 1rem;
  line-height: 2;
  background-color: white;
  width: 300px;
  border-radius:5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

export const OptionsImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  object-fit: contain;

`;

export const OptionsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const OptionsTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color:black;
`;

export const OptionsInfo = styled.div`
  display: flex;
  color:black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const OptionsDesc = styled.p`
  margin-bottom: 1rem;
`;

export const OptionsPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const OptionsButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
