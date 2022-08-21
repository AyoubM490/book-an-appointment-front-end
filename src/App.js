import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './layout/navigation/Sidebar';
import AddReservation from './components/Reservations/AddReservation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
   
        <Navigation />
      <Routes>
        <Route path="/add-reservation" element={<AddReservation />} />
      </Routes>
 
    </div>
  );
}

export default App;
