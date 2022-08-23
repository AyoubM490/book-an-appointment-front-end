import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import SignUpPage from './pages/signup/SignUp';
import SignInPage from './pages/signin/SignIn';
import Navigation from './layout/navigation/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={(<HomePage />)} />
        <Route path="/signin" element={(<SignInPage />)} />
        <Route path="/signup" element={(<SignUpPage />)} />
      </Routes>
    </>
  );
}

export default App;
