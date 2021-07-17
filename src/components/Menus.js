import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus=()=>{
     return(
         <ListGroup>
              <ListGroupItem tag='a' href="/" action>
                   Home
              </ListGroupItem>

              <ListGroupItem tag='a' href="/add-course" action>
                   AddCourse
              </ListGroupItem>
             
              <ListGroupItem tag='a' href="/view-courses" action>
                   Allcourse
              </ListGroupItem>

              <ListGroupItem tag='a' href="#!" action>
                   About
              </ListGroupItem>

             
         
         </ListGroup>
     );
};
 export default Menus;