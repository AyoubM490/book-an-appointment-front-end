import {
  Route, Routes, useLocation, Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './pages/home/HomePage';
import SignUpPage from './pages/signup/SignUp';
import SignInPage from './pages/signin/SignIn';
import Navigation from './layout/navigation/Sidebar';
import AddReservation from './components/Reservations/AddReservation';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyReservationsPage from './components/Reservations/MyReservationsPage';
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
        <Route
          path="/"
          element={
          currentUser.token === null ? (
            <HomePage />
          ) : (
            <Navigate to="/home" />
          )
        }
        />
        <Route
          path="/signin"
          element={
          currentUser.token === null ? (
            <SignInPage />
          ) : (
            <Navigate to="/home" />
          )
        }
        />
        <Route
          path="/signup"
          element={
          currentUser.token === null ? (
            <SignUpPage />
          ) : (
            <Navigate to="/home" />
          )
        }
        />
        <Route
          path="/home"
          element={
            currentUser.token && currentUser.token !== null ? (
              <Home />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          exact="true"
          path="/reservations"
          element={
            currentUser.token && currentUser.token !== null ? (
              <MyReservationsPage userId={currentUser.currentUser.id} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          exact="true"
          path="/motorcycles/:id"
          element={
          currentUser.token && currentUser.token !== null
            ? <DetailsPage />
            : <Navigate to="/signin" />
          }
        />

        <Route
          path="/delete-motorcycle"
          element={
          currentUser.token && currentUser.token !== null
            ? <DeleteMotorcycle />
            : <Navigate to="/signin" />
          }
        />
        <Route
          exact
          path="/add-motorcycle"
          element={
           currentUser.token && currentUser.token !== null
             ? <AddMotorcycle />
             : <Navigate to="/signin" />
         }
        />
        <Route
          path="/reserve/add"
          element={
          currentUser.token && currentUser.token !== null
            ? <AddReservation userId={currentUser.currentUser.id} />
            : <Navigate to="/signin" />
        }
        />

      </Routes>
    </div>
  );
}

export default App;
