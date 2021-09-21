import React, { Component } from 'react';
import { MDBContainer,MDBBtn,MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRipple,
    MDBRow,
    MDBCol,
   } from 'mdb-react-ui-kit';
import './css/home.css';
import non from '../img/non.jpg';
import aca from '../img/aca.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <MDBContainer fluid className='home'>
                <MDBContainer>
                <MDBRow>
                    <MDBCol lg='3' style={{}}>
                    <MDBCard style={{ maxWidth: '15rem' }}>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src={aca} fluid alt='...' />
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Academic Staff Management</MDBCardTitle>
                            <MDBCardText>
                            Some quick example text to build on the card title.
                            </MDBCardText>
                            <MDBBtn href='/academic' color='dark'>get started</MDBBtn>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol lg='3' style={{textAlign:'left', paddingTop:'50px'}}>
                    <MDBCard style={{ maxWidth: '15rem'}}>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src={non} fluid alt='...' />
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Non-Academic Staff Management</MDBCardTitle>
                            <MDBCardText>
                            Some quick example text to build on the card title .
                            </MDBCardText>
                            <MDBBtn href='/non_academic' color='dark'>get started</MDBBtn>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg='6' style={{paddingTop:'5%'}}>
                    <h1 className='topic'>Staff Management <br/>System</h1>
                    <p className='cont'>
                        Sint dolore aliquip ea commodo sit exercitation cupidatat in adipisicing nostrud irure. Minim pariatur non est ea fugiat sint velit consectetur.
                    </p>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>

            </MDBContainer>
         );
    }
}
 
export default Home;