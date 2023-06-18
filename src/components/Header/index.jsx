import styles from './styles.module.scss'
import logo from '../../assets/img/logo.png';
import React from 'react';
import axios from 'axios';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  const [user, setUser] = React.useState({})
  const [isClicked, setIsClicked] = React.useState(false)
  const [isBtnClicked, setIsBtnClicked] = React.useState(false);
  const classes = `${styles.burger_btn} ${isBtnClicked === false ? '' : styles.open}`;
  const sideMenuClasses = `${styles.slideMenu} ${isBtnClicked === true ? styles.openSideMenu : ''}`

  React.useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get('http://localhost:8080/api/user/' + window.localStorage.getItem('userId'))

      if (response.status === 200) {
        setUser(response.data)
      }
    }

    fetchUser().then((r) => console.log('Fetch user data promise: ', r))
  }, [])

  const onLogOutClick = () => {
    window.localStorage.clear()
    return navigate("/")
  }

  return (
    <div className={styles.root}>
      <Link to="/home">
        <img src={logo} alt="logo" />
      </Link>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li onClick={() => setIsClicked((prev) => !prev)}>
            {user.firstName} {user.lastName}

            {isClicked && <div className={styles.popUpMenu}>
              <p onClick={onLogOutClick}>Log Out</p>
              {user.userRole === "ADMIN" && <Link to="/admin">Admin Panel</Link>}
            </div>}
          </li>
        </ul>
      </nav>

      <button className={classes} onClick={() => setIsBtnClicked((prev) => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={sideMenuClasses}>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li onClick={() => setIsClicked((prev) => !prev)}>
              {user.firstName} {user.lastName}

              {isClicked && <div className={styles.popUpMenu}>
                <p onClick={onLogOutClick}>Log Out</p>
                {user.userRole === "ADMIN" && <Link to="/admin">Admin Panel</Link>}
              </div>}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header;