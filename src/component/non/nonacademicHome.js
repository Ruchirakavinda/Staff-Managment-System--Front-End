import React, { Component } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer,MDBBtn,MDBIcon,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
 } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import man from '../../img/man2.jpg';

class NonAcademicHome extends Component {
  constructor(props){
    super(props);

    this.state = {

      id2:'',

      warningModal:false,

      basicModal:false,

      posts:[]
    };
  }

  

componentDidMount(){
  this.retrivePost();
}

retrivePost(){
  axios.get('/nonposts').then (res =>{
    if (res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts);
    }
  });
}


warningShow = (id) => {

  this.setState({
    warningModal:true,
    id2:id
    
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


filterData(posts,searchKey){

  const result = posts.filter((e) =>
  e.name.toLowerCase().includes(searchKey) ||
  e.about.toLowerCase().includes(searchKey) ||
  e.job.toLowerCase().includes(searchKey) ||
  e.department.toLowerCase().includes(searchKey) 
  
  );

  this.setState({posts:result})
}



handleSearch = (e) =>{
  const searchKey = e.currentTarget.value

  axios.get('/nonposts').then (res =>{
    if (res.data.success){
    
      this.filterData(res.data.existingPosts,searchKey)
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

  render() { 
    return ( 
<div >

      <MDBContainer fluid style={{padding:'0px'}}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage:  `url(${man})`, height: 350 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Non-Academic Staff</h1>
              <h4 className='mb-3'>Management System</h4>
              <p>Et ullamco in veniam dolore ipsum anim.Ad incididunt occaecat amet <br/> occaecat quis dolor excepteur aliqua amet.</p>
              <Link to="/non_academic_add" className='btn btn-outline-light btn-lg' href='#!' role='button'>
              <MDBIcon fas icon="user-plus" size='lg' />&nbsp; &nbsp;
                Add New Member
              </Link>
             
            </div>
          </div>
        </div>
      </div>



      <MDBContainer style={{backgroundColor:'rgba(255,255,255,0.7)',marginTop:'50px'}}>
        <br/>
        <div className="d-flex justify-content-between">
        <MDBBtn onClick={() => window.location.reload(false)} color='light'> <MDBIcon fas icon="sync-alt" size='lg' /></MDBBtn>
        <form className='d-flex input-group ' style={{width:"500px"}} >
              <input type='search' className='form-control' placeholder='Search member' aria-label='Search' onChange={this.handleSearch} />
              <MDBBtn color='dark' >reset</MDBBtn>
        </form>
        </div>
        
        <br/>
      <MDBTable hover>
          <MDBTableHead dark>
            <tr>
              <th scope='col' className='text-center'>Index</th>
              <th scope='col' className='text-center'>Full Name</th>
              <th scope='col' className='text-center' >About</th>
              <th scope='col' className='text-center'>Job Role</th>
              <th scope='col' className='text-center'>Department</th>
              <th scope='col' className='text-center'>Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            
              {this.state.posts.map((posts,index) =>(
                
                
                <tr>
                   
                  <th className='text-center' scope='row'>{index+1}</th>
                  <Link to ={`/non_academic_member/${posts._id}`}>
                      <th  style={{color:"rgb(170, 125, 0)",paddingTop:"17px"}}>{posts.name}</th> 
                  </Link>
                  <td className='text-center' style={{width:"25%"}}><b>{posts.about}</b></td> 
                  <td className='text-center'><b>{posts.job}</b></td>
                  <td className='text-center'><b>{posts.department}</b></td>
                  <td className='text-center' style={{width:"25%"}}> 
                  <MDBBtn color="warning" href={`/non_academic_edit/${posts._id}`}>
                    <MDBIcon icon='feather-alt' size='lg' /> &nbsp;Edit
                    </MDBBtn>
                    &nbsp; &nbsp; &nbsp;
                    <MDBBtn color="danger"  onClick={()=>this.warningShow(posts._id)}>
                    <MDBIcon icon='trash' size='lg'/> &nbsp;Remove
                    </MDBBtn>
                  </td>
                 
               </tr>
               

              ))}

          </MDBTableBody>
        </MDBTable>
        <br/><br/><br/>
      </MDBContainer>
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
              <MDBBtn color='warning' onClick={() =>this.onDelete(this.state.id2)} className='mx-auto'>
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
    </div>
     );
  }
}
 
export default NonAcademicHome;