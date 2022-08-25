import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './layout/navigation/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import AddMotorcycle from './components/motorcycles/addMotorcycle';
import DeleteMotorcycle from './components/motorcycles/deleteMotorcycle';
import './App.css';
import MyReservationsPage from './components/pages/MyReservationsPage';
import Motorsgrid from './components/Motorsgrid/Motorsgrid';

function App() {
  const currentUser = useSelector((state) => state.auth);

  return (
    <div className="App d-flex w-100">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          exact="true"
          path="/reservations"
          element={
            currentUser.token && currentUser.token !== null ? (
              <MyReservationsPage userId={currentUser.currentUser.id} />
            ) : (
              'Redirect to Login Page'
            )
          }
        />
        <Route path="/add-motorcycle" element={<AddMotorcycle />} />
        <Route path="/delete-motorcycle" element={<DeleteMotorcycle />} />
        <Route exact path="/add-motorcycle" element={<AddMotorcycle />} />
        <Route exact path="/motorcycles" element={<Motorsgrid />} />
      </Routes>
    </div>
  );
}

export default App;
