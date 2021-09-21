import React, { Component } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
  } from 'mdb-react-ui-kit';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <>
                 <MDBNavbar sticky  light bgColor='light'>
                    <MDBContainer >
                    <MDBNavbarBrand href='/'><span style={{color:'orange',fontWeight:'bolder',fontSize:'30px'}}>StaffMS</span>.com</MDBNavbarBrand>
                    <span className='navbar-text'> <a href='/'>STAFF MANAGEMENT SYSTEM</a></span>
                    </MDBContainer>
                </MDBNavbar>
            </>
         );
    }
}
 
export default NavBar;