import { Link } from 'react-router-dom';
import './Diagram.sass';

function Diagram({ children }) {
  return (
    <section className="diagram">
      <h2 className="diagram__title">
        Уровень твоих навыков на основе оценки диплома
      </h2>
      <div className="diagram__statistic-zone">{children}</div>
      <p className="diagram__footer-text">
        Для более точной оценки необходимо пройти тестирование или назначить
        встречу с наставником
        <Link to="/make-appointment" className="diagram__link-more">
          Узнать больше
        </Link>
      </p>
    </section>
  );
}

export { Diagram };
