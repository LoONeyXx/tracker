import { PromoNotification } from '../PromoNotification/PromoNotification';
import { Board } from '../Board/Board';
import './Desk.sass';

function Desk() {
  return (
    <main className="content content_desk">
      <PromoNotification />
      <Board />
    </main>
  );
}
export { Desk };
