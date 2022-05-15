import React from "react";
import "./Home.css";
import Row from "../components/Row/Row";
import requests from "../axios/requests";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useSearchParams, useParams } from "react-router-dom";

const Search = () => {
  // const query = this.props.match.params.query;
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  let { query } = useParams();

  return (
    <div className="Home">
      <Navbar />
      <div className="container">
        <div className="row">
          <Row
            title={"Search Results for : " + query.toUpperCase()}
            fetchUrl={requests.fetchSearchResult + query}
            isLargeRow={true}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
