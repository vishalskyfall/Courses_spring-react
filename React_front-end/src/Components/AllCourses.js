import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

function AllCourses() {
  useEffect(() => {
    document.title = "Courses . .";
  }, []);

  //function to call server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        //for success :
        //console.log(response);
        toast.success("Courses has been loaded",{
          position: "bottom-center" , 
        });
        setCourses(response.data); 
      },
      (error) => {
        console.log(error);
         toast.error("Something went wrong",{
          position: "bottom-center" , 
        });
      
      }
    );
  };
  //calling loading course function
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([
   // { title: "Java", discription: "Demo hai bro. . " },
    //{ title: "React", discription: "Demo2 hai bro. . " },
  ]);

const updateCourses=(id)=>{
setCourses(courses.filter((c)=>c.id!==id));
}

  return (
    <div>
   
      <h1>All Courses</h1>
      <p>List Of Courses here . . .</p>
      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />)
        : "No Courses Available!"}
    </div>
  );
}

export default AllCourses;
