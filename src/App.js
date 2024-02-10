import React, { useState } from 'react';
import './App.css';
import TaskForm from '../src/components/tasks/taskForm';
import TaskList from '../src/components/tasks/taskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }
  
  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  }
  
  const taskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }
  

  return (
    
    <div className="container">
      <div className="form-div">
        <TaskForm createTask={createTask}/>
      </div>
      <div className="list-div">
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} taskStatus={taskStatus} />
      </div>
    </div>
  );
};

export default App;