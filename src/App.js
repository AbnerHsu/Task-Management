import React from 'react';
import './App.css';
import { tasks } from './tasks';
import Task from './component/Task/Task';

const App = () => {
  const taskObjs = tasks.map((task) => {
    return <Task taskName={task.name} />;
  });
  return (
    <div className="App">
      { taskObjs }
    </div>
  );
}

export default App;
