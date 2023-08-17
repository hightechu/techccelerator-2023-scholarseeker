import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles imports
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// components imports
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserHome from "./components/UserHome";
import Navigation from "./components/Navigation";
import Practice from "./components/Practice";
import App from './App';
import AddDataSample from './components/AddDataSample';
import Anotherpage from "./components/Anotherpage";

import ScholarshipPage from './components/ScholarshipPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
// Add routes after line 30
root.render(
  <React.StrictMode>
    <BrowserRouter>
        < Navigation />
        <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route exact path='/home' element={<UserHome/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/practice' element={<Practice/>}/>
            <Route path='/adddatasample' element={<AddDataSample/>}/>
            <Route path='/anotherpage' element={<Anotherpage/>}/>
            <Route path= '/scholarshippage' element={<ScholarshipPage/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

