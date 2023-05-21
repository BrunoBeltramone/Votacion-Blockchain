import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";

function App() {
  
  return (
    <div className="h-screen flex flex-col">
      <Routes>
        <Route path="/Votacion-Blockchain/"  element={<Landing />}/> 
        <Route path="/Votacion-Blockchain/home"  element={<Home />}/> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
