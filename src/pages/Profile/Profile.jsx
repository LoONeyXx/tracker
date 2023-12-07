import { CurrentStatus } from '../../components/CurrentStatus/CurrentStatus';
import { DiagramJunior } from '../../components/DiagramJunior/DiagramJunior';
import { DiagramMiddle } from '../../components/DiagramMiddle/DiagramMiddle';
import { PromoNotification } from '../../components/PromoNotification/PromoNotification';

import './Profile.sass';

function Profile({ level = 'junior' }) {
  // console.log(level);
  return (
    <main className="content profile content_profile">
      <PromoNotification />
      <div className="profile__two-columns">
        <CurrentStatus />
        {level === 'junior' && <DiagramMiddle />}
        {level === 'middle' && <DiagramJunior />}
      </div>
    </main>
  );
}

export { Profile };
