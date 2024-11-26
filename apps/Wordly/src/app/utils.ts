import { GuessResult } from "./context/GameContext";

export const getClassForTile = (result: GuessResult) => {
  if (result === 'correct') return 'correct';
  if (result === 'wrong place') return 'close';
  return 'incorrect';
};
