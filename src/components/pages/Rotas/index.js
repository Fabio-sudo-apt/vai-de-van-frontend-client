import * as React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from "../home";
import { Tickets } from "../ticket";

export const Rotas = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/teste' element={<Tickets/>}></Route>
        </Routes>
    </Router>
  );
};







