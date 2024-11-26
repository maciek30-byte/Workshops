
export function tournamentWinner(competitions: string[][], results: number[]) {
  let hash: Record<string, number> = {};
    
  for (let i = 0; i < competitions.length; i++) {
      if (results[i] === 0) {
        if (hash[competitions[i][1]]) {
          hash[competitions[i][1]] = hash[competitions[i][1]] + 3;
        } else {
          hash[competitions[i][1]] = 3;
        }
      } else {
        if (hash[competitions[i][0]]) {
          hash[competitions[i][0]] = hash[competitions[i][0]] + 3;
        } else {
          hash[competitions[i][0]] = 3;
        }
      }
    }
  
    const winner = Object.keys(hash).reduce((acc, item) =>
      hash[acc] > hash[item] ? acc : item
    );
    return winner;
  }
  
  //@TODO type it properly//
  /* 
  Czego sie nauczyles : 
  1.) Tworzenie hash mapy ze zlozonej struktury, wykorzystywanie hash mapy jako struktury danych do grupowania danych
  2.) Metoda ktora sprawdza najwyzsza wartosc w obiekcie z reducem
  3.) Te tablice maja taka sama dlugosc co znacznie upraszcza sprawe
  */