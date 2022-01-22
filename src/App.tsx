import React from 'react';
import './App.scss';
import { DashBoardRoutes } from './routers/DashBoardRoutes';
import { FoodProvider } from './context/FoodContext';

function App() {
  return (
    <div className="app__container">
      <FoodProvider>
        <DashBoardRoutes />
      </FoodProvider>
    </div>
  );
}

export default App;
