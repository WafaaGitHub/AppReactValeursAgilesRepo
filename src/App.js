
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ValeursAgiles from './composants/ValeursAgiles';
import Home from './composants/Home';

function App() {
  return (
    
    <div className="App">
      <Router>
      <header className="App-header">
       /* <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="AppReactValeursAgilesRepo" exact element={<Home />}></Route>
          <Route path="valeursAgiles" element={<ValeursAgiles />}></Route>     
        </Routes> */
      </header>
      </Router>
    </div>

   
  );
}

export default App;
