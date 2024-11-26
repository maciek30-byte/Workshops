import { ChangeEvent } from 'react';
import styles from './components.module.css';
import { FC } from 'react';
import { useGameContext } from '../context/GameContext';


export const Tile:FC<{isDisabled: boolean, tileIndex: number}> = ({isDisabled, tileIndex}) => {
  const{setGrid, grid, currentRound, collorMatrix } = useGameContext()
  const tileColor = collorMatrix[currentRound-1][tileIndex]

 
  
  const onHandleInputChange = (e: ChangeEvent<HTMLInputElement>)=>{
    const allignedRoundValue = currentRound - 1
    const newArr = [...grid]
    newArr[allignedRoundValue][tileIndex] = e.target.value.toUpperCase()

    setGrid(newArr)
}
  return (
    <div className={styles.tile}>
      <input type="text" maxLength={1} className={`${styles.input} ${tileColor ?styles[tileColor]: null}`} onChange={onHandleInputChange} disabled={isDisabled} />
    </div>
  );
};
