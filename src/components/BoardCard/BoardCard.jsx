import './BoardCard.sass';

function BoardCard({ isPartnered }) {
  return (
    <div className="board-card">
      <div className="board-card__description-wrapper">
        <div className="board-card__title-wrapper">
          <h3 className="board-card__title">Газпром</h3>
          <p className="board-card__subtitle">Продуктовый и UX/UI дизайн</p>
        </div>
        {isPartnered && <div className="board-card__partner-icon" />}
      </div>
      <p className="board-card__date">16 окт.</p>
    </div>
  );
}

export { BoardCard };
