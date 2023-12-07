import { BoardCard } from '../BoardCard/BoardCard';
import './Board.sass';

function Board() {
  return (
    <section className="board">
      <div className="board__column-wrapper">
        <div className="board__title-wrapper">
          <h2 className="board__title">Отклики на вакансии</h2>
          <p className="board__subtitle">3 вакансии</p>
        </div>
        <div className="board__cards-wrapper">
          <button className="board__add-card-button" type="button">
            <div className="board__add-card-button-wrapper">
              <div className="board__add-card-icon" />
              <p className="board__add-card-text">Добавить новый отклик</p>
            </div>
          </button>
          <BoardCard />
          <BoardCard isPartnered={true} />
          <BoardCard isPartnered={true} />
        </div>
      </div>
      <div className="board__column-wrapper">
        <div className="board__title-wrapper">
          <h2 className="board__title">Тестовые задания</h2>
          <p className="board__subtitle">0 вакансий</p>
        </div>
      </div>
      <div className="board__column-wrapper">
        <div className="board__title-wrapper">
          <h2 className="board__title">Технические собеседования</h2>
          <p className="board__subtitle">0 вакансий</p>
        </div>
      </div>
      <div className="board__column-wrapper">
        <div className="board__title-wrapper">
          <h2 className="board__title">Технические собеседования</h2>
          <p className="board__subtitle">0 вакансий</p>
        </div>
      </div>
    </section>
  );
}

export { Board };
