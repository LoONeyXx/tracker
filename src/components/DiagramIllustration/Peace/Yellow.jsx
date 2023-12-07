import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function Yellow({ radius, onClick, level = 'middle' }) {
  const { activePeace } = useContext(activePeaceContext);
  const isActive = activePeace === 'yellow';
  const strokeColor = isActive ? '#FCA53E' : '#fff';

  function handleClick(e) {
    console.log(e.target);
    onClick('yellow');
  }

  return (
    <>
      {radius === 'fifth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_yellow peace_radius_${radius}`}
          width="47"
          height="59"
          viewBox="0 0 47 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12010" fill="white">
            <path d="M43.8406 26.1594C46.9648 23.0352 46.9898 17.9279 43.5298 15.1803C33.2909 7.04969 20.9724 1.94719 7.98317 0.456462C3.5937 -0.0473041 0 3.58172 0 8V50.6863C0 57.8135 8.61713 61.3829 13.6569 56.3431L43.8406 26.1594Z" />
          </mask>
          <path
            d="M43.8406 26.1594C46.9648 23.0352 46.9898 17.9279 43.5298 15.1803C33.2909 7.04969 20.9724 1.94719 7.98317 0.456462C3.5937 -0.0473041 0 3.58172 0 8V50.6863C0 57.8135 8.61713 61.3829 13.6569 56.3431L43.8406 26.1594Z"
            fill="#FFE1BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12010)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_yellow peace_radius_${radius}`}
          width="76"
          height="100"
          viewBox="0 0 76 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11990" fill="white">
            <path d="M72.832 38.168C75.9562 35.0438 75.9739 29.9537 72.6329 27.0625C54.5396 11.4047 31.8591 2.01014 7.99352 0.287962C3.5867 -0.0300392 0 3.58172 0 8V91.6863C0 98.8135 8.61713 102.383 13.6569 97.3431L72.832 38.168Z" />
          </mask>
          <path
            d="M72.832 38.168C75.9562 35.0438 75.9739 29.9537 72.6329 27.0625C54.5396 11.4047 31.8591 2.01014 7.99352 0.287962C3.5867 -0.0300392 0 3.58172 0 8V91.6863C0 98.8135 8.61713 102.383 13.6569 97.3431L72.832 38.168Z"
            fill="#FFE1BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11990)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_yellow peace_radius_${radius}`}
          width="103"
          height="139"
          viewBox="0 0 103 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12000" fill="white">
            <path d="M100.409 49.5908C103.533 46.4666 103.547 41.3833 100.261 38.43C74.7782 15.5288 42.2093 2.03832 7.99692 0.213118C3.58492 -0.0222595 0 3.58172 0 8V130.686C0 137.814 8.61714 141.383 13.6569 136.343L100.409 49.5908Z" />
          </mask>
          <path
            d="M100.409 49.5908C103.533 46.4666 103.547 41.3833 100.261 38.43C74.7782 15.5288 42.2093 2.03832 7.99692 0.213118C3.58492 -0.0222595 0 3.58172 0 8V130.686C0 137.814 8.61714 141.383 13.6569 136.343L100.409 49.5908Z"
            fill="#FFE1BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12000)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace  peace_level_${level} peace_color_yellow peace_radius_${radius}`}
          width="131"
          height="178"
          viewBox="0 0 131 178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11974" fill="white">
            <path d="M127.986 61.0137C131.111 57.8895 131.121 52.8096 127.867 49.8203C95.0266 19.6465 52.557 2.05503 7.99892 0.169166C3.58459 -0.0176651 0 3.58172 0 8V169.686C0 176.814 8.61714 180.383 13.6569 175.343L127.986 61.0137Z" />
          </mask>
          <path
            d="M127.986 61.0137C131.111 57.8895 131.121 52.8096 127.867 49.8203C95.0266 19.6465 52.557 2.05503 7.99892 0.169166C3.58459 -0.0176651 0 3.58172 0 8V169.686C0 176.814 8.61714 180.383 13.6569 175.343L127.986 61.0137Z"
            fill="#FFE1BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11974)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_yellow peace_radius_${radius}`}
          width="159"
          height="218"
          viewBox="0 0 159 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_11985" fill="white">
            <path d="M156.271 72.7294C159.395 69.6052 159.403 64.5276 156.172 61.5143C115.799 23.8666 63.1687 2.06629 8.00014 0.139631C3.58455 -0.0145756 0 3.58172 0 8V209.686C0 216.814 8.61714 220.383 13.6569 215.343L156.271 72.7294Z" />
          </mask>
          <path
            d="M156.271 72.7294C159.395 69.6052 159.403 64.5276 156.172 61.5143C115.799 23.8666 63.1687 2.06629 8.00014 0.139631C3.58455 -0.0145756 0 3.58172 0 8V209.686C0 216.814 8.61714 220.383 13.6569 215.343L156.271 72.7294Z"
            fill="#FFE1BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_11985)"
          />
        </svg>
      )}
      {radius === 'fifth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_yellow peace_radius_${radius}`}
          width="64"
          height="62"
          viewBox="0 0 64 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12107" fill="white">
            <path d="M62.3812 15.9539C64.5462 12.1024 63.1922 7.17825 59.1189 5.46655C50.5316 1.8579 41.2843 -0.0111844 31.9161 5.03356e-05C22.5478 0.0112851 13.305 1.90255 4.72634 5.53178C0.657223 7.25325 -0.684998 12.1806 1.48927 16.0269L25.0162 57.6457C28.0829 63.0707 35.9005 63.0613 38.9542 57.629L62.3812 15.9539Z" />
          </mask>
          <path
            d="M62.3812 15.9539C64.5462 12.1024 63.1922 7.17825 59.1189 5.46655C50.5316 1.8579 41.2843 -0.0111844 31.9161 5.03356e-05C22.5478 0.0112851 13.305 1.90255 4.72634 5.53178C0.657223 7.25325 -0.684998 12.1806 1.48927 16.0269L25.0162 57.6457C28.0829 63.0707 35.9005 63.0613 38.9542 57.629L62.3812 15.9539Z"
            fill="#FFE1BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12107)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_yellow peace_radius_${radius}`}
          width="104"
          height="103"
          viewBox="0 0 104 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12091" fill="white">
            <path d="M102.472 21.2137C104.637 17.3622 103.28 12.4564 99.2831 10.5743C84.4823 3.60569 68.2919 -0.0196176 51.8669 7.98179e-05C35.4419 0.0197773 19.2602 3.6839 4.47622 10.688C0.483379 12.5797 -0.861443 17.4887 1.31283 21.335L45.0162 98.6457C48.0829 104.071 55.9005 104.061 58.9542 98.629L102.472 21.2137Z" />
          </mask>
          <path
            d="M102.472 21.2137C104.637 17.3622 103.28 12.4564 99.2831 10.5743C84.4823 3.60569 68.2919 -0.0196176 51.8669 7.98179e-05C35.4419 0.0197773 19.2602 3.6839 4.47622 10.688C0.483379 12.5797 -0.861443 17.4887 1.31283 21.335L45.0162 98.6457C48.0829 104.071 55.9005 104.061 58.9542 98.629L102.472 21.2137Z"
            fill="#FFE1BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12091)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_yellow peace_radius_${radius}`}
          width="142"
          height="142"
          viewBox="0 0 142 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12075" fill="white">
            <path d="M140.583 26.2169C142.748 22.3655 141.389 17.4674 137.428 15.5107C116.748 5.29647 93.9564 -0.0276379 70.8201 0.000107862C47.6838 0.0278537 24.9048 5.40662 4.24991 15.6704C0.293213 17.6366 -1.05367 22.5379 1.1206 26.3842L64.0162 137.646C67.0829 143.071 74.9005 143.061 77.9542 137.629L140.583 26.2169Z" />
          </mask>
          <path
            d="M140.583 26.2169C142.748 22.3655 141.389 17.4674 137.428 15.5107C116.748 5.29647 93.9564 -0.0276379 70.8201 0.000107862C47.6838 0.0278537 24.9048 5.40662 4.24991 15.6704C0.293213 17.6366 -1.05367 22.5379 1.1206 26.3842L64.0162 137.646C67.0829 143.071 74.9005 143.061 77.9542 137.629L140.583 26.2169Z"
            fill="#FFE1BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12075)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_yellow peace_radius_${radius}`}
          width="181"
          height="181"
          viewBox="0 0 181 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12059" fill="white">
            <path d="M179.693 31.2202C181.858 27.3687 180.498 22.475 176.559 20.4749C150.012 6.99739 120.62 -0.0356576 90.7733 0.000135906C60.9264 0.0359294 31.5512 7.13945 5.03733 20.6806C1.10252 22.6901 -0.245903 27.5871 1.92837 31.4334L84.0162 176.646C87.0829 182.071 94.9005 182.061 97.9542 176.629L179.693 31.2202Z" />
          </mask>
          <path
            d="M179.693 31.2202C181.858 27.3687 180.498 22.475 176.559 20.4749C150.012 6.99739 120.62 -0.0356576 90.7733 0.000135906C60.9264 0.0359294 31.5512 7.13945 5.03733 20.6806C1.10252 22.6901 -0.245903 27.5871 1.92837 31.4334L84.0162 176.646C87.0829 182.071 94.9005 182.061 97.9542 176.629L179.693 31.2202Z"
            fill="#FFE1BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12059)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_yellow peace_radius_${radius}`}
          width="220"
          height="221"
          viewBox="0 0 220 221"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_12084" fill="white">
            <path d="M218.294 36.3517C220.459 32.5003 219.098 27.6095 215.173 25.5803C182.616 8.74703 146.455 -0.0438826 109.725 0.000164669C72.9958 0.044212 36.856 8.92183 4.33904 25.8331C0.419189 27.8718 -0.930244 32.7658 1.24403 36.612L103.016 216.646C106.083 222.071 113.9 222.061 116.954 216.629L218.294 36.3517Z" />
          </mask>
          <path
            d="M218.294 36.3517C220.459 32.5003 219.098 27.6095 215.173 25.5803C182.616 8.74703 146.455 -0.0438826 109.725 0.000164669C72.9958 0.044212 36.856 8.92183 4.33904 25.8331C0.419189 27.8718 -0.930244 32.7658 1.24403 36.612L103.016 216.646C106.083 222.071 113.9 222.061 116.954 216.629L218.294 36.3517Z"
            fill="#FFE1BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_12084)"
          />
        </svg>
      )}
    </>
  );
}

export { Yellow };
