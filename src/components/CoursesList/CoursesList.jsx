import './CoursesList.sass';
import { ModuleCard } from '../ModuleCard/ModuleCard';
function CoursesList({ coursesList }) {
  return (
    <ul className="courses-list">
      {coursesList.map((card, index) => (
        <li key={index} className="courses-list__item">
          <ModuleCard data={card} />
        </li>
      ))}
    </ul>
  );
}
export { CoursesList };
