
import { Routes , Route } from 'react-router-dom';
import PaymentOptions from './PaymentOptions';
import PaymentMethod from './PaymentMethod';
import { Product } from './Product';
import App from './App';

function Home() {
  return (
    <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/payment/swap-tokens" element={<App />} />
        <Route path="/payment-options" element={<PaymentOptions/>} />
        <Route path="/payment/:method" element={<PaymentMethod/>} />
    </Routes>
  );
}

export default Home
