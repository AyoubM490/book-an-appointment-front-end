import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './layout/navigation/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

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
