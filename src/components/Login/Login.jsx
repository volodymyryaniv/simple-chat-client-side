import React from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { login } from '../../redux/actions/userActions';
import styles from './Login.module.scss';

function Login({ login }) {
  const handleCredentialResponse = ({ credential }) => {
    const { name, picture } = jwt_decode(credential);
    localStorage.setItem('user', JSON.stringify({ name, picture, credential }));
    login(name, picture, credential);
  };

  return (
    <GoogleLogin
      onSuccess={handleCredentialResponse}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (name, photo, token) => dispatch(login(name, photo, token)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
