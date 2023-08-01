import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

import Basket from './components/basket/Basket';
import BodyMenu from './components/body/BodyMenu';
import Header from './components/header/Header';
import {SearchContext} from './context/SearchContext';

import './App.css';

function App() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className='wrapper'>
          <Header />
          <Routes>
            <Route path='/basket' element={<Basket />} />
            <Route path='/' element={<BodyMenu searchValue={searchValue} />} />
            {/* <Route path='*' element={<BodyMenu />} /> */}
          </Routes>
        </div>
      </SearchContext.Provider>
    </div >
  );
}

export default App;

