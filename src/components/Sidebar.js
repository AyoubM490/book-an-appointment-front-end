import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/signin">SignIn</Link>
      </li>
      <li>
        <Link to="/signup">SignUp</Link>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
