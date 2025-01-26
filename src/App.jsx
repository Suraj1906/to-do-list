import React from 'react';

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import AuthMessage from './components/AuthMessage';
import WeatherInfo from './components/WeatherInfo';
import Header from './components/Header';






const App = () => {
  return (
 
      <div className="bg-lime-200 min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto p-4">
      <TaskInput />
      <TaskList />
      <AuthMessage />
      <WeatherInfo />
      </main>
      </div>
      
    
  );
};

export default App;
