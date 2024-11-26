import styles from './components.module.css';
import { Tile } from './Tile';
import { useGameContext } from '../context/GameContext';
import { FC } from 'react';

interface LineProps {
  currentLine: number
}

export const Line:FC<LineProps> = ({currentLine}) => {
  const {grid, currentRound} = useGameContext()
  return (

    <div className={styles.line}>
      {grid[0].map((row, index)=>{
        return <Tile key={index} isDisabled={currentLine !== currentRound} tileIndex={index}/>
      })}
    </div>
  );
};
