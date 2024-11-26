import * as React from 'react';

interface GameContextType {
  currentRound: number;
  grid: GridItem[][];
  setGrid: React.Dispatch<React.SetStateAction<GridItem[][]>>;
  setWinWord: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  compareInputWithWinWord: () => void;
  collorMatrix: ColorType[][];
  setCurrentRound: React.Dispatch<React.SetStateAction<number>>;
}

type GridItem = string | undefined;
type ColorType = 'correct' | 'close' | 'incorrect' | undefined;

const gridArray = [
  [undefined, undefined, undefined, undefined, undefined],
  [undefined, undefined, undefined, undefined, undefined],
  [undefined, undefined, undefined, undefined, undefined],
  [undefined, undefined, undefined, undefined, undefined],
  [undefined, undefined, undefined, undefined, undefined],
  [undefined, undefined, undefined, undefined, undefined],
] satisfies GridItem[][];

const GameContext = React.createContext<GameContextType | null>(null);

export const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentRound, setCurrentRound] = React.useState(1);
  const [grid, setGrid] = React.useState<GridItem[][]>(gridArray);
  const [winWord, setWinWord] = React.useState<undefined | string[]>(undefined);
  const [collorMatrix, setColorMatrix] = React.useState<ColorType[][]>(
    Array.from({ length: 6 }, () => Array(5).fill(undefined))
  );
  const [isPlayerWin, setIsPlayerWin] = React.useState(false);

  const compareInputWithWinWord = () => {
    const currentRoundAlligment = currentRound - 1;
    let correctLetterCount = 0;

    if (winWord === undefined) {
      throw new Error('Data is not loaded');
    }

    const currentArray = grid[currentRoundAlligment];
    const coppyCollorMatrix = [...collorMatrix];

    winWord.forEach((letter, index) => {
      console.log('letter correct counter', correctLetterCount);

      if (letter === currentArray[index]) {
        coppyCollorMatrix[currentRoundAlligment][index] = 'correct';
        correctLetterCount++;
      } else if (currentArray.includes(letter)) {
        coppyCollorMatrix[currentRoundAlligment][index] = 'close';
      } else {
        coppyCollorMatrix[currentRoundAlligment][index] = 'incorrect';
      }
    });

    setColorMatrix(coppyCollorMatrix);
    if (correctLetterCount === 5) {
      console.log('wchodzi tutaj');
      setIsPlayerWin(true);
      return;
    }
  };

  return (
    <GameContext.Provider
      value={{
        currentRound,
        grid,
        setGrid,
        setWinWord,
        compareInputWithWinWord,
        collorMatrix,
        setCurrentRound,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const gameContext = React.useContext(GameContext);

  if (!gameContext) {
    throw new Error('useGameContext must be used within a GameContextProvider');
  }

  return gameContext;
};
