import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './layout/navigation/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyReservationsPage from './components/reservations/MyReservationsPage';
import DetailsPage from './components/reservations/details/DetailsPage';

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
          currentUser.token && currentUser.token !== null
            ? <MyReservationsPage userId={currentUser.currentUser.id} />
            : 'Redirect to Login Page'
          }
        />
        <Route
          exact="true"
          path="/motorcycles/:id"
          element={
          currentUser.token && currentUser.token !== null
            ? <DetailsPage userId={currentUser.currentUser.id} />
            : 'Redirect to Login Page'
          }
        />
      </Routes>
    </div>
  );
}

export default App;
