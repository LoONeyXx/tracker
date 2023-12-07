import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function Blue({ radius, onClick, level = 'middle' }) {
  const { activePeace } = useContext(activePeaceContext);
  const isActive = activePeace === 'blue';
  const strokeColor = isActive ? '#1E75FF' : '#fff';

  function handleClick() {
    onClick('blue');
  }

  return (
    <>
      {radius === 'fifth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="59"
          height="47"
          viewBox="0 0 59 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12004" fill="white">
            <path d="M32.8406 43.8406C35.9648 46.9648 41.0716 46.9901 43.8192 43.53C47.8574 38.4444 51.1766 32.8113 53.6716 26.7878C56.1666 20.7644 57.8028 14.4342 58.5434 7.98267C59.0472 3.59322 55.4183 0 51 0H8.31371C1.18647 0 -2.38287 8.61713 2.65685 13.6569L32.8406 43.8406Z" />
          </mask>
          <path
            d="M32.8406 43.8406C35.9648 46.9648 41.0716 46.9901 43.8192 43.53C47.8574 38.4444 51.1766 32.8113 53.6716 26.7878C56.1666 20.7644 57.8028 14.4342 58.5434 7.98267C59.0472 3.59322 55.4183 0 51 0H8.31371C1.18647 0 -2.38287 8.61713 2.65685 13.6569L32.8406 43.8406Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12004)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="100"
          height="76"
          viewBox="0 0 100 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11984" fill="white">
            <path d="M61.832 72.832C64.9562 75.9562 70.046 75.9741 72.9371 72.6331C80.7052 63.6561 86.9944 53.4774 91.5506 42.4779C96.1068 31.4783 98.857 19.8337 99.7118 7.99316C100.03 3.58635 96.4183 0 92 0H8.31371C1.18647 0 -2.38287 8.61713 2.65685 13.6569L61.832 72.832Z" />
          </mask>
          <path
            d="M61.832 72.832C64.9562 75.9562 70.046 75.9741 72.9371 72.6331C80.7052 63.6561 86.9944 53.4774 91.5506 42.4779C96.1068 31.4783 98.857 19.8337 99.7118 7.99316C100.03 3.58635 96.4183 0 92 0H8.31371C1.18647 0 -2.38287 8.61713 2.65685 13.6569L61.832 72.832Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11984)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="139"
          height="103"
          viewBox="0 0 139 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11994" fill="white">
            <path d="M89.4092 100.409C92.5334 103.533 97.6163 103.547 100.569 100.261C111.925 87.6241 121.065 73.1347 127.582 57.4025C134.098 41.6704 137.881 24.9618 138.787 7.99635C139.022 3.58435 135.418 0 131 0H8.31371C1.18646 0 -2.38287 8.61714 2.65685 13.6569L89.4092 100.409Z" />
          </mask>
          <path
            d="M89.4092 100.409C92.5334 103.533 97.6163 103.547 100.569 100.261C111.925 87.6241 121.065 73.1347 127.582 57.4025C134.098 41.6704 137.881 24.9618 138.787 7.99635C139.022 3.58435 135.418 0 131 0H8.31371C1.18646 0 -2.38287 8.61714 2.65685 13.6569L89.4092 100.409Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11994)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="178"
          height="131"
          viewBox="0 0 178 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11968" fill="white">
            <path d="M116.986 127.986C120.111 131.111 125.19 131.122 128.179 127.868C143.137 111.587 155.137 92.7916 163.613 72.3272C172.09 51.8628 176.895 30.0872 177.831 7.9978C178.018 3.58348 174.418 0 170 0H8.31371C1.18648 0 -2.38286 8.61714 2.65686 13.6569L116.986 127.986Z" />
          </mask>
          <path
            d="M116.986 127.986C120.111 131.111 125.19 131.122 128.179 127.868C143.137 111.587 155.137 92.7916 163.613 72.3272C172.09 51.8628 176.895 30.0872 177.831 7.9978C178.018 3.58348 174.418 0 170 0H8.31371C1.18648 0 -2.38286 8.61714 2.65686 13.6569L116.986 127.986Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11968)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="218"
          height="159"
          viewBox="0 0 218 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_8711" fill="white">
            <path d="M145.271 156.271C148.395 159.395 153.471 159.404 156.484 156.173C175.144 136.162 190.081 112.952 200.568 87.6345C211.055 62.3167 216.905 35.3425 217.86 7.99852C218.015 3.58293 214.418 0 210 0H8.31371C1.18646 0 -2.38286 8.61714 2.65686 13.6569L145.271 156.271Z" />
          </mask>
          <path
            d="M145.271 156.271C148.395 159.395 153.471 159.404 156.484 156.173C175.144 136.162 190.081 112.952 200.568 87.6345C211.055 62.3167 216.905 35.3425 217.86 7.99852C218.015 3.58293 214.418 0 210 0H8.31371C1.18646 0 -2.38286 8.61714 2.65686 13.6569L145.271 156.271Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_8711)"
          />
        </svg>
      )}
      {radius === 'fifth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="59"
          height="47"
          viewBox="0 0 59 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12004" fill="white">
            <path d="M32.8406 43.8406C35.9648 46.9648 41.0716 46.9901 43.8192 43.53C47.8574 38.4444 51.1766 32.8113 53.6716 26.7878C56.1666 20.7644 57.8028 14.4342 58.5434 7.98267C59.0472 3.59322 55.4183 0 51 0H8.31371C1.18647 0 -2.38287 8.61713 2.65685 13.6569L32.8406 43.8406Z" />
          </mask>
          <path
            d="M32.8406 43.8406C35.9648 46.9648 41.0716 46.9901 43.8192 43.53C47.8574 38.4444 51.1766 32.8113 53.6716 26.7878C56.1666 20.7644 57.8028 14.4342 58.5434 7.98267C59.0472 3.59322 55.4183 0 51 0H8.31371C1.18647 0 -2.38287 8.61713 2.65685 13.6569L32.8406 43.8406Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12004)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="100"
          height="76"
          viewBox="0 0 100 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11984" fill="white">
            <path d="M61.832 72.832C64.9562 75.9562 70.046 75.9741 72.9371 72.6331C80.7052 63.6561 86.9944 53.4774 91.5506 42.4779C96.1068 31.4783 98.857 19.8337 99.7118 7.99316C100.03 3.58635 96.4183 0 92 0H8.31371C1.18647 0 -2.38287 8.61713 2.65685 13.6569L61.832 72.832Z" />
          </mask>
          <path
            d="M61.832 72.832C64.9562 75.9562 70.046 75.9741 72.9371 72.6331C80.7052 63.6561 86.9944 53.4774 91.5506 42.4779C96.1068 31.4783 98.857 19.8337 99.7118 7.99316C100.03 3.58635 96.4183 0 92 0H8.31371C1.18647 0 -2.38287 8.61713 2.65685 13.6569L61.832 72.832Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11984)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="139"
          height="103"
          viewBox="0 0 139 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11994" fill="white">
            <path d="M89.4092 100.409C92.5334 103.533 97.6163 103.547 100.569 100.261C111.925 87.6241 121.065 73.1347 127.582 57.4025C134.098 41.6704 137.881 24.9618 138.787 7.99635C139.022 3.58435 135.418 0 131 0H8.31371C1.18646 0 -2.38287 8.61714 2.65685 13.6569L89.4092 100.409Z" />
          </mask>
          <path
            d="M89.4092 100.409C92.5334 103.533 97.6163 103.547 100.569 100.261C111.925 87.6241 121.065 73.1347 127.582 57.4025C134.098 41.6704 137.881 24.9618 138.787 7.99635C139.022 3.58435 135.418 0 131 0H8.31371C1.18646 0 -2.38287 8.61714 2.65685 13.6569L89.4092 100.409Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11994)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="178"
          height="131"
          viewBox="0 0 178 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11968" fill="white">
            <path d="M116.986 127.986C120.111 131.111 125.19 131.122 128.179 127.868C143.137 111.587 155.137 92.7916 163.613 72.3272C172.09 51.8628 176.895 30.0872 177.831 7.9978C178.018 3.58348 174.418 0 170 0H8.31371C1.18648 0 -2.38286 8.61714 2.65686 13.6569L116.986 127.986Z" />
          </mask>
          <path
            d="M116.986 127.986C120.111 131.111 125.19 131.122 128.179 127.868C143.137 111.587 155.137 92.7916 163.613 72.3272C172.09 51.8628 176.895 30.0872 177.831 7.9978C178.018 3.58348 174.418 0 170 0H8.31371C1.18648 0 -2.38286 8.61714 2.65686 13.6569L116.986 127.986Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11968)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="218"
          height="159"
          viewBox="0 0 218 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_8711" fill="white">
            <path d="M145.271 156.271C148.395 159.395 153.471 159.404 156.484 156.173C175.144 136.162 190.081 112.952 200.568 87.6345C211.055 62.3167 216.905 35.3425 217.86 7.99852C218.015 3.58293 214.418 0 210 0H8.31371C1.18646 0 -2.38286 8.61714 2.65686 13.6569L145.271 156.271Z" />
          </mask>
          <path
            d="M145.271 156.271C148.395 159.395 153.471 159.404 156.484 156.173C175.144 136.162 190.081 112.952 200.568 87.6345C211.055 62.3167 216.905 35.3425 217.86 7.99852C218.015 3.58293 214.418 0 210 0H8.31371C1.18646 0 -2.38286 8.61714 2.65686 13.6569L145.271 156.271Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_8711)"
          />
        </svg>
      )}
    </>
  );
}

export { Blue };
