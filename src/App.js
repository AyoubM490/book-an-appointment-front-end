import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import store from './redux/configureStore';
import Navigation from './layout/navigation/Sidebar';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
