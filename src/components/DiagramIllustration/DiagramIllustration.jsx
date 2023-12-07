import { Circle } from './Circle/Circle';
import { Gray } from './Peace/Gray';
import { Red } from './Peace/Red';
import { Pink } from './Peace/Pink';
import { LightBlue } from './Peace/LightBlue';
import { Yellow } from './Peace/Yellow';
import { Green } from './Peace/Green';
import { Blue } from './Peace/Blue';
import { Purple } from './Peace/Purple';
import './Peace/Peace.sass';
import { useContext } from 'react';
import { activePeaceContext } from '../App/App';

function DiagramIllustration({ onHandlePeace }) {
  const { handlePeace } = useContext(activePeaceContext);

  return (
    <Circle radius="first">
      <Pink onClick={handlePeace} radius="first" />
      <Gray onClick={handlePeace} radius="first" />
      <Red onClick={handlePeace} radius="first" />
      <LightBlue onClick={handlePeace} radius="first" />
      <Yellow onClick={handlePeace} radius="first" />
      <Green onClick={handlePeace} radius="first" />
      <Blue onClick={handlePeace} radius="first" />
      <Purple onClick={handlePeace} radius="first" />
      <Circle radius="second">
        <Pink onClick={handlePeace} radius="second" />
        <Gray onClick={handlePeace} radius="second" />
        <Red onClick={handlePeace} radius="second" />
        <LightBlue onClick={handlePeace} radius="second" />
        <Yellow onClick={handlePeace} radius="second" />
        <Green onClick={handlePeace} radius="second" />
        <Blue onClick={handlePeace} radius="second" />
        <Purple onClick={handlePeace} radius="second" />
        <Circle radius="third">
          <Pink onClick={handlePeace} radius="third" />
          <Gray onClick={handlePeace} radius="third" />
          <Red onClick={handlePeace} radius="third" />
          <LightBlue onClick={handlePeace} radius="third" />
          <Yellow onClick={handlePeace} radius="third" />
          <Green onClick={handlePeace} radius="third" />
          <Blue onClick={handlePeace} radius="third" />
          <Purple onClick={handlePeace} radius="third" />
          <Circle radius="fourth">
            <Pink onClick={handlePeace} radius="fourth" />
            <Gray onClick={handlePeace} radius="fourth" />
            <Red onClick={handlePeace} radius="fourth" />
            <LightBlue onClick={handlePeace} radius="fourth" />
            <Yellow onClick={handlePeace} radius="fourth" />
            <Green onClick={handlePeace} radius="fourth" />
            <Blue onClick={handlePeace} radius="fourth" />
            <Purple onClick={handlePeace} radius="fourth" />
            <Circle onClick={handlePeace} radius="fifth">
              <Pink onClick={handlePeace} radius="fifth" />
              <Gray onClick={handlePeace} radius="fifth" />
              <Red onClick={handlePeace} radius="fifth" />
              <LightBlue onClick={handlePeace} radius="fifth" />
              <Yellow onClick={handlePeace} radius="fifth" />
              <Green onClick={handlePeace} radius="fifth" />
              <Blue onClick={handlePeace} radius="fifth" />
              <Purple onClick={handlePeace} radius="fifth" />
            </Circle>
          </Circle>
        </Circle>
      </Circle>
    </Circle>
  );
}

export { DiagramIllustration };
