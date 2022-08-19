import { useDispatch } from 'react-redux';
import Navigation from './layout/navigation/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteMotorcycle } from './redux/motorcycles/motorcycles';

function App() {
  const dispatch = useDispatch();
  const motorcycleId = 16;
  const test = () => {
    dispatch(deleteMotorcycle(motorcycleId));
  };

  return (
    <div className="App">
      <button type="button" onClick={() => test()}>Delete</button>
      <Navigation />
    </div>
  );
}

export default App;
