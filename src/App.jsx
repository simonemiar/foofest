import "./scss/style.scss";
import Header from "./components/Header";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home"
import Schedule from "./routes/Schedule"
import Basket from "./routes/Basket"



function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/schedule">Schedule</Link> | <Link to="/basket">Basket</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/basket" element={<Basket/>} />
      </Routes>
      <Header />
      <p>Johnny</p>
      <div className="shape"><p>hellow, shape</p></div>
      
    </div>
  );
}

export default App;
