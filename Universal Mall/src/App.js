import './App.css';
import { HomePage } from './pages/HomePage';
import {Login} from './pages/Login';
import { Signup } from './pages/Signup';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <MainRoutes/>
       {/* <Login/> */}
      {/* <Signup/> */}
    </div>
  );
}

export default App;
