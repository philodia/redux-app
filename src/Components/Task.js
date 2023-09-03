import React from 'react';

const Task = ({ task, onToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={onToggle}
      />
      {task.description}
    </li>
  );
};

export default Task;
