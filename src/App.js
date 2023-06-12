
import './App.scss';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TvShows from './Components/TvShows/TvShows';
import RecentlyAdded from './Components/Recently Added/RecentlyAdded';
import Movies from './Components/Movies/Movies';
import MyList from './Components/My List/MyList';
function App() {
  return (

      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/tvshows' element = {<TvShows/>}></Route>
          <Route path='/movies' element = {<Movies/>}></Route>
          <Route path='/recently_added' element = {<RecentlyAdded/>}></Route>
          <Route path='/mylist'element = {<MyList/>}></Route>
          
        </Routes>
      </Router>

  );
}

export default App;
