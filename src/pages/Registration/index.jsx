import React from 'react';
import styles from './styles.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const navigate = useNavigate()
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const firstNameRef = React.useRef();
  const lastNameRef = React.useRef();

  const onSignUpClick = async () => {
    const data = {
      "email": emailRef.current.value,
      "password": passwordRef.current.value,
      "firstName": firstNameRef.current.value,
      "lastName": lastNameRef.current.value,
      "userRole": "USER"
    }

    const response = await axios.post("http://localhost:8080/api/user/register", data)

    if (response.status === 200) {
      window.localStorage.setItem("user", response.data.id)
      return navigate("/home")
    }
  }

  return (
    <div className={styles.root}>
      <h2>Sign <span>Up</span> Your Account <span>Through</span> This <span>Form</span></h2>
      <div className={styles.registrFrom}>
        <div className={styles.inputBlock}>
          <p>Your email</p>
          <input type="text" ref={emailRef} />
        </div>
        <div className={styles.inputBlock}>
          <p>Your password</p>
          <input type="password" ref={passwordRef} />
        </div>
        <div className={styles.inputBlock}>
          <p>Your first name</p>
          <input type="text" ref={firstNameRef} />
        </div>
        <div className={styles.inputBlock}>
          <p>Your last name</p>
          <input type="text" ref={lastNameRef} />
        </div>
      </div>
      <div className={styles.buttonBlock}>
        <button onClick={onSignUpClick} className={styles.signInButton}>Sign Up</button>
        <button className={styles.signUpButton}><Link to="/auth">Sign In</Link></button>
      </div>
    </div>
  )
}

export default Registration;