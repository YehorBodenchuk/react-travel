import React from 'react';
import styles from './styles.module.scss'
import {
  Link,
  useNavigate
} from 'react-router-dom';
import axios from 'axios';

const Auth = () => {
  const navigate = useNavigate()
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const onSighInClick = async () => {
    const response = await axios.post("http://localhost:8080/api/user/auth", {
      "email": emailRef.current.value,
      "password": passwordRef.current.value
    })

    if (response.status === 200) {
      window.localStorage.setItem("user", response.data)
      return navigate("/home")
    }
  }

  return (
    <div className={styles.root}>
      <h2>Log <span>In</span> Your Account <span>Through</span> This <span>Form</span></h2>
      <div className={styles.inputBlock}>
        <p>Your email</p>
        <input type="text" ref={emailRef} />
      </div>
      <div className={styles.inputBlock}>
        <p>Your password</p>
        <input type="password" ref={passwordRef} />
      </div>
      <div className={styles.buttonBlock}>
        <button onClick={onSighInClick} className={styles.signInButton}>Sign In</button>
        <button className={styles.signUpButton}><Link to="/">Sign Up</Link></button>
      </div>
    </div>
  )
}

export default Auth;