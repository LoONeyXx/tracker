import { useLocation } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { SidePanel } from '../../components/SidePanel/SidePanel';
import { Profile } from '../Profile/Profile';
import Reccomendations from '../Reccomendations/Reccomendations';
function LearningTrack(props) {
  const location = useLocation();
  const isItProfileRoute = location.pathname === '/track/profile';
  const isItReccomendations = location.pathname === '/track/recommendations';
  return (
    <>
      <Header />
      <SidePanel />
      {isItProfileRoute && <Profile level="middle" />}
      {isItReccomendations && <Reccomendations />}
    </>
  );
}
export { LearningTrack };
