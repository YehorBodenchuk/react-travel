import React from 'react';
import './style.css'
import Header from '../../components/Header';
import axios from 'axios';

const Admin = () => {

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
    <>
      <Header />
    <div className="root">
      <table className="content-table">
        <thead>
        <tr>
          <th>id</th>
          <th>country</th>
          <th>continent</th>
          <th>population</th>
          <th>averagePrice</th>
          <th>territory</th>
        </tr>
        </thead>
        <tbody>
        {tours.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.country}</td>
            <td>{item.continent}</td>
            <td>{item.population}</td>
            <td>{item.averagePrice}</td>
            <td>{item.square}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Admin;