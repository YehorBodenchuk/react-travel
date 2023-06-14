import React from 'react';
import styles from './styles.module.scss'
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <div className={styles.root}>
      <h2>Log <span>In</span> Your Account <span>Through</span> This <span>Form</span></h2>
      <div className={styles.inputBlock}>
        <p>Your email</p>
        <input type="text" />
      </div>
      <div className={styles.inputBlock}>
        <p>Your password</p>
        <input type="password" />
      </div>
      <div className={styles.buttonBlock}>
        <button className={styles.signInButton}>Sign In</button>
        <button className={styles.signUpButton}><Link to="/">Sign Up</Link></button>
      </div>
    </div>
  )
}

export default Auth;