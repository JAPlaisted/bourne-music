import React, { Component } from "react";
import Nav from "../Components/Nav";
import HomeContent from "../Components/HomeContent";
import Music from "../Components/Music";
import Merch from "../Components/Merch";
import BkGrnd from "../Components/BkGrnd";
import Socials from "../Components/Socials";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <BkGrnd/>       
        <div className="content overlay">
        <Nav/>
        <HomeContent/>
        <Music/>
        <Merch/>
        <Socials/>
        <Contact/>
        <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;
