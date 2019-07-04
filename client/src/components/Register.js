import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

import './css/register.css';

const Register = () => {
  // constructor(props) {
  // super(props);

  // Container.propTypes = {
  // fluid: PropTypes.bool
  //applies .container-fluid class
  // };
  // }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_verification: '',
    location: '',
    country: ''
  });

  const {
    name,
    email,
    password,
    password_verification,
    location,
    country
  } = formData;

  //OnChange target value for each form
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // onSubmit action for Register Button
  const onSubmit = async e => {
    e.preventDefault();
    //if password does not match
    if (password !== password_verification) {
      console.log('Passwords do not match. Please try again');
    } else {
      console.log('Success!');
    }
  };
  return (
    <div className='.contianer-fluid'>
      <div className='card-header'>
        <h1>Registration</h1>
      </div>
      <div className='card-body'>
        <form className='form' onSubmit={e => onSubmit(e)}>
          {/* Username */}
          <div className='row'>
            <div className='col'>
              <div className='form-group'>
                <label htmlFor='lblName'>Username</label>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  id='name'
                  value={name}
                  onChange={e => onChange(e)}
                  placeholder='Enter your name'
                  required
                />
              </div>
            </div>
          </div>

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

          {/* Password confirmation */}
          <div className='row'>
            <div className='col'>
              <div className='form-group'>
                <label htmlFor='lblPassword2'>Re-enter your password</label>
                <input
                  type='password'
                  className='form-control'
                  name='password_verification'
                  id='password_verification'
                  minLength='6'
                  value={password_verification}
                  onChange={e => onChange(e)}
                  placeholder='Enter a password'
                  required
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div className='row'>
            <div className='col'>
              <div className='form-group'>
                <label htmlFor='lblLocation'>Location (City / Town)</label>
                <input
                  type='text'
                  className='form-control'
                  name='location'
                  id='location'
                  value={location}
                  onChange={e => onChange(e)}
                  placeholder='Enter your town or city'
                  required
                />
              </div>
            </div>
          </div>

          {/* Country  - This needs to be a dropdown list with json file populating*/}
          <div className='row'>
            <div className='col'>
              <div className='form-group'>
                <label htmlFor='lblCountry'>Country</label>
                <select
                  className='form-control' //form-control-sm'
                  name='country'
                  id='country'
                  value={country}
                  onChange={e => onChange(e)}
                  required
                >
                  <option defaultValue='' hidden>
                    select a country
                  </option>
                  <option value='Ireland'>Ireland</option>
                  <option value='England'>England</option>
                </select>
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

export default Register;
