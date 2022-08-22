import { Link } from 'react-router-dom';

const LinkTo = () => (
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
      <li>
        <Link to="/sidebar">Navigation</Link>
      </li>
    </ul>
  </aside>
);

export default LinkTo;
