import './App.css';
import Pokemon from './pokemon';
import { isBottomWin,isTopWin } from "./win-lose";


function App() {
  return (
    <div className="App">
      <h1 className={isTopWin} >Player {isTopWin}</h1>
      <Pokemon />
      <h1 className={isBottomWin} >Player {isBottomWin}</h1>
    </div>
  );
}

export default App;
