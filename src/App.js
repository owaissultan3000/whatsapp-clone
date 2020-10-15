import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "./App.css";
import Login from "./Login";
import { BrowserRouter, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <BrowserRouter>
            <Sidebar />

            <Route path="/rooms/:roomId" component={Chat} />
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
