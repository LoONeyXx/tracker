import './ModuleCard.sass';

function ModuleCard({ data }) {
  return (
    <article className="module-card">
      <div className="module-card__top-wrapper">
        <p className="module-card__occupation">{data.profession}</p>
        <div className="module-card__separator" />
        <p className="module-card__type">{data.type}</p>
        <div className="module-card__separator" />
        <p className="module-card__level">{data.level}</p>
      </div>
      <h2 className="module-card__title">{data.title}</h2>
      <img
        src={data.image}
        alt={`Изображение к модулю «${data.title}»`}
        className="module-card__image"
      />
      {!data.monthly_price && (
        <p className="module-card__price module-card__price_type_no-monthly-price">
          {typeof data?.price === 'number' && data?.price !== 0
            ? `${data.price.toLocaleString('ru-RU')} ₽`
            : 'Бесплатно'}
        </p>
      )}
      {data.monthly_price && (
        <div className="module-card__price-wrapper">
          <p className="module-card__price">
            от {data.monthly_price.toLocaleString('ru-RU')} ₽/месяц
          </p>
          <p className="module-card__full-price">
            или сразу {data.price.toLocaleString('ru-RU')}
          </p>
        </div>
      )}
    </article>
  );
}

export { ModuleCard };
