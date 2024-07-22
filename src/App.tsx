import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Banks from './components/Banks';
import BankPage from './components/BankPage';
import FramerDND from './components/dragndrop/FramerDND';
import KitDND from './components/dragndrop/KitDND';
import HiddenDeposits from './components/HiddenDeposits';
import HiddenBanks from './components/HiddenBanks';






function App() {
// depSlice PayloadAction === id
// ls hidden banks and dep

  return (
    
    <div className="main__container">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="banks" element={<Banks/>}/>
        <Route path="banks/:id" element={<BankPage/>}/>
        <Route path="banks/banks-archive" element={<HiddenBanks/>}/>
        <Route path="deposit-archive" element={<HiddenDeposits/>}/>
        {/* <Route path="framer-dnd" element={<FramerDND/>}/> */}
        {/* <Route path="kit-dnd" element={<KitDND/>}/> */}
      </Routes>
    </div>
  );
}
export default App;
