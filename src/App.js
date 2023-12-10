import './App.css';
import { getMovieList,searchMovie } from './api';
import React, { useEffect, useState }  from 'react';

const App = () =>{
  const img = process.env.REACT_APP_BASEIMGURL;
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setUpcomingMovies(result);
    });
  }, []);

  const UpcomingMovieList = () =>{
    return upcomingMovies.map((movie, i) =>{
      return(

         <div className="Movie-wrapper" key={i}>
            <div className="Movie-title">{movie.title}</div>
            <img className='Movie-image' src={`${img}/${movie.poster_path}`} alt=''/>
            <div className="Movie-date">realese: {movie.release_date}</div>
            <div className="Movie-rate">{movie.vote_average}</div>            
          </div>
      )
    })
  }



  const search = async(q) =>{
    if(q.length > 3){
      const query = await searchMovie(q)
      setUpcomingMovies(query.results)
    }
  }


  return (
    <div className="App">

      <header className="App-header">
        <h1>Movie Peler Mania</h1>
        <input
         placeholder='Cari Hentai Kesayangan......'  
         className='Movie-search'
         onChange={({ target }) => search(target.value)}
         />


        <div className="Movie-container">
        <UpcomingMovieList />
        </div>
      </header>
    </div>
  );
  }


export default App;
