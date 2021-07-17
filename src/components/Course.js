import React from "react";
import {
     Card,
     CardBody,
     CardTitle,
     CardSubtitle,
     CardText,
     CardFooter,
     Button,
     Container
}
     from "reactstrap";

const Course = ({ course }) => {
     return (
          <Card className="text-center">
               <CardBody>
                    <CardSubtitle className="front-weight-bold">
                         {course.tittle}
                         
                    </CardSubtitle>

                    <CardText>

                         {course.description}
                         
                    </CardText>

                    <Container className="text-center">
                         <Button color="danger">Delete</Button>
                         <Button color="warning ml-3">Update</Button>
                    </Container>

               </CardBody>
          </Card>
     );

};
export default Course;