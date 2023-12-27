import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import NewsViewPage from './Components/NewsViewPage';
import SubscriptionPage from './Components/SubscriptionPage';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/news" element={<NewsViewPage/>}/>
          <Route exact path="/subscribe" element={<SubscriptionPage/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
