import React, { Component } from 'react';
import axios from 'axios';
import {
    MDBValidation,
    MDBInput,
    MDBBtn,
    MDBContainer,  
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBCardTitle
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import staff from '../img/staff.jpg';

class EditPost extends Component {

    constructor(props){
        super(props);

        this.state = {

            basicModal:false,

            name : "",
            about:"",
            job:"",
            university:""


        }
    }

    toggleShow = () => {
        this.setState({
            basicModal:false,
        })
    }

    inputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value

        })
    }

    onSubmit = (e) =>{
        
        e.preventDefault();

        const id = this.props.match.params.id;

        const {name,about,job,university}= this.state;
        const val1 = document.form02.name.value;
        const val2 = document.form02.about.value;
        const val3 = document.form02.job.value;
        const val4 = document.form02.university.value;

        if(val1!=="" && val2!=="" && val3!=="" && val4!==""){
            const data = {
                name:name,
                about:about,
                job:job,
                university:university,
            }
            console.log(data);



            axios.put(`/post/update/${id}`,data).then((res) =>{
                if(res.data.success){
                    this.setState(
                        {
                            basicModal:true,

                            name : "",
                            about:"",
                            job:"",
                            university:"",
                        }
                    )

                }
            })


        }
        
    }
   
    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/member/${id}`).then((res) =>{
            if(res.data.success){

                this.setState({
                    name:res.data.post.name,
                    about:res.data.post.about,
                    job:res.data.post.job,
                    university:res.data.post.university
                });

                console.log(this.state.post);
            }
        });
    }

    render() { 
        return ( 
            <>
            <header>
            <div
              className='p-5 text-center bg-image'
              style={{ backgroundImage:` url(${staff})`, height: 200 }}
            >
              <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                  <div className='text-white'>
                    <h1 className='mb-3'>Update Staff Memeber</h1>
                    <h4 className='mb-3'>Academic Staff</h4>
                    <Link to="/academic" className='btn btn-outline-light btn-lg' href='#!' role='button'>
                      All Members
                    </Link>
                  
                  </div>
                </div>
              </div>
            </div>
               </header>
            <MDBContainer style={{paddingBottom:'100px'}}>
              <MDBValidation name="form02" className='row g-3 mx-auto' noValidate style={{ maxWidth: '80%', marginTop:"2%" ,textAlign:'center'}}>
              <MDBCardTitle className="mx-auto">Edit Memeber Details</MDBCardTitle>
                <div className='col-7 mx-auto'>
                    <MDBInput
                    name='name'
                    id='validationCustom01'
                    required
                    label='Full Name'
                    validation='Please provide a post topic.'
                    invalid
                    value={this.state.name}
                    onChange={this.inputChange}
                    />
                </div>
                
                <div className='col-7 mx-auto'>
                    <MDBInput
                    textarea rows={4} 
                    name='about'
                    id='validationCustom02'
                    required
                    label='About'
                    validation='Please provide a post description.'
                    invalid
                    value={this.state.about}
                    onChange={this.inputChange}
                    />
                </div>
                <div className='col-7 mx-auto'>
                    <MDBInput
                    name='job'
                    id='validationCustom03'
                    required
                    label='Job Role'
                    validation='Please provide a post category.'
                    invalid
                    value={this.state.job}
                    onChange={this.inputChange}
                    />
                </div>
                <div className='col-7 mx-auto'>
                    <MDBInput
                    name='university'
                    id='validationCustom03'
                    required
                    label='University'
                    validation='Please provide a post category.'
                    invalid
                    value={this.state.university}
                    onChange={this.inputChange}
                    />
                </div>
                
                <div className='col-7 mx-auto'>
                    <MDBBtn type='submit' color="dark" onClick={this.onSubmit}>Update</MDBBtn>
                </div>
              </MDBValidation>

            </MDBContainer>

           
            <MDBModal staticBackdrop show={this.state.basicModal} tabIndex='-1'>
            <MDBModalDialog size='xl'>
                <MDBModalContent >
                <MDBModalHeader>
                    <MDBModalTitle className='mx-auto'>Member details updated successfuly ! &nbsp; &nbsp;
                    <MDBBtn color='warning' onClick={this.toggleShow} className='mx-auto' href='/academic'> OK
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
 
export default EditPost;

