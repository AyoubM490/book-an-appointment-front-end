import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './pages/home/HomePage';
import SignUpPage from './pages/signup/SignUp';
import SignInPage from './pages/signin/SignIn';
import Navigation from './layout/navigation/Sidebar';
import AddReservation from './components/Reservations/AddReservation';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyReservationsPage from './components/reservations/MyReservationsPage';
import DetailsPage from './components/details/DetailsPage';
import Home from './components/Home/Home';
import AddMotorcycle from './components/motorcycles/addMotorcycle';
import DeleteMotorcycle from './components/motorcycles/deleteMotorcycle';
import './App.css';

function App() {
  const currentUser = useSelector((state) => state.auth);

  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="App d-flex">
      { (pathname.indexOf('sign') !== 1 && pathname.length !== 1) || (pathname.indexOf('sign') !== 1 && pathname.endsWith('/') === false)
        ? <Navigation />
        : '' }
      <Routes>
        <Route path="/" element={(<HomePage />)} />
        <Route path="/signin" element={(<SignInPage />)} />
        <Route path="/signup" element={(<SignUpPage />)} />
        <Route path="/home" element={<Home />} />
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
        <Route
          exact="true"
          path="/motorcycles/:id"
          element={
          currentUser.token && currentUser.token !== null
            ? <DetailsPage userId={currentUser.currentUser.id} />
            : 'Redirect to Login Page'
          }
        />

        <Route path="/delete-motorcycle" element={<DeleteMotorcycle />} />
        <Route exact path="/add-motorcycle" element={<AddMotorcycle />} />
        <Route path="/add-reservation" element={<AddReservation />} />

      </Routes>
    </div>
  );
}

export default App;
