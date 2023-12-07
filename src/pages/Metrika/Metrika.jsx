import { Header } from '../../components/Header/Header';
import { SidePanel } from '../../components/SidePanel/SidePanel';
import { PromoNotification } from '../../components/PromoNotification/PromoNotification';

function Metrika() {
  return (
    <>
      <Header />
      <SidePanel />
      <main className="content">
        <PromoNotification />
      </main>
    </>
  );
}

export { Metrika };
