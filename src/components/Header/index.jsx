import styles from './styles.module.scss'
import logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <div className={styles.root}>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Yegor Bodenchuk
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;