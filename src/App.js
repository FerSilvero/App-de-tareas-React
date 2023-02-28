import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TareaPage from './pages/TareaPage';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/tareas" element={ <TareaPage/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
