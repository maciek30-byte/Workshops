const highestTaxValues = {
    taxPL: 0.23, // -> "23%"
    taxDE: 0.19, // -> "19%"
    taxFR: 0.2,
    taxUK: 0.2,
  };


  const roundTo = (precision: number) => (value: number) =>Math.round(value * 10 ** precision) / 10 ** precision;
  
  const roundTo2 = roundTo(2);
  
  const percentLabel = (value: number) => `${roundTo2(value * 100)}%`;
  
 const pipe =<TValue, TFunction extends Function> (...fns: Function[]) => (value: TValue) => fns.reduce((acc, fn) => fn(acc), value);

 const formatEntriesLabel = (entries: [string, number][]) => entries.map(([key, value]) => [key, percentLabel(value)]);
 

 const formatPipeStream = pipe(
    Object.entries,
    (entires: [string,number][])=> entires.map(([key, value])=> [key, percentLabel(value)]),
    Object.fromEntries
)

const result = formatPipeStream(highestTaxValues);
