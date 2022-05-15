import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import "./Row.css";
// import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "../../axios/axios";
import ReactPlayer from "react-player";
import Box from "@mui/material/Box";

// import Details from "../Details/Details";
// import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
// import NavigateNextIcon from "@material-ui/icons/NavigateNext";
// import Details from "../Details/Details";
import PlayArrow from "@material-ui/icons/PlayArrow";
// import FeatherIcons from "feather-icons-react";
import Close from "@material-ui/icons/Close";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => setOpen(false);

  const handleClose = () => setShow(false);

  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handlePlayClick = async (event) => {
    event.preventDefault();
    const t = await movieTrailer(movieTitle);
    console.log(t);
    setOpen(true);
    setTrailerUrl(t);
  };
  // const MovieTrailer = async (movie) => {
  //   if (movie) {
  //     const trailerUrl = await movieTrailer(movie.title);
  //     const trailerUrlParams = new URLSearchParams(
  //       trailerUrl.split("?")[1]
  //     );
  //     const trailerUrlId = trailerUrlParams.get("v");
  //     setShow(true);
  //     setImage(movie.backdrop_path);
  //     setMovieTitle(movie.title);
  //     setDescription(movie.overview);
  //     setTrailerUrl(trailerUrlId);
  //   }
  // };

  return (
    <div>
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map((movie) => (
          //On click, a modal will appear with the movie's details
          <img
            key={movie.id}
            // onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={async () => {
              await setShow(true);
              await setImage(movie.backdrop_path);
              await setDescription(movie.overview);
              await setMovieTitle(
                movie.title || movie.name || movie.original_name
              );
            }}
          />
        ))}
      </div>
      <div
        className="desc"
        style={{
          display: show ? "block" : "none",
        }}
      >
        <div className="desc__box">
          <div className="desc__close" onClick={handleClose}>
            <Close />
          </div>
          <div className="desc__content">
            <Modal
              open={open}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <ReactPlayer url={trailerUrl} controls={true} />
              </Box>
            </Modal>
            <div className="desc__heading">
              <h1>{movieTitle}</h1>
              {/* <h5>
                <span className="desc__rating">7.5/10</span>
              </h5> */}
              <p className="desc__description">{description}</p>
              <div className="desc__buttons">
                {/* <button className="play_button">
                  <span className="button_text">
                    <PlayArrow />
                    &nbsp; Play
                  </span>
                </button> */}
                <button
                  className="play_button"
                  id={movieTitle}
                  onClick={handlePlayClick}
                >
                  <span className="button__text">
                    <PlayArrow />
                    &nbsp; Play
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="desc__img"
            style={{
              backgroundImage: `url(${base_url}${image})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Row;
