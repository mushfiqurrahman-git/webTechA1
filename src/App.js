import './App.css';

//react router dom for routing 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

//importing components
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Account } from './pages/account/account';
import {  ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/account" element={<Account/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
