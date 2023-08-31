import './App.css';
import TodoPage from './pages/TodoPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      
      <Router>
        <Routes>
          <Route path="/" element={ <TodoPage/> } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;