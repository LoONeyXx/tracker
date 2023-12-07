import './DiagramItem.sass';

function DiagramItem({
  color,
  title,
  value,
  isActive = false,
  description = null,
}) {
  return (
    <li className="diagram-item">
      <div className="diagram-item__title-zone">
        <div
          className={`diagram-item__color-circle diagram-item__color-circle_${color}`}
        />
        <h3 className="diagram-item__title">
          {title}
          <span className="diagram-item__value">{value}</span>
        </h3>
      </div>
      {isActive && (
        <p className="diagram-item__description">
          {description ||
            'Изучена предметная область. Проведен разносторонний анализ, представлены выводы. Аргументация полная и понятнаяИзучена предметная область. Проведен разносторонний анализ, представлены выводы. Аргументация полная и понятнаяИзучена предметная область. Проведен разносторонний анализ, представлены выводы. Аргументация полная и понятнаяИзучена предметная область. Проведен разносторонний анализ, представлены выводы. Аргументация полная и понятнаяИзучена предметная область. Проведен разносторонний анализ, представлены выводы. Аргументация полная и понятная'}
        </p>
      )}
    </li>
  );
}

export { DiagramItem };
