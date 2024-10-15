import { useState } from 'react';
import './App.css';
// import { Counter } from './components/Counter';
import { movieList } from './components/Data';


function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  function handleClick() {
    setIndex(index + 1);
  }
  function minusClick() {
    setIndex(index - 1);
  }

  let movie = movieList[index];

  return (
    <div className='container'>
      <header>
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} details
          </button>
        <div className="btns">
          <button onClick={minusClick}>Back</button>
          <button onClick={handleClick} style={{marginLeft:10}}>Next</button>
        </div>
      </header>
        <h2>{movie.title}</h2>
        <p>The genre is {movie.genre}</p>
        <h3>({index + 1} / {movieList.length})</h3>
        <img src={movie.url} alt="" style={{width:"60%", borderRadius:20}}/>
        <div className='side'>
          {showMore && <p>{movie.description}</p>}
        </div>
    </div>
  )
    
}

export default App;
