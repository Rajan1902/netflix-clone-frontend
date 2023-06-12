import React from 'react';
import './Home.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import banner from './banner1.jpg'  ;

const apikey = "e2c4096569f58a7d72ba5ff858ef0eda";

const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";
const Card = ({img})=>(
  <img src={img} alt="Dark" className='card'/>
  )
const Row = ({
  title,
   arr =[
   ], 
})=>(
  
  <div className='row'>
  <h2>{title}</h2>
  <div>
      {arr.map((item, index) =>(
          <Card key = {index} img={`${imgUrl}/${item.poster_path}`}></Card>
      ))}
  </div>
  </div>
);
const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  
  
  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
          data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
      setUpcomingMovies(results);

  };
    const fetchNowPlaying = async () => {
      const {
          data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`);
      setNowPlayingMovies(results);

  };
    const fetchPopular = async () => {
      const {
          data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apikey}`);
      setPopularMovies(results);

  };
    const fetchTopRated = async () => {
      const {
          data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`);
      setTopRatedMovies(results);

  };
    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated(); 
    }, []);
    
  return (
    <section className='home'>

    <div className='container'>
      <div class = 'bannerTitle'>
    <h1 >Stranger Things</h1> 
    <p>The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy but secretly experiments with the paranormal and supernatural, sometimes with human test subjects.</p>
    <div className="bannerButtons">
      <button class = 'btn' type="submit">Play</button>
      <button class = 'btn'type="submit">My List</button>
    </div>
    </div>
       <img class ='banner'src= {banner} alt="banner"/>
     </div>
    <Row title={'Now Playing'} arr = {nowPlayingMovies}/>
    <Row title={'Popular Movies'} arr = {popularMovies}/>
    <Row title={'Top Rated Movies'} arr = {topRatedMovies}/>
    <Row title={'Upcoming Movies'} arr = {upcomingMovies}/>

    </section>
  );
}

export default Home