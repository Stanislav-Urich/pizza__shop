import { Routes, Route } from 'react-router-dom'

import './App.css';
import Basket from './components/basket/Basket';
import BodyMenu from './components/body/BodyMenu';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">


      <div className='wrapper'>
        <Header />
        {/* <BodyMenu/> */}
        <Routes>
          <Route path='/basket' element={<Basket />} />
          <Route path='/' element={<BodyMenu />} />
          {/* <Route path='*' element={<BodyMenu />} /> */}
        </Routes>
      </div>


    </div >
  );
}

export default App;
