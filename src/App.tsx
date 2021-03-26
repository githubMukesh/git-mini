import React from 'react';
import './App.css';
import Search from './components/search.component';
import UserList from './components/userList.component';

function App() {
  return (
    <div className="App container-app">
       <Search></Search>
       <UserList></UserList>
    </div>
  );
}

export default App;
