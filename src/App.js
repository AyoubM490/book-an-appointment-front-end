import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './layout/navigation/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMotorcycle from './components/motorcycleForm/addMotorcycle';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/add-motorcycle" element={<AddMotorcycle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
