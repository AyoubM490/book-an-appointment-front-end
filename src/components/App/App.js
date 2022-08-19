import Navigation from '../../layout/navigation/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMotorcycle from '../motorcycleForm/addMotorcycle';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AddMotorcycle />
    </div>
  );
}

export default App;
