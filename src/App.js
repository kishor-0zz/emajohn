import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './Component/Topbar/Topbar';
import Header from './Component/Topbar/Header/Header';
import Shop from './Component/Topbar/Shop/Shop';
import PageNotFound from './Component/Topbar/Pagenotfound/PageNotFound';
import Revew from './Component/Revew/Revew';
import Inventory from './Component/Inventory/Inventory';
import OrderSubmite from './Component/OrderSubite/OrderSubmite';

function App() {
  return (
    <Router>
      <Topbar></Topbar>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/revew" element={<Revew />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/ordersubmite" element={<OrderSubmite />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
