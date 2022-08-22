import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './layout/navigation/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMotorcycle from './components/motorcycles/addMotorcycle';
import DeleteMotorcycle from './components/motorcycles/deleteMotorcycle';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/delete-motorcycle" element={<DeleteMotorcycle />} />
          <Route exact path="/add-motorcycle" element={<AddMotorcycle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
