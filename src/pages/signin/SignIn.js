import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { login } from '../../redux/auth/index';
import store from '../../redux/configureStore';

const SignInPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [username, setUsername] = useState('');
  const close = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: username,
    };

    store.dispatch(login(user));
  };

  if (isOpen) {
    return (
      <>
        <div className="container mt-5 ml-1 col-sm-4">
          <FontAwesomeIcon icon={faXmark} className="text-danger h3 cursor" onClick={() => { close(); }} />
          <form onSubmit={handleSubmit} className="form">
            <h3 className="text-center">
              LogIn
            </h3>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="User name"
              />
            </div>
            <button type="submit" className="btn btn-success">
              LogIn
            </button>
          </form>
        </div>
      </>
    );
  }
  return null;
};

export default SignInPage;
