import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navigation from './layout/navigation/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMotorcycle from './components/motorcycles/addMotorcycle';
import DeleteMotorcycle from './components/motorcycles/deleteMotorcycle';
import './App.css';
import MyReservationsPage from './components/reservations/MyReservationsPage';

function App() {
  const currentUser = useSelector((state) => state.auth);

  return (
    <div className="App d-flex">
      <Navigation />
      <Routes>
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
        <Route path="/delete-motorcycle" element={<DeleteMotorcycle />} />
        <Route exact path="/add-motorcycle" element={<AddMotorcycle />} />
      </Routes>
    </div>
  );
}

export default App;
