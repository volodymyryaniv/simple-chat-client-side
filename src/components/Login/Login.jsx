import React from 'react';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { login } from '../../redux/actions/userActions';
import styles from './Login.module.scss';

function Login({ login }) {
  const handleCredentialResponse = ({ credential }) => {
    const { name, picture } = jwt_decode(credential);
    localStorage.setItem('user', JSON.stringify({ name, picture, credential }));
    login(name, picture, credential);
  };

  React.useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        '281123684298-umemc1jmu4a1r04j7hfdcvjki9796553.apps.googleusercontent.com',
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(document.querySelector('#login-button'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  return <div id="login-button"></div>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (name, photo, token) => dispatch(login(name, photo, token)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
