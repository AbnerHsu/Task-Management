import React from 'react';
import './App.css';
import { tasks } from './tasks';
import Stage from './component/Stage/Stage'

const App = () => {
  return (
    <div className="App">
      <Stage tasks={tasks} />
    </div>
  );
}

export default App;
