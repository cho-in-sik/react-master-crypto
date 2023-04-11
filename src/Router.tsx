import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coins from './Routes/Coins';
import Coin from './Routes/Coin';
import { Interface } from 'readline';

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins toggleDark={toggleDark} />}></Route>
        <Route path="/:coinId/*" element={<Coin isDark={isDark} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
