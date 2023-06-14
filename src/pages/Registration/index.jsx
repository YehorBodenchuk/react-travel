import styles from './styles.module.scss'
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className={styles.root}>
      <h2>Sign <span>Up</span> Your Account <span>Through</span> This <span>Form</span></h2>
      <div className={styles.registrFrom}>
        <div className={styles.inputBlock}>
          <p>Your email</p>
          <input type="text" />
        </div>
        <div className={styles.inputBlock}>
          <p>Your password</p>
          <input type="password" />
        </div>
        <div className={styles.inputBlock}>
          <p>Your first name</p>
          <input type="text" />
        </div>
        <div className={styles.inputBlock}>
          <p>Your last name</p>
          <input type="text" />
        </div>
      </div>
      <div className={styles.buttonBlock}>
        <button className={styles.signInButton}>Sign Up</button>
        <button className={styles.signUpButton}><Link to="/auth">Sign In</Link></button>
      </div>
    </div>
  )
}

export default Registration;