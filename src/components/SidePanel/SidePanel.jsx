import { SideCurrentStage } from '../SideCurrentStage/SideCurrentStage';
import { SideMenu } from '../SideMenu/SideMenu';
import './SidePanel.sass';

function SidePanel() {
  return (
    <aside className="side-panel">
      <SideCurrentStage
        currentUser={{ name: 'Sergey', stage: 'Аккселерация' }}
      />
      <SideMenu />
    </aside>
  );
}

export { SidePanel };
