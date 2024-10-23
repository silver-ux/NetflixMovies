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

  // function handleClick() {
  //   setIndex(index + 1);
  // }
  // function minusClick() {
  //   setIndex(index - 1);
  // }

  function increaseIndex() {
    /**
     * useStateのindexが5番目(最後のindex)だったら何も処理せず終了させる
     * **/
    if (index === movieList.length - 1) {
        return;
    }
    setIndex(index + 1);
}
function decreaseIndex() {
    /**
     * useStateのindexが0番目(最初ののindex)だったら何も処理せず終了させる
     * **/
    if (index === 0) {
        return;
    }
    setIndex(index - 1);
}
// function handleClick(i) {
//     setIndex(i);
// }

  let movie = movieList[index];

  return (
    <div className='container'>
      <header>
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} details
          </button>
        <div className="btns">
          <button onClick={decreaseIndex}>Back</button>
          <button onClick={increaseIndex} style={{marginLeft:10}}>Next</button>
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
