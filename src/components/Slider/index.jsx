import styles from './styles.module.scss'
import userIcon from '../../assets/img/user-avatar.png';
import globeIcon from '../../assets/img/global.png';
import homeIcon from '../../assets/img/home-page.png'

const Slider = () => {
  const onClick = () => {
    console.log(window.localStorage.getItem("user"))
  }

  return (
    <div className={styles.root}>
      <div className={styles.shadow}>
        <h2>Take a Glimpse Into The Beautiful Country Of:</h2>
        <h1>France</h1>
        <button>Go There</button>
        <div className={styles.info}>
          <ul>
            <li>
              <div>
                <img src={userIcon} alt="" />
              </div>
              <b>
                <span>Population:</span>
                <p>8.66 M</p>
              </b>
            </li>
            <li>
              <div>
                <img src={globeIcon} alt="" />
              </div>
              <b>
                <span>Territory:</span>
                <p>513.120 KM2</p>
              </b>
            </li>
            <li>
              <div>
                <img src={homeIcon} alt="" />
              </div>
              <b>
                <span>AVG Price:</span>
                <p>$142.450</p>
              </b>
            </li>
          </ul>
          <button onClick={onClick} className={styles.explore}>
            Explore More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slider;