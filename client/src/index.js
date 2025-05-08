import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Learn from './components/Learn';
import PageNotFound from './components/PageNotFound';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

ReactDOM.render(
    <BrowserRouter>
     <Routes>
       <Route path='/' element={< App/>} >
       <Route path='signin' element = {<SignIn/>} />
       <Route path='signup' element={<SignUp/>} />
       <Route path='learn' element={<Learn/>} />
       <Route path='*' element={<PageNotFound/>} />
       </Route>
     </Routes>
   </BrowserRouter> ,
    
  document.getElementById('root')
);

