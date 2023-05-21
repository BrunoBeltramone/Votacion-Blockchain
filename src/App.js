import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";

function App() {
  
  return (
    <div className="h-screen flex flex-col">
      <Routes>
        <Route path="/"  element={<Landing />}/> 
        <Route path="/Home"  element={<Home />}/> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
