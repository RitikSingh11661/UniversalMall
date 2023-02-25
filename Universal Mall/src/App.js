import './App.css';
import { HomePage } from './pages/HomePage';
import { Product } from './pages/Product';
import { SingleProductPage } from './pages/SingleProductPage';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* <Product></Product> */}
      <MainRoutes></MainRoutes>
      {/* <SingleProductPage></SingleProductPage> */}
    </div>
  );
}

export default App;
