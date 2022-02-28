import React,{useEffect} from "react";

import {Container} from 'reactstrap';

function Home() {
  useEffect(()=>{
    document.title="Home || Learn React and SpringBoot API";
      },[]) 
  return <div className="text-center">
    <h3> Home || Learn Springboot API with React Front-End</h3>
      <Container>
     <p>Just a demo desc. nothing else . . showing routers  . .</p>
      </Container>
  </div>;
}

export default Home;
