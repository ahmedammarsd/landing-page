import {BrowserRouter} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Experiens from "./components/Experiens";
import Charts from "./components/Charts";
import Start from "./components/Start";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
 
  return (
    <div>
       <BrowserRouter>
      <div className="container lg:px-5 md:px-3 sm:px-2 mx-auto">
        <Navbar />
      </div>
      <Header/>
      <Services/>
      <Contact />
      <Experiens />
      <Charts />
      <Start />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
