import styles from './styles.module.scss'
import userIcon from '../../../../assets/img/user-avatar-gray.png'
import homeIcon from '../../../../assets/img/home-page-gray.png'
import globeIcon from '../../../../assets/img/map.png'

const TourBlock = ({ country, continent, description, population, square, averagePrice, imageUrl }) => {
  return (
    <div className={styles.root}>
      <img src={imageUrl} alt="" />
      <div>
        <b>
          <span>
            <h4>{country}</h4>
            <i>{continent}</i>
          </span>
          <button>Explore More</button>
        </b>
        <p>{description}</p>
        <ul>
          <li>
            <img src={userIcon} alt="" />
            <span>{population} Mil People</span>
          </li>
          <li>
            <img src={globeIcon} alt="" />
            <span>{square} km2</span>
          </li>
          <li>
            <img src={homeIcon} alt="" />
            <span>${averagePrice}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TourBlock;