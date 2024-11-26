import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { GameContextProvider } from './app/context/GameContext';
import { App } from './app/app';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </StrictMode>
);
