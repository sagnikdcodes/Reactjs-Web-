import React from "react";
import { Card, CardBody } from "reactstrap";


function Header({ name, tittle }) {
     return (
          <div>

               <Card className="my-1 bg-warning">
                    <CardBody>
                         <h1 className="text-center my-5"> Welcome to courses Application</h1>
                    </CardBody>


               </Card>
          </div>

     );

}
export default Header;