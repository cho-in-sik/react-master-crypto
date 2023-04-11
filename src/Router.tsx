import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coins from './Routes/Coins';
import Coin from './Routes/Coin';
import { Interface } from 'readline';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId/*" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
