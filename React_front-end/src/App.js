
import "./App.css";
import Home from "./Components/Home";
import AllCourses from "./Components/AllCourses";
import AddCourse from "./Components/AddCourse";
import EditCourse from "./Components/EditCourse";
import Header from "./Components/Header";
import { Container, Row, Col } from "reactstrap";
import Menu from "./Components/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
           <Routes>
           <Route path="/" element={<Home/>} exact  />
            <Route path="/add-course" element={<AddCourse />} exact  />
            <Route path="/view-courses" element={<AllCourses />} exact  />
            <Route path="/update-courses/:id" element={<EditCourse />} exact  />
           </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
