import React from "react";
import { Jumbotron, Container,Button } from "reactstrap";


const Home=()=>{
     return(
          <div>
          <Jumbotron className="text-center bg-normal">

 <h1> Learncode with Sagnik </h1>  
      <p>
           This is develop by the harry for learning purpose backend is on spring boot and frontend on react Js
      </p>
      <Container>
           <Button color ="primary" outline>
                Start Using
           </Button>
      </Container>
          </Jumbotron>

          </div>

     )
};

export default Home;