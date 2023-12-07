import './Reccomendations.sass';
import { TabMenu } from '../../components/TabMenu/TabMenu';
import { FilterCourses } from '../../components/FilterCourses/FilterCourses';
import { DropDownMenuDirection } from '../../components/DropDownMenuDirection/DropDownMenuDirection';
import { ModuleCard } from '../../components/ModuleCard/ModuleCard';
import { useEffect, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { getLenghtFilters } from '../../store/filterCoursesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CoursesList } from '../../components/CoursesList/CoursesList';
function Reccomendations(props) {
  const initialCards = useSelector(state => state.courses.coursesList);
  const filterCount = useSelector(state => state.filterCourses.countFilter);
  const [recommendFilter, setReccomendFilter] = useState({
    direction: 'Направление',
  });
  const dispatch = useDispatch();
  useEffect(() => console.log(filterCount), [filterCount]);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  function handleOpenFilter() {
    setIsOpenFilter(true);
  }
  function handleClose() {
    setIsOpenFilter(false);
  }
  function handleFilter(e) {
    setReccomendFilter(prev => ({
      ...prev,
      [e.currentTarget.type]: e.currentTarget.id,
    }));
  }
  return (
    <main className="content content_recommendations">
      <section className="recommendations">
        <div className="recommendations__title-zone">
          <h2 className="recommendations__title recommendations__title_level">
            Middle
          </h2>
          <h2 className="recommendations__title recommendations__title_profession">
            Дизайнер
          </h2>
          <h2 className="recommendations__title recommendations__title_percent">
            55%
          </h2>
        </div>
        <TabMenu />
        <div className="recommendations__filter-zone">
          <DropDownMenuDirection
            currentItem={recommendFilter.direction}
            onClick={handleFilter}
          />
          <Button
            onClick={handleOpenFilter}
            place="notification"
            textButton="Фильтр"
            modification="filter"
          >
            {filterCount !== 0 && (
              <span className="recommendations__filter-count">
                {filterCount}
              </span>
            )}
          </Button>
        </div>

        <CoursesList coursesList={initialCards} />
      </section>
      <div className={`filter-wrapper`}>
        <FilterCourses onClose={handleClose} isOpen={isOpenFilter} />
      </div>
    </main>
  );
}
export default Reccomendations;
