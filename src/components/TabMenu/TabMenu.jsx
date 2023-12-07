import { TabMenuItem } from '../TabMenuItem/TabMenuItem';
import './TabMenu.sass';

function TabMenu(props) {
  return (
    <ul className="tab-menu">
      <TabMenuItem isActive={true} isDisabled={false} text="Курсы" />
      <TabMenuItem isActive={false} isDisabled={false} text="Практика" />
      <TabMenuItem isActive={false} isDisabled={false} text="Статьи" />
      <TabMenuItem
        isActive={false}
        isDisabled={true}
        text="Встреча с наставником"
      />
      <TabMenuItem isActive={false} isDisabled={true} text="Пройти тест" />
    </ul>
  );
}
export { TabMenu };
