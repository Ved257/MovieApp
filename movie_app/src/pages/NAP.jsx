import React from "react";
import "./NAP.css";
import Navbar from "../components/Navbar/Navbar";
import Row from "../components/Row/Row";
import requests from "../axios/requests";
import Footer from "../components/Footer/Footer";

const NAP = () => {
  return (
    <div className="NAP" style={{ backgroundColor: "black" }}>
      <Navbar />
      <div className="container">
        <div className="row">
          <Row
            title="Popular Movies"
            fetchUrl={requests.fetchPopularMovie}
            isLargeRow={true}
          />
          <Row
            title="Popular TV"
            fetchUrl={requests.fetchPopularTV}
            isLargeRow={true}
          />
          <Row
            title="Trending"
            fetchUrl={requests.fetchTrending}
            isLargeRow={true}
          />
          <Row
            title="Trending TV"
            fetchUrl={requests.fetchTrendingTV}
            isLargeRow={true}
          />
          <Row
            title="Trending Movies"
            fetchUrl={requests.fetchTrendingMovies}
            isLargeRow={true}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NAP;
