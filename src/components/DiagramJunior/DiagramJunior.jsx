import './DiagramJunior.sass';
import { DiagramList } from '../DiagramList/DiagramList';
import { DiagramItem } from '../DiagramItem/DiagramItem';
import { Diagram } from '../Diagram/Diagram';
import { DiagramIllustrationForJunior } from '../DiagramIllustration/DiagramIllustrationForJunior';
import { useContext, useState } from 'react';
import { activePeaceContext } from '../App/App';

function DiagramJunior() {
  const { activePeace } = useContext(activePeaceContext);
  const [statistics, setStatistics] = useState({
    yellow: {
      name: 'UX-исследования',
      percent: '40%',
    },
    green: {
      name: 'UI-дизайн',
      percent: '70%',
    },
    red: {
      name: 'Продукт',
      percent: '20%',
    },
    gray: {
      name: 'Коммуникация',
      percent: '80%',
    },
    pink: {
      name: 'Про активность',
      percent: '100%',
    },
    purple: {
      name: 'Пипл менеджмент',
      percent: '60%',
    },
  });
  console.log(statistics);
  return (
    <Diagram>
      <DiagramIllustrationForJunior statistics={statistics} />
      <DiagramList>
        {activePeace ? (
          <>
            <DiagramItem
              value={'20%'}
              title={statistics[activePeace].name}
              color={activePeace}
              isActive={true}
            />
          </>
        ) : (
          <>
            <DiagramItem
              value={statistics.yellow.percent}
              title={statistics.yellow.name}
              color="yellow"
            />
            <DiagramItem
              value={statistics.green.percent}
              title={statistics.green.name}
              color="green"
            />
            <DiagramItem
              value={statistics.red.percent}
              title={statistics.red.name}
              color="red"
            />
            <DiagramItem
              value={statistics.gray.percent}
              title={statistics.gray.name}
              color="gray"
            />
            <DiagramItem
              value={statistics.pink.percent}
              title={statistics.pink.name}
              color="pink"
            />
            <DiagramItem
              value={statistics.purple.percent}
              title={statistics.purple.name}
              color="purple"
            />
          </>
        )}
      </DiagramList>
    </Diagram>
  );
}

export { DiagramJunior };
