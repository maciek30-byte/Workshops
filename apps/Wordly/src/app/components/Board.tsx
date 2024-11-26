import { useEffect } from 'react';
import { useGameContext } from '../context/GameContext';
import { useFetchWords } from '../useFetchWords';
import styles from './components.module.css';
import { Line } from './Line';

export const Board = () => {
  const { winWord, isLoading, error } = useFetchWords();
  const {grid, setWinWord} = useGameContext()

  useEffect(()=>{
    if(winWord){
      console.log("win word", winWord)
      setWinWord(winWord.split(""))
    }
  }, [winWord])

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!winWord) return null;



  return (
    <div className={styles.board}>
      {grid.map((column, index) => (
        <Line key={index} currentLine={index +1}  />
      ))}
    </div>
  );
};
