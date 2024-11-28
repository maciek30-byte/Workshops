import { useEffect } from 'react';
import styles from "./allStyles.module.css"
import { TileField } from './Tile';
import { useState } from 'react';

const TILE_COLORS = ['red', 'green', 'blue', 'yellow'];

function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
  
      // Swap the elements at i and randomIndex
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    console.log("this is return value", array)
    return array;
  }

export const MainGame = () => {
    const [tilesColumns, setTilesColumns] = useState<string[]>(shuffle(TILE_COLORS))
    const state = [...TILE_COLORS, ...TILE_COLORS]

    const createHash = ()=>{
        tilesColumns.forEach((tile, index)=>{
            tile[index] = index[tile]

        })
    }

   
  return (
    <>
      <h1>Hello i am meomory game </h1>
      <div className={styles.board}>

      
      </div>
      
    </>
  );
}
