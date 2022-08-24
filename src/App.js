import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './pages/home/HomePage';
import SignUpPage from './pages/signup/SignUp';
import SignInPage from './pages/signin/SignIn';
import Navigation from './layout/navigation/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyReservationsPage from './components/reservations/MyReservationsPage';

function App() {
  const currentUser = useSelector((state) => state.auth);

  return (
    <div className="App d-flex">
      <Routes>
        <Route path="/home" element={(<Navigation />)} />
        <Route path="/" element={(<HomePage />)} />
        <Route path="/signin" element={(<SignInPage />)} />
        <Route path="/signup" element={(<SignUpPage />)} />
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
