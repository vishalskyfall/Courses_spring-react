import axios from "axios";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import base_url from "../api/bootapi";

function Course({ course, update }) {
  const history = useNavigate();
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("deleted . . !");
        update(id);
      },
      (error) => {
        toast.warning("something went wrong !");
        console.log(error);
      }
    );
  };




  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold">
          <b>{course.title}</b>
        </CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button
            color="danger"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            Delete
          </Button>
          <Button color="warning ml-3">
            <Link to={`/update-courses/${course.id}`}>Update</Link></Button>

        </Container>
      </CardBody>
    </Card>
  );
}

export default Course;
