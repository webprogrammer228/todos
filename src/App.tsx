import React from 'react';
import './App.css';
import CustomList from "./components/List";

function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <h1>Todos</h1>
            <CustomList />
        </div>
    </div>
  );
}

export default App;
