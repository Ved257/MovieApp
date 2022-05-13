import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Row from "../components/Row/Row";
import requests from "../axios/requests";
import "./TV_Shows.css";
import Footer from "../components/Footer/Footer";

const TV_Shows = () => {
  return (
    <div className="TV" style={{ backgroundColor: "black" }}>
      <Navbar />
      <div className="container">
        <div className="row">
          <Row
            title="Top Rated"
            fetchUrl={requests.fetchTopRatedTV}
            isLargeRow={true}
          />
          <Row
            title="Trending Now"
            fetchUrl={requests.fetchTrendingTV}
            isLargeRow={true}
          />
          <Row
            title="Airing Today"
            fetchUrl={requests.fetchAiringTodayTV}
            isLargeRow={true}
          />
          <Row
            title="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginalsTV}
            isLargeRow={true}
          />
          <Row
            title="Popular"
            fetchUrl={requests.fetchPopularTV}
            isLargeRow={true}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TV_Shows;
