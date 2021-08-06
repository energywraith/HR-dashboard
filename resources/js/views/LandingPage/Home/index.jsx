import LandingPageHeader from './LandingPageHeader';
import StepsCarousel from './StepsCarousel';
import './Home.scss';

const Home = () => {
  return (
    <div className='d-flex flex-column' style={{ overflowX: 'hidden' }}>
      <LandingPageHeader />
      <StepsCarousel />
    </div>
  )
}

export default Home
