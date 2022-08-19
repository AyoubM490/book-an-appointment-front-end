import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './layout/navigation/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyReservationsPage from './components/pages/MyReservationsPage';

function App() {
  const currentUser = useSelector((state) => state.auth);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        {currentUser.token && currentUser.token !== null
          ? <Route path="/reservations" element={<MyReservationsPage userId={currentUser.currentUser.id} />} />
          : 'Redirect to Login Page'}
      </Routes>
    </div>
  );
}

export default App;
