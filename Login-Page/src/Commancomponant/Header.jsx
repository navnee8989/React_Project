import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Header() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page'>
              <Link to='Home'>
                Home
              </Link>
            </MDBNavbarLink>
            <MDBNavbarLink > <Link to='Login'>
                Login
              </Link></MDBNavbarLink>
              <MDBNavbarLink > <Link to='Dashboard'>
                Dashboard
              </Link></MDBNavbarLink>
            {/* <MDBNavbarLink >Pricing</MDBNavbarLink> */}
            {/* <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
              Disabled
            </MDBNavbarLink> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}