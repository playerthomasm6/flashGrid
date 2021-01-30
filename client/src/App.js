import React from "react";
import Application from "./Components/Application";
import UserProvider from "./providers/UserProvider";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
