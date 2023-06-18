import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import {
  Navigate,
} from 'react-router-dom';

const Home = () => {

  if (!window.localStorage.getItem("userId")) {
    return <Navigate to="/" />
  }

  return (
    <>
      <Header />
      <Slider />
      <Content />
      <Footer />
    </>
  )
}

export default Home;