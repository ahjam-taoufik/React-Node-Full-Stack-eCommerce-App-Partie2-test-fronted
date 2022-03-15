import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Pay from './pages/Pay';
import Success from './pages/Success';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Routes>
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
      </Routes>

       </BrowserRouter>    
      </header>
    </div>
  );
}

export default App;
