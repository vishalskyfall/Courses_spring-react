import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

function Menu() {
  return (
    <div>
      <ListGroup flush>
        <Link className="list-group-item list-group-item-action" action to="/" tag="a">
          Home
        </Link>
        <Link className="list-group-item list-group-item-action" to="/add-course" tag="a">
          Add Course
        </Link>
        <Link className="list-group-item list-group-item-action" to="/view-courses" tag="a">
         View Courses
        </Link>
        <Link className="list-group-item list-group-item-action" to="#" tag="a">
          About Us
        </Link>
        <Link className="list-group-item list-group-item-action" to="#" tag="a">
          Contact Us
        </Link>
      </ListGroup>
    </div>
  );
}

export default Menu;
