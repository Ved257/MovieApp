import React from "react";
import Row from "../components/Row/Row";
import requests from "../axios/requests";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Movies = () => {
  return (
    <div className="Movies" style={{backgroundColor:"black"}}>
      <Navbar />
      <div className="container">
        <div className="row">
          <Row title="Action" fetchUrl={requests.fetchActionMovies} isLargeRow={true} />
          <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} isLargeRow={true} />
          <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} isLargeRow={true} />
          <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} isLargeRow={true} />
          <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} isLargeRow={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
