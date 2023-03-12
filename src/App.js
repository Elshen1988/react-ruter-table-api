import React from 'react';
import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import { HomePage } from './HomePage';
import { Detail } from './Detail';
import { AddSupplire } from './AddSupplire';
import { UpdateSupplire } from './UpdateSupplire';


function App() {

  return (
    <div className="App">
      <div>
        <nav><br/>
          <Link to='/'>Home Page</Link><br/><br/>
          <Link to='/addSupplire'>Add Supplire</Link><br/>                  
        </nav>     
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/:id'element={<Detail/>}/>
        <Route path='/addSupplire' element={<AddSupplire/>}/>
        <Route path='/updateSupplire/:idd' element={<UpdateSupplire/>}/>
      </Routes>     
    </div>
    
  );
}

export default App;
