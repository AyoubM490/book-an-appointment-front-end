import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './layout/navigation/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyReservationsPage from './components/pages/MyReservationsPage';

function App() {
  const currentUser = useSelector((state) => state.auth);

  return (
    <div className="App">
      <Navigation />
      <Router>
        {currentUser.token && currentUser.token !== null
          ? <MyReservationsPage userId={currentUser.currentUser.id} />
          : 'Redirect to Login Page'}
      </Router>
    </div>
  );
}

export default App;
