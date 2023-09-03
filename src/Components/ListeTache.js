import React from 'react';
import { connect } from 'react-redux';
import { toggleTask } from '../Actions';
import Task from './Task';

const ListeTache = ({ tasks, toggleTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={() => toggleTask(task.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { tasks, filter } = state;
  if (filter === 'all') {
    return { tasks };
  } else if (filter === 'done') {
    return { tasks: tasks.filter((task) => task.isDone) };
  } else {
    return { tasks: tasks.filter((task) => !task.isDone) };
  }
};

export default connect(mapStateToProps, { toggleTask })(ListeTache);
