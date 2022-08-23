import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './SignUp.css';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/index';

const SignUpPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [username, setUsername] = useState('');
  const close = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: username,
    };

    dispatch(signup(user));
  };

  const handleOnChange = (e) => {
    setUsername(e.target.value);
  };

  if (isOpen) {
    return (
      <>
        <div className="container mt-5 ml-1 col-sm-4">
          <FontAwesomeIcon icon={faXmark} className="text-danger h3 cursor" onClick={() => { close(); }} />
          <form onSubmit={handleSubmit} className="form m-2">
            <h3 className="text-center">
              SignUp
            </h3>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="User name"
                onChange={handleOnChange}
                value={username}
              />
            </div>
            <button className="btn btn-success" type="submit">signup</button>
          </form>
        </div>
      </>
    );
  }
  return null;
};
export default SignUpPage;
