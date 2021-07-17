import React from "react";
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row,Col } from 'reactstrap';
import {ToastContainer, toast} from "react-toastify";

import Home from "./components/Home";
import Course from "./components/Course";
import AddCourse from "./components/AddCourse";
import AllCourses from "./components/Allcourse";

import Header from "./components/Header";
import Menus from "./components/Menus";
import{BrowserRouter as Router,Route,Link} from "react-router-dom";






function App() {
     
   const  btnHandle= () => {
     toast.success("done", {
       position: "top-center"
      });
   };

  return ( <div>
       <Router>
       <ToastContainer/>
       <Container>

         <Header> </Header>
         <Row>
           <Col md={4}> 
           <h2>This is menu side</h2>
           
           <Menus/>


           </Col>

           <Col md={8}>

           
           
           <Route path="/" component={Home}  exact/>
           <Route path="/add-course" component={AddCourse}  exact/>
           <Route path="/view-courses" component={AllCourses}  exact/>
          
         


           
           
           </Col>

         </Row>
       </Container>
       </Router>

        
  </div> 
  );
};

export default App;










 

