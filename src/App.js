import { MDBContainer } from 'mdb-react-ui-kit';
import React, { Component } from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import CreatPost from './component/createPost';
import EditPost from './component/editPost';
import Home from './component/home';
import NavBar from './component/navbar';
import PostDetails from './component/postDetails';
import './App.css';
import AcademicHome from './component/academicHome';
import NonAcademicHome from './component/non/nonacademicHome';
import NonCreatPost from './component/non/noncreatePost';
import NonEditPost from './component/non/noneditPost';
import NonPostDetails from './component/non/nonpostDetails';

class App extends Component {
  state = {  }
  render() { 
    return (
      <div className='app'>
      <BrowserRouter>

      <MDBContainer fluid style={{padding:'0px'}}>

        <NavBar/>

        <Switch>

        <Route path ="/" exact component={Home}></Route>

        <Route path ="/academic" component={AcademicHome}></Route>

        <Route path ="/add" component={CreatPost}></Route>

        <Route path ="/edit/:id" component={EditPost}></Route>

        <Route path ="/academic_member/:id" component={PostDetails}></Route>

        <Route path ="/non_academic" component={NonAcademicHome}></Route>

        <Route path ="/non_academic_add" component={NonCreatPost}></Route>

        <Route path ="/non_academic_edit/:id" component={NonEditPost}></Route>

        <Route path ="/non_academic_member/:id" component={NonPostDetails}></Route>


        <Redirect to="/"/>

        </Switch>

      </MDBContainer>

      </BrowserRouter>
      </div>
      );
  }
}
 
export default App;