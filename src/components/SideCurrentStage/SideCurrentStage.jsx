import { Link } from 'react-router-dom';
import arrowDown from '../../images/arrow_right.svg';
import './SideCurrentStage.sass';

function SideCurrentStage({ currentUser }) {
  return (
    <div className="side-current-stage">
      <div className="side-current-stage__top-zone">
        <div
          style={{
            backgroundImage: `url(${currentUser.avatar})`,
          }}
          className="side-current-stage__avatar"
        />
        <p className="side-current-stage__name">{currentUser.name}</p>
      </div>
      <div className="side-current-stage__bottom-zone">
        <div className="side-current-stage__column">
          <p className="side-current-stage__subtitle">Текущий этап</p>
          <Link
            to="/track/recommendations"
            className="side-current-stage__link"
          >
            {currentUser.stage}
          </Link>
        </div>
    <button
          style={{ backgroundImage: `url(${arrowDown})` }}
          className="side-current-stage__arrow"
          type="button"
          aria-label="Открыть"
        />
      </div>
    </div>
  );
}

export { SideCurrentStage };
