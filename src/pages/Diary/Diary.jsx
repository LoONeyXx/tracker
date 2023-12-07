import { Header } from '../../components/Header/Header';
import { SidePanel } from '../../components/SidePanel/SidePanel';
import { Desk } from '../../components/Desk/Desk';
import './Diary.sass';

function Diary() {
  return (
    <>
      <Header />
      <SidePanel />
      <Desk />
    </>
  );
}

export { Diary };
