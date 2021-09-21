import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer,MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol,MDBBtn,MDBIcon,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,   } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import stf from '../../img/stf.jpg';
import staff from '../../img/staff.jpg';

class NonPostDetails extends Component {
    constructor(props){
        super(props);

        this.state = {

            warningModal:false,

            basicModal:false,

            post:{}
          };

    }
    
    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/nonmember/${id}`).then((res) =>{
            if(res.data.success){

                this.setState({
                    post: res.data.post
                });

                console.log(this.state.post);
            }
        });
    }


    onDelete =(id3)=>{
        this.warningHide();
         axios.delete(`/nonpost/delete/${id3}`).then((res)=>{
           this.setState(
             {
                 basicModal:true,
             })
         })
       
       }




    
 warningShow = () => {

    this.setState({
      warningModal:true,      
    });
    
  }
  

  warningHide = () => {
    this.setState({
        warningModal:false,
    })
  }
  

  toggleShow = () => {
    this.setState({
        basicModal:false,
    })
  }


    render() { 

        const {name,about,job,department}= this.state.post;


        return ( 
            <>
            <header>
            <div
              className='p-5 text-center bg-image'
              style={{ backgroundImage:` url(${staff})`, height: 300 }}
            >
              <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                  <div className='text-white'>
                    <h1 className='mb-3'>Member Details</h1>
                    <h4 className='mb-3'>Non-Academic Staff</h4>
                    <Link to="/non_academic" className='btn btn-outline-light btn-lg' href='#!' role='button'>
                      All Members
                    </Link>
                  
                  </div>
                </div>
              </div>
            </div>
           </header>
            <MDBContainer style={{paddingBottom:'50px'}}>
                
            <MDBCard style={{ maxWidth: '60%', marginTop:"-3%"}} className="mx-auto">
                <MDBRow className='g-0'>
                    <MDBCol md='4'>
                    <MDBCardImage src={stf} alt='...' fluid style={{height:'400px',border:'5px solid white'}} />
                    </MDBCol>
                    <MDBCol md='8'>
                    <MDBCardBody style={{overflow:'auto',height:'400px'}}>
                     
                        <MDBCardTitle>Full Name</MDBCardTitle>
                        <MDBCardText>
                        {name}
                        </MDBCardText>
                        
                       
                        <MDBCardTitle>About</MDBCardTitle>
                        <MDBCardText>
                        {about}
                        </MDBCardText>

                        <MDBCardTitle>Job Role</MDBCardTitle>
                        <MDBCardText>
                        {job}
                        </MDBCardText>

                        <MDBCardTitle>Department</MDBCardTitle>
                        <MDBCardText>
                        {department}
                        </MDBCardText>
                        <MDBCardText className='pt-2'>
                            <MDBBtn color="warning" href={`/non_academic_edit/${this.props.match.params.id}`}>
                            <MDBIcon icon='feather-alt' size='lg' /> &nbsp;Edit
                            </MDBBtn>
                            &nbsp; &nbsp; &nbsp;
                            <MDBBtn color="danger" onClick={() => this.warningShow()}>
                            <MDBIcon icon='trash' size='lg' /> &nbsp;Remove
                            </MDBBtn>
                        </MDBCardText>

                        
                    </MDBCardBody>
                    </MDBCol>
                   
                </MDBRow>
                </MDBCard>
            </MDBContainer>





     <MDBModal staticBackdrop tabIndex='-1' show={this.state.warningModal} >
        <MDBModalDialog size='sm' centered>
          <MDBModalContent>
          <MDBModalHeader>
                    <MDBModalTitle className='mx-auto'>Remove Member
                    </MDBModalTitle>
                </MDBModalHeader>
            
            <MDBModalBody style={{textAlign:'center',padding:'10px 0px 0px 0px'}}>
              <p>
                Are you sure ?
              </p>
              </MDBModalBody>

              <MDBModalBody style={{textAlign:'center',padding:'0px 0px 20px 0px'}}>
              <MDBBtn color='light'  className='mx-auto' onClick={this.warningHide}>
                cancel
                </MDBBtn>
                &nbsp; &nbsp; &nbsp;
              <MDBBtn color='warning' onClick={() =>this.onDelete(this.props.match.params.id)} className='mx-auto'>
                OK
              </MDBBtn>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>



       
      <MDBModal staticBackdrop show={this.state.basicModal} tabIndex='-1'>
            <MDBModalDialog size='xl'>
                <MDBModalContent >
                <MDBModalHeader>
                    <MDBModalTitle className='mx-auto'>Member Removed successfuly ! &nbsp; &nbsp;
                    <MDBBtn color='warning' onClick={this.toggleShow} className='mx-auto' href='/non_academic'> OK
                    </MDBBtn>
                    </MDBModalTitle>
                </MDBModalHeader>
                </MDBModalContent>
            </MDBModalDialog>
            </MDBModal>
            </>
         );
    }
}
 
export default NonPostDetails;