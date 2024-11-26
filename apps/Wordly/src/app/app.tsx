// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Board } from "./components/Board";
import { useGameContext } from './context/GameContext';

const ProccedToNextRoundButton = ()=>{
  const{compareInputWithWinWord, setCurrentRound } = useGameContext()

  const onClickHandle =()=>{
    compareInputWithWinWord()
    setCurrentRound

  }
  return (
        <button onClick={compareInputWithWinWord}>
          Check my guesses
        </button>
  )
}

export function App() {
  return (
    <div className={styles.appContainer}>
      <h1>Wordly</h1>
      <Board />
      <ProccedToNextRoundButton />
    </div>
  );
}

export default App;
