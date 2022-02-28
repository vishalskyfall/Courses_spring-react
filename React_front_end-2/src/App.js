import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home.js";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import ViewUser from "./components/users/ViewUser";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound />}/>
          <Route path="/users/adduser" element={<AddUser />}/> 
          <Route path="/users/edituser/:id" element={<EditUser />}/> 
          <Route path="/users/:id" element={<ViewUser/>}/>
         </Routes>
      </div>
    </Router>
  );
}

export default App;
