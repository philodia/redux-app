import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import AddTask from './Components/AddTask';
import ListeTache from './Components/ListeTache';
import './App.css'; // Importez le fichier CSS

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo App</h1>
        <AddTask />
        <ListeTache />
      </div>
    </Provider>
  );
}

export default App;
