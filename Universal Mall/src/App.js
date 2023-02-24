import './App.css';
import { HomePage } from './pages/HomePage';
import { Product } from './pages/Product';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Product></Product>
      <MainRoutes></MainRoutes>
    </div>
  );
}

export default App;
