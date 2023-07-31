import { Routes, Route } from 'react-router-dom'

import './App.css';
import Basket from './components/basket/Basket';
import BodyMenu from './components/body/BodyMenu';
import Header from './components/header/Header';
import { useState } from 'react';

function App() {

const [searchValue, setSearhValue] = useState('')
console.log(searchValue);
  return (
    <div className="App">
      <div className='wrapper'>
        <Header searchValue={searchValue} setSearhValue={setSearhValue} />
        {/* <BodyMenu/> */}
        <Routes>
          <Route path='/basket' element={<Basket />} />
          <Route path='/' element={<BodyMenu searchValue={searchValue} />} />
          {/* <Route path='*' element={<BodyMenu />} /> */}
        </Routes>
      </div>
    </div >
  );
}

export default App;
