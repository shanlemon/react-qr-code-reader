import React from 'react';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  margin: 0;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    position: sticky;
    top: 0;
  }
`;

const NavbarLogo = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Navbar() {
  return (
    <IconContext.Provider value={{ color: 'black' }}>
      <NavBar>
        <NavbarLogo to='/'>
          <h2>QR Scan and Generator</h2>
        </NavbarLogo>
      </NavBar>
    </IconContext.Provider>
  );
}

export default Navbar;
