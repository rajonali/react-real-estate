import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export const Nav = styled.nav`
  background: black;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding:20px;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  width:5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 1em;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaHome)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
