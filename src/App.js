import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Navigation from './layout/navigation/Sidebar';
import MyReservationsPage from './components/reservations/MyReservationsPage';

function App() {
  const currentUser = useSelector((state) => state.auth);

  return (
    <div className="App d-flex">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          exact="true"
          path="/reservations"
          element={
          currentUser.token && currentUser.token !== null
            ? <MyReservationsPage userId={currentUser.currentUser.id} />
            : 'Redirect to Login Page'
          }
        />
      </Routes>
    </div>
  );
}

export default App;
