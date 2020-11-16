import React, { Fragment } from "react";
// components
import Slider from "../../components/slider/Slider";
import Services from "../../components/services/Services";
import News from "../../components/news/News";
import Awards from "../../components/Awards&memberships/Awards";


const Home = () => {
  return (
    <Fragment>
        <Slider />
        <Services />
        <News />
        <Awards />
    </Fragment>
  );
};

export default Home;
