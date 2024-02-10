import React, { useState } from 'react';

const TaskList = ({ tasks = [], deleteTask, editTask, taskStatus }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState({ name: '', description: '' });

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index]);
  };

  const handleSave = () => {
    editTask(editingIndex, editedTask);
    setEditingIndex(null);
    setEditedTask({ name: '', description: '' });
  };

  const formatDescription = (description) => {
    const maxLength = 70;
    const parts = [];
    for (let i = 0; i < description.length; i += maxLength) {
      parts.push(description.substring(i, i + maxLength));
    }
    return parts.join('\n');
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Lista de Tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={`task-item ${task.completed ? 'completed' : 'unfinished'}`}>
              {editingIndex === index ? (
                <div className='mb-3'>
                  <input
                    type="text"
                    className='form-control'
                    value={editedTask.name}
                    onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })}
                  />
                  <br></br>
                  <textarea
                    value={editedTask.description}
                    className='form-control'
                    onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                  />
                  <br></br>
                  <button className='btn btn-primary' onClick={handleSave}>Guardar</button>
                </div>
              ) : (
                <div>
                  <strong>Nombre de la Tarea: </strong>{task.name}
                  <p><strong>Descripción: </strong>
                  {formatDescription(task.description).split('\n').map((part, i) => (
                    <p key={i}>{part}</p>
                  ))}</p>
                  <p><strong>Estado: </strong>{task.completed ? 'Completada' : 'Sin Terminar'}</p>
                  <button className="btn btn-danger" onClick={() => deleteTask(index)}>Eliminar</button>&nbsp;&nbsp; 
                  <button className="btn btn-primary" onClick={() => handleEdit(index)}>Editar</button>&nbsp;&nbsp; 
                  <button className="btn btn-success" onClick={() => taskStatus(index)}>
                    {task.completed ? 'Retomar' : 'Terminar'}
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;