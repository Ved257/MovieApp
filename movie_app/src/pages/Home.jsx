import React from "react";
import "./Home.css";
import Row from "../components/Row/Row";
import requests from "../axios/requests";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="container">
        <div className="row">
          <Row
            title="Trending now"
            fetchUrl={requests.fetchTrending}
            isLargeRow={true}
          />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={true} />
          <Row title="Action" fetchUrl={requests.fetchActionMovies} isLargeRow={true}/>
          <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} isLargeRow={true}/>
          <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} isLargeRow={true}/>
          <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} isLargeRow={true} />
          <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} isLargeRow={true}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
