import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import './CurrentStatus.sass';
import { useSelector } from 'react-redux';

function CurrentStatus() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  function handleButton(e) {
    navigate('/track/recommendations');
  }
  return (
    <section className="current-status">
      <h2 className="current-status__title">Текущий статус</h2>
      <ul className="current-status__list">
        <li className="current-status__item">
          <p className="current-status__item-subtitle">Профессия</p>
          <h3 className="current-status__item-title">
            {user.currentProfession}
          </h3>
        </li>
        <li className="current-status__item">
          <p className="current-status__item-subtitle">Уровень</p>
          <h3 className="current-status__item-title">{user.currentLevel}</h3>
        </li>
        <li className="current-status__item">
          <p className="current-status__item-subtitle">Соответствие</p>
          <h3 className="current-status__item-title">{user.currentMatch}</h3>
        </li>
      </ul>
      <Button onClick={handleButton} place="content" textButton="Прокачаться" />
    </section>
  );
}

export { CurrentStatus };
