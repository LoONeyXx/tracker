import { Circle } from './Circle/Circle';
import { Gray } from './Peace/Gray';
import { Red } from './Peace/Red';
import { Pink } from './Peace/Pink';
import { Yellow } from './Peace/Yellow';
import { Green } from './Peace/Green';
import { Purple } from './Peace/Purple';
import './Peace/Peace.sass';
import { useContext } from 'react';
import { activePeaceContext } from '../App/App';
function DiagramIllustrationForJunior({ statistics }) {
  const { handlePeace, activePeace } = useContext(activePeaceContext);
  const redPercent = parseInt(statistics.red.percent);
  const pinkPercent = parseInt(statistics.pink.percent);
  const grayPercent = parseInt(statistics.gray.percent);
  const yellowPercent = parseInt(statistics.yellow.percent);
  const greenPercent = parseInt(statistics.green.percent);
  const purplePercent = parseInt(statistics.purple.percent);

  return (
    <Circle radius="first">
      {pinkPercent === 100 && (
        <Pink onClick={handlePeace} radius="first" level="junior" />
      )}
      {grayPercent === 100 && (
        <Gray onClick={handlePeace} radius="first" level="junior" />
      )}
      {redPercent === 100 && (
        <Red onClick={handlePeace} radius="first" level="junior" />
      )}
      {yellowPercent === 100 && (
        <Yellow onClick={handlePeace} radius="first" level="junior" />
      )}
      {greenPercent === 100 && (
        <Green onClick={handlePeace} radius="first" level="junior" />
      )}
      {purplePercent === 100 && (
        <Purple onClick={handlePeace} radius="first" level="junior" />
      )}
      <Circle radius="second">
        {pinkPercent >= 80 && (
          <Pink onClick={handlePeace} radius="second" level="junior" />
        )}
        {grayPercent >= 80 && (
          <Gray onClick={handlePeace} radius="second" level="junior" />
        )}
        {redPercent >= 80 && (
          <Red onClick={handlePeace} radius="second" level="junior" />
        )}
        {yellowPercent >= 80 && (
          <Yellow onClick={handlePeace} radius="second" level="junior" />
        )}
        {greenPercent >= 80 && (
          <Green onClick={handlePeace} radius="second" level="junior" />
        )}
        {purplePercent >= 80 && (
          <Purple onClick={handlePeace} radius="second" level="junior" />
        )}
        <Circle radius="third">
          {pinkPercent >= 60 && (
            <Pink onClick={handlePeace} radius="third" level="junior" />
          )}
          {grayPercent >= 60 && (
            <Gray onClick={handlePeace} radius="third" level="junior" />
          )}
          {redPercent >= 60 && (
            <Red onClick={handlePeace} radius="third" level="junior" />
          )}
          {yellowPercent >= 60 && (
            <Yellow onClick={handlePeace} radius="third" level="junior" />
          )}
          {greenPercent >= 60 && (
            <Green onClick={handlePeace} radius="third" level="junior" />
          )}
          {purplePercent >= 60 && (
            <Purple onClick={handlePeace} radius="third" level="junior" />
          )}
          <Circle radius="fourth">
            {pinkPercent >= 40 && (
              <Pink onClick={handlePeace} radius="fourth" level="junior" />
            )}
            {grayPercent >= 40 && (
              <Gray onClick={handlePeace} radius="fourth" level="junior" />
            )}
            {redPercent >= 40 && (
              <Red onClick={handlePeace} radius="fourth" level="junior" />
            )}
            {yellowPercent >= 40 && (
              <Yellow onClick={handlePeace} radius="fourth" level="junior" />
            )}
            {greenPercent >= 40 && (
              <Green onClick={handlePeace} radius="fourth" level="junior" />
            )}
            {purplePercent >= 40 && (
              <Purple onClick={handlePeace} radius="fourth" level="junior" />
            )}
            <Circle onClick={handlePeace} radius="fifth">
              {pinkPercent >= 20 && (
                <Pink onClick={handlePeace} radius="fifth" level="junior" />
              )}
              {grayPercent >= 20 && (
                <Gray onClick={handlePeace} radius="fifth" level="junior" />
              )}
              {redPercent >= 20 && (
                <Red onClick={handlePeace} radius="fifth" level="junior" />
              )}
              {yellowPercent >= 20 && (
                <Yellow onClick={handlePeace} radius="fifth" level="junior" />
              )}
              {greenPercent >= 20 && (
                <Green onClick={handlePeace} radius="fifth" level="junior" />
              )}
              {purplePercent >= 20 && (
                <Purple onClick={handlePeace} radius="fifth" level="junior" />
              )}
            </Circle>
          </Circle>
        </Circle>
      </Circle>
    </Circle>
  );
}

export { DiagramIllustrationForJunior };
