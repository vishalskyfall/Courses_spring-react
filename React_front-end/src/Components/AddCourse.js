import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddCourse() {
  const history = useNavigate();
  useEffect(() => {
    document.title = "Add New Course here  . . . || Fill Detailes";
  }, []);

  const [course, setCourse] = useState({});
  //form handler function
  const handleForm = (e) => {
    postDataOnServer(course);
    e.preventDefault();
  };

  //fun to post data on server
  const postDataOnServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        history("/view-courses");
        toast.success("Course has been added", {
          position: "bottom-center",
        });
      },
      (error) => {
        toast.warning("No idea what happened?!", {
          position: "bottom-center",
        });
      }
    );
  };

  return (
    <div>
      <ToastContainer />
      <Fragment>
        <Form onSubmit={handleForm}>
          <FormGroup>
            <Label for="userId"> Course Id </Label>
            <Input
              type="text"
              placeholder="Enter Here"
              name="userId"
              id="userId"
              onChange={(e) => {
                setCourse({ ...course, id: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="title"> Course Title </Label>
            <Input
              type="text"
              placeholder="Enter Title Here"
              id="title"
              onChange={(e) => {
                setCourse({ ...course, title: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="discription"> Course Discription </Label>
            <Input
              type="textarea"
              placeholder="Enter Discription Here"
              id="discription"
              style={{ height: 200 }}
              onChange={(e) => {
                setCourse({ ...course, description: e.target.value });
              }}
            />
          </FormGroup>
          <Container className="text-center">
            <Button type="submit" color="success ml-2">
              Add Course
            </Button>

            <Button color="warning ml-2" type="reset">
              Clear
            </Button>
          </Container>
        </Form>
      </Fragment>
    </div>
  );
}

export default AddCourse;
