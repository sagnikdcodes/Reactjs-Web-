
import React, { Button ,Container, Form, FormGroup, Input } from "reactstrap";


const AddCourse=()=>{

     return (<div>

          <h1 className="text-center my-3">Fill the Course Details</h1>
      <Form>
       <FormGroup>
            <label for="userId">Course Id</label>

            <Input type="text" placeholder="Enter here"
            name="User"
            id="userId"/> 
               
       </FormGroup>

       <FormGroup>
            <lable for="tittle">Course Tittle</lable>
            <Input type="text" placeholder="Enter Tittle Here" id=" tittle"  />
       </FormGroup>

       <FormGroup>
       <lable for="description">Course Description</lable>
       <Input type="textarea" 
       placeholder="Enter descriptionHere" 
       id="description"  
       style={{height:150}} 
       />

       </FormGroup>
       
       <Container className="text-center">
        <Button color="success" >Add Course</Button>
        <Button color="warning ml-4">clear</Button>
       </Container>

      </Form>
     </div>
     );
     
};

export default AddCourse;