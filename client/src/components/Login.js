import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

import './css/register.css';

const Login = () => {
  // constructor(props) {
  // super(props);

  // Container.propTypes = {
  // fluid: PropTypes.bool
  //applies .container-fluid class
  // };
  // }
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  //OnChange target value for each form
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // onSubmit action for Register Button
  const onSubmit = async e => {
    e.preventDefault();
    /*if password does not match
    if () {
      console.log('Passwords do not match. Please try again');
    } else {
      console.log('Success!');
    }

    */
  };
  return (
    <div className='.contianer-fluid'>
      <div className='card-header'>
        <h1>Login</h1>
      </div>
      <div className='card-body'>
        <form className='form' onSubmit={e => onSubmit(e)}>
          {/* Email */}
          <div className='row'>
            <div className='col'>
              <div className='form-group'>
                <label htmlFor='lblEmail'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  id='email'
                  value={email}
                  onChange={e => onChange(e)}
                  placeholder='Enter your email'
                  required
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <div className='row'>
            <div className='col'>
              <div className='form-group'>
                <label htmlFor='lblPassword'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  id='password'
                  minLength='6'
                  value={password}
                  onChange={e => onChange(e)}
                  placeholder='Enter a password'
                  required
                />
              </div>
            </div>
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
        <p>
          Already have an account?
          <Link to='/Login' />
        </p>
      </div>
    </div>
  );
};

export default Login;
