import React, { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import Filters from './components/Filters';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  return (
    <div className="pt-20 pb-20 h-auto bg-gradient-to-r from-red-100 via-blue-200 to-indigo-300">
      <h1 className="text-4xl font-signature text-center bg-gradient-to-r from-blue-600 via-red-500 to-indigo-400 text-transparent bg-clip-text mb-8 animate-bounce">
        Task Tracker
      </h1>
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 flex flex-col lg:flex-row gap-6">
        {/* Left Section - Add Task */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <AddTaskForm onAddTask={addTask} />
        </div>

        {/* Right Section - Task List */}
        <div className="w-full lg:w-2/3">
          <Filters tasks={tasks} setFilteredTasks={setFilteredTasks} />
          <TaskList tasks={filteredTasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
        </div>
      </div>

      {/* Butterfly Animations */}
      <div className="butterfly animate-fly-butterfly-1 z-50">
        <img src="https://img.icons8.com/ios/452/butterfly.png" alt="butterfly" className="w-12 h-12" />
      </div>
      <div className="butterfly animate-fly-butterfly-2 z-50">
        <img src="https://img.icons8.com/ios/452/butterfly.png" alt="butterfly" className="w-12 h-12" />
      </div>
      <div className="butterfly animate-fly-butterfly-3 z-50">
        <img src="https://img.icons8.com/ios/452/butterfly.png" alt="butterfly" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default App;
