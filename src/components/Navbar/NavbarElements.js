import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #6b46c1;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  padding-left:20px;
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
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content:center;
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
