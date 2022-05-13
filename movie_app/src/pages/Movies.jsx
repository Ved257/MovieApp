import React from "react";
import Row from "../components/Row/Row";
import requests from "../axios/requests";
import Navbar from "../components/Navbar/Navbar";

const Movies = () => {
  return (
    <div className="Movies" style={{backgroundColor:"black"}}>
      <Navbar />
      <div className="container">
        <div className="row">
          <Row title="Action" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
