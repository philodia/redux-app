import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../Actions';

const AddTask = ({ addTask }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      addTask(taskDescription);
      setTaskDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Ajouter</button>
    </div>
  );
};

export default connect(null, { addTask })(AddTask);
