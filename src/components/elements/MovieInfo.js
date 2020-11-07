import React from 'react';


import NoImage from '../images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

import MovieThumb from './MovieThumb';

import { StyledMovieInfo } from '../styles/StyledMovieInfo';
import '../styles/styles.css'; 



const setVoteClass = (vote) => {
      if  (vote >= 8 ) {
        return "green";
      } else if ( vote >= 6 ) {
        return "orange";
      } else {
        return "red";
      }
};

const MovieInfo = ({ movie }) => (
  <StyledMovieInfo backdrop={movie.backdrop_path}>
    <div className="movieinfo-content">
      <div className="movieinfo-thumb">
        <MovieThumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="moviethumb"
        />
      </div>
      <div className="movieinfo-text">
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>
        
        <div className="rating-director">
          <div>
            <h3>IMDB Rating</h3>
            <div className={
              `tag ${setVoteClass(movie.vote_average)}`
              }>
                {movie.vote_average}</div>
          </div>
          <div className="director">
            <h3>Director{movie.directors.length > 1 ? 'S' : ''}</h3>
            {movie.directors.map(element => (
              <p key={element.credit_id}>{element.name}</p>
            ))}
          </div>
          <div className="release-date">
            <h3>Release Date:</h3>
             <p>{(movie.release_date)}</p> 
          </div>
          <div className="genres"> 
            <h3>Genre:</h3>
            <p>{movie.genres.map( element => (element.name))}</p>
          
                
          </div>
        </div>
      </div>
    </div>
  </StyledMovieInfo>
);


export default MovieInfo;
