import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from '../components/Slider';
import PopularToys from '../components/PopularToys';
import Stat from '../components/Stat';
import CustomerReview from '../components/CustomerReview';
import Aos from 'aos';

const Home = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Helmet><title>ToyTopia - Home</title></Helmet>
      <Slider />
      <Stat />
      <PopularToys />
      <CustomerReview />
    </div>
  );
};

export default Home;