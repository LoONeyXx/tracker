import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function LightBlue({ radius, onClick, level = 'middle' }) {
  const { activePeace } = useContext(activePeaceContext);
  const isActive = activePeace === 'light-blue';
  const strokeColor = isActive ? '#37ABFF' : '#fff';

  function handleClick() {
    onClick('light-blue');
  }

  return (
    <>
      {radius === 'fifth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="47"
          height="59"
          viewBox="0 0 47 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12009" fill="white">
            <path d="M47 8C47 3.58172 43.4063 -0.0473044 39.0168 0.456461C26.0276 1.94719 13.7091 7.04969 3.47025 15.1803C0.0102158 17.9279 0.0351925 23.0352 3.15939 26.1594L33.3431 56.3431C38.3829 61.3829 47 57.8135 47 50.6863V8Z" />
          </mask>
          <path
            d="M47 8C47 3.58172 43.4063 -0.0473044 39.0168 0.456461C26.0276 1.94719 13.7091 7.04969 3.47025 15.1803C0.0102158 17.9279 0.0351925 23.0352 3.15939 26.1594L33.3431 56.3431C38.3829 61.3829 47 57.8135 47 50.6863V8Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12009)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="76"
          height="100"
          viewBox="0 0 76 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11989" fill="white">
            <path d="M76 8C76 3.58172 72.4133 -0.0300392 68.0065 0.287962C44.1408 2.01014 21.4604 11.4047 3.36705 27.0625C0.0261002 29.9537 0.0438194 35.0438 3.16801 38.168L62.3431 97.3431C67.3829 102.383 76 98.8135 76 91.6863V8Z" />
          </mask>
          <path
            d="M76 8C76 3.58172 72.4133 -0.0300392 68.0065 0.287962C44.1408 2.01014 21.4604 11.4047 3.36705 27.0625C0.0261002 29.9537 0.0438194 35.0438 3.16801 38.168L62.3431 97.3431C67.3829 102.383 76 98.8135 76 91.6863V8Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11989)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="103"
          height="139"
          viewBox="0 0 103 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11999" fill="white">
            <path d="M103 8C103 3.58172 99.4151 -0.0222595 95.0031 0.213118C60.7907 2.03832 28.2218 15.5288 2.73937 38.43C-0.546822 41.3833 -0.53334 46.4666 2.59085 49.5908L89.3431 136.343C94.3829 141.383 103 137.814 103 130.686V8Z" />
          </mask>
          <path
            d="M103 8C103 3.58172 99.4151 -0.0222595 95.0031 0.213118C60.7907 2.03832 28.2218 15.5288 2.73937 38.43C-0.546822 41.3833 -0.53334 46.4666 2.59085 49.5908L89.3431 136.343C94.3829 141.383 103 137.814 103 130.686V8Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11999)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="131"
          height="178"
          viewBox="0 0 131 178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11973" fill="white">
            <path d="M131 8C131 3.58173 127.415 -0.0176652 123.001 0.169166C78.443 2.05503 35.9734 19.6465 3.13255 49.8203C-0.12096 52.8096 -0.1105 57.8895 3.01369 61.0136L117.343 175.343C122.383 180.383 131 176.814 131 169.686V8Z" />
          </mask>
          <path
            d="M131 8C131 3.58173 127.415 -0.0176652 123.001 0.169166C78.443 2.05503 35.9734 19.6465 3.13255 49.8203C-0.12096 52.8096 -0.1105 57.8895 3.01369 61.0136L117.343 175.343C122.383 180.383 131 176.814 131 169.686V8Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11973)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="159"
          height="218"
          viewBox="0 0 159 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_11984" fill="white">
            <path d="M159 8.00001C159 3.58173 155.415 -0.0145756 151 0.139631C95.8313 2.06629 43.2007 23.8666 2.82825 61.5143C-0.403076 64.5276 -0.394768 69.6052 2.72943 72.7294L145.343 215.343C150.383 220.383 159 216.814 159 209.686V8.00001Z" />
          </mask>
          <path
            d="M159 8.00001C159 3.58173 155.415 -0.0145756 151 0.139631C95.8313 2.06629 43.2007 23.8666 2.82825 61.5143C-0.403076 64.5276 -0.394768 69.6052 2.72943 72.7294L145.343 215.343C150.383 220.383 159 216.814 159 209.686V8.00001Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_11984)"
          />
        </svg>
      )}
      {radius === 'fifth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="47"
          height="59"
          viewBox="0 0 47 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12009" fill="white">
            <path d="M47 8C47 3.58172 43.4063 -0.0473044 39.0168 0.456461C26.0276 1.94719 13.7091 7.04969 3.47025 15.1803C0.0102158 17.9279 0.0351925 23.0352 3.15939 26.1594L33.3431 56.3431C38.3829 61.3829 47 57.8135 47 50.6863V8Z" />
          </mask>
          <path
            d="M47 8C47 3.58172 43.4063 -0.0473044 39.0168 0.456461C26.0276 1.94719 13.7091 7.04969 3.47025 15.1803C0.0102158 17.9279 0.0351925 23.0352 3.15939 26.1594L33.3431 56.3431C38.3829 61.3829 47 57.8135 47 50.6863V8Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12009)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="76"
          height="100"
          viewBox="0 0 76 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11989" fill="white">
            <path d="M76 8C76 3.58172 72.4133 -0.0300392 68.0065 0.287962C44.1408 2.01014 21.4604 11.4047 3.36705 27.0625C0.0261002 29.9537 0.0438194 35.0438 3.16801 38.168L62.3431 97.3431C67.3829 102.383 76 98.8135 76 91.6863V8Z" />
          </mask>
          <path
            d="M76 8C76 3.58172 72.4133 -0.0300392 68.0065 0.287962C44.1408 2.01014 21.4604 11.4047 3.36705 27.0625C0.0261002 29.9537 0.0438194 35.0438 3.16801 38.168L62.3431 97.3431C67.3829 102.383 76 98.8135 76 91.6863V8Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11989)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="103"
          height="139"
          viewBox="0 0 103 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11999" fill="white">
            <path d="M103 8C103 3.58172 99.4151 -0.0222595 95.0031 0.213118C60.7907 2.03832 28.2218 15.5288 2.73937 38.43C-0.546822 41.3833 -0.53334 46.4666 2.59085 49.5908L89.3431 136.343C94.3829 141.383 103 137.814 103 130.686V8Z" />
          </mask>
          <path
            d="M103 8C103 3.58172 99.4151 -0.0222595 95.0031 0.213118C60.7907 2.03832 28.2218 15.5288 2.73937 38.43C-0.546822 41.3833 -0.53334 46.4666 2.59085 49.5908L89.3431 136.343C94.3829 141.383 103 137.814 103 130.686V8Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11999)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="131"
          height="178"
          viewBox="0 0 131 178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11973" fill="white">
            <path d="M131 8C131 3.58173 127.415 -0.0176652 123.001 0.169166C78.443 2.05503 35.9734 19.6465 3.13255 49.8203C-0.12096 52.8096 -0.1105 57.8895 3.01369 61.0136L117.343 175.343C122.383 180.383 131 176.814 131 169.686V8Z" />
          </mask>
          <path
            d="M131 8C131 3.58173 127.415 -0.0176652 123.001 0.169166C78.443 2.05503 35.9734 19.6465 3.13255 49.8203C-0.12096 52.8096 -0.1105 57.8895 3.01369 61.0136L117.343 175.343C122.383 180.383 131 176.814 131 169.686V8Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11973)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="159"
          height="218"
          viewBox="0 0 159 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_11984" fill="white">
            <path d="M159 8.00001C159 3.58173 155.415 -0.0145756 151 0.139631C95.8313 2.06629 43.2007 23.8666 2.82825 61.5143C-0.403076 64.5276 -0.394768 69.6052 2.72943 72.7294L145.343 215.343C150.383 220.383 159 216.814 159 209.686V8.00001Z" />
          </mask>
          <path
            d="M159 8.00001C159 3.58173 155.415 -0.0145756 151 0.139631C95.8313 2.06629 43.2007 23.8666 2.82825 61.5143C-0.403076 64.5276 -0.394768 69.6052 2.72943 72.7294L145.343 215.343C150.383 220.383 159 216.814 159 209.686V8.00001Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_11984)"
          />
        </svg>
      )}
    </>
  );
}

export { LightBlue };
