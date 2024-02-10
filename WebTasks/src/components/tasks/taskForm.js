import React, { useState } from 'react';
import './task.css';

const TaskForm = ({ createTask }) => {

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const saveTask = (e) => {
        e.preventDefault();
        const newTask = {
          name: taskName,
          description: taskDescription,
        };
        createTask(newTask);
        setTaskName('');
        setTaskDescription('');
    };

    return (
      <div>
      <h3>Crear Tarea</h3>
      <form onSubmit={saveTask}>
        <div className='mb-3'>
          <input
            type="text"
            id="taskName"
            className='form-control'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Tarea"
            required
          />
        </div>
        <div className='form-floating'>
          <textarea
            id="taskDescription"
            style={{ height: '100px' }}
            className='form-control'
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          />
          <label>Descripción</label>
        </div>
        <br></br>
        <button type="submit" className='btn btn-primary'>Crear</button>
      </form>
    </div>
    );
};

export default TaskForm;