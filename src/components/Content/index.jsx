import React from 'react';
import styles from './styles.module.scss'
import TourBlock from './components/TourBlock';
import axios from 'axios';

const Content = () => {
  const [tours, setTours] = React.useState([]);

  React.useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/tour/')
        if (response.status === 200) {
          setTours(response.data)
        }
      } catch (e) {
        setTours([{
          id: 1,
          country: 'Switzerland',
          continent: 'Europe',
          description: 'Woox Travel is a professional Bootstrap 5 theme HTML CSS layout for your website. You can use this layout for your commercial work.',
          averagePrice: 1232.12,
          imageUrl: 'https://www.nationsonline.org/gallery/Switzerland/Sunrise-on-the-Matterhorn.jpg',
          population: 8.66,
          square: 121.12,
        }])
      }
    }

    fetchTours().then((r) => console.log(r))
  }, [])

  return (
    <div className={styles.root}>
      <h2>Visit One Of Our Countries Now</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

      <div className={styles.tours}>
        {tours.map(tour => <TourBlock country={tour.country} continent={tour.continent} description={tour.description}
                                      averagePrice={tour.averagePrice} imageUrl={tour.imageUrl}
                                      population={tour.population} square={tour.square} key={tour.id} />)}
      </div>
    </div>
  )
}

export default Content;