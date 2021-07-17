
import React, { useState } from "react";
import Course  from "./Course";

   const Allcourse=()=>{    

     const [course,setCourses]=useState([
          {tittle:"Java Course", description:"this is demo course"},
          {tittle:"Django Course", description:"this is demo course"},
          {tittle:"ReactJs Course", description:"this is demo course"},
          {tittle:"Spring Course", description:"this is demo course"},
     ]);
      

     return (

          <div>
          

           <h1>All Course</h1> 
           <p>List of Courses are as follows</p>

           {
                course.length>0? 
                course.map((course)=>
                    <Course course={course}/>
                ): "No courses"
           }

          </div>
     );

 };
export default Allcourse;   

