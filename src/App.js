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
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import ContextConfig from './Component/Hooks/contextConfig';
import PrivatRoute from './Component/Hooks/PrivateRoute';
import RevewProduct from './Component/RevewProduct/RevewProduct';
import Sheepment from './Component/Sheepment/Sheepment';

function App() {
  return (
    <ContextConfig>
      <Router>
        <Topbar></Topbar>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path='/sheepment' element={<Sheepment />} />


          <Route path="/ordersubmite" element={<OrderSubmite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path='/inventory' element={
            <PrivatRoute>
              <Inventory></Inventory>
            </PrivatRoute>
          } >
          </Route>
          <Route path='/revew' element={
            <PrivatRoute>
              <Revew></Revew>
            </PrivatRoute>
          } >
          </Route>

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </ContextConfig>

  );
}

export default App;
