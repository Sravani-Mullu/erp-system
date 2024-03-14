import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import ProductManagement from './components/ProductManagement';
import OrdersManagement from './components/OrdersManagement';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import OrderCalendar from './components/OrdersCalender';
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductManagement/>} />
        <Route path="/orders" element={<OrdersManagement/>} />
        <Route path="/ordercalender" element={<OrderCalendar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
