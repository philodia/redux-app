export const addTask = (description) => ({
    type: 'ADD_TASK',
    payload: {
      id: Math.random(),
      description,
      isDone: false,
    },
  });

  export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: { id },
  });

  export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: { filter },
  });