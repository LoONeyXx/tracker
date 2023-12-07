import { Header } from '../../components/Header/Header';
import { SidePanel } from '../../components/SidePanel/SidePanel';
import { ModuleCard } from '../../components/ModuleCard/ModuleCard';
import svgExport18 from '../../images/svgexport-18.svg';
import svgExport6 from '../../images/svgexport-6.svg';

function Recommendation() {
  return (
    <>
      <Header />
      <SidePanel />
      <main className="content">
        <ModuleCard
          data={{
            profession: 'Дизайн',
            type: 'Урок',
            level: 'С нуля',
            title: 'Цикл продуктовой разработки',
            image: svgExport18,
            price: 0,
          }}
        />

        <ModuleCard
          data={{
            profession: 'Дизайн',
            type: 'Модуль',
            level: 'С опытом',
            title: 'Личность бренда',
            image: svgExport6,
            monthly_price: 7201,
            price: 140_000,
          }}
        />
      </main>
    </>
  );
}

export { Recommendation };
