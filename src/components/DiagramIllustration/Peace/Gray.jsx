import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function Gray({ radius, onClick, level = 'middle' }) {
  const { activePeace } = useContext(activePeaceContext);
  const isActive = activePeace === 'gray';
  const strokeColor = isActive ? '#B4B4B4' : '#fff';

  function handleClick() {
    onClick('gray');
  }

  return (
    <>
      {radius === 'fifth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="47"
          height="59"
          viewBox="0 0 47 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12006" fill="white">
            <path d="M3.15938 32.8406C0.0351849 35.9648 0.0102043 41.0721 3.47024 43.8197C13.7091 51.9503 26.0276 57.0528 39.0168 58.5435C43.4063 59.0473 47 55.4183 47 51V8.31371C47 1.18647 38.3829 -2.38287 33.3431 2.65685L3.15938 32.8406Z" />
          </mask>
          <path
            d="M3.15938 32.8406C0.0351849 35.9648 0.0102043 41.0721 3.47024 43.8197C13.7091 51.9503 26.0276 57.0528 39.0168 58.5435C43.4063 59.0473 47 55.4183 47 51V8.31371C47 1.18647 38.3829 -2.38287 33.3431 2.65685L3.15938 32.8406Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12006)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="76"
          height="100"
          viewBox="0 0 76 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11986" fill="white">
            <path d="M3.168 61.832C0.043808 64.9562 0.0260887 70.0463 3.36704 72.9375C21.4604 88.5953 44.1408 97.9899 68.0065 99.712C72.4133 100.03 76 96.4183 76 92L76 8.31371C76 1.18646 67.3829 -2.38287 62.3431 2.65685L3.168 61.832Z" />
          </mask>
          <path
            d="M3.168 61.832C0.043808 64.9562 0.0260887 70.0463 3.36704 72.9375C21.4604 88.5953 44.1408 97.9899 68.0065 99.712C72.4133 100.03 76 96.4183 76 92L76 8.31371C76 1.18646 67.3829 -2.38287 62.3431 2.65685L3.168 61.832Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11986)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="103"
          height="139"
          viewBox="0 0 103 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11996" fill="white">
            <path d="M2.59084 89.4092C-0.533356 92.5334 -0.546841 97.6167 2.73935 100.57C28.2218 123.471 60.7907 136.962 95.0031 138.787C99.4151 139.022 103 135.418 103 131V8.31371C103 1.18646 94.3829 -2.38286 89.3431 2.65686L2.59084 89.4092Z" />
          </mask>
          <path
            d="M2.59084 89.4092C-0.533356 92.5334 -0.546841 97.6167 2.73935 100.57C28.2218 123.471 60.7907 136.962 95.0031 138.787C99.4151 139.022 103 135.418 103 131V8.31371C103 1.18646 94.3829 -2.38286 89.3431 2.65686L2.59084 89.4092Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11996)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="131"
          height="178"
          viewBox="0 0 131 178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11970" fill="white">
            <path d="M3.01368 116.986C-0.110519 120.111 -0.120987 125.19 3.13252 128.18C35.9734 158.353 78.443 175.945 123.001 177.831C127.415 178.018 131 174.418 131 170L131 8.31371C131 1.18648 122.383 -2.38286 117.343 2.65686L3.01368 116.986Z" />
          </mask>
          <path
            d="M3.01368 116.986C-0.110519 120.111 -0.120987 125.19 3.13252 128.18C35.9734 158.353 78.443 175.945 123.001 177.831C127.415 178.018 131 174.418 131 170L131 8.31371C131 1.18648 122.383 -2.38286 117.343 2.65686L3.01368 116.986Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11970)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="159"
          height="218"
          viewBox="0 0 159 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_11981" fill="white">
            <path d="M2.7294 145.271C-0.394791 148.395 -0.403099 153.472 2.82823 156.486C43.2007 194.133 95.8313 215.934 151 217.86C155.415 218.015 159 214.418 159 210L159 8.31371C159 1.18646 150.383 -2.38286 145.343 2.65686L2.7294 145.271Z" />
          </mask>
          <path
            d="M2.7294 145.271C-0.394791 148.395 -0.403099 153.472 2.82823 156.486C43.2007 194.133 95.8313 215.934 151 217.86C155.415 218.015 159 214.418 159 210L159 8.31371C159 1.18646 150.383 -2.38286 145.343 2.65686L2.7294 145.271Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_11981)"
          />
        </svg>
      )}
      {radius === 'fifth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="66"
          height="62"
          viewBox="0 0 66 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12104" fill="white">
            <path d="M2.00741 45.6979C-0.201202 49.5245 1.09685 54.4637 5.15039 56.2215C13.9121 60.021 23.3861 61.999 32.9926 62C42.599 62.001 52.0734 60.0251 60.836 56.2274C64.8899 54.4705 66.189 49.5315 63.9812 45.7044L39.9279 4.00919C36.8497 -1.32672 29.1489 -1.32754 26.0695 4.00772L2.00741 45.6979Z" />
          </mask>
          <path
            d="M2.00741 45.6979C-0.201202 49.5245 1.09685 54.4637 5.15039 56.2215C13.9121 60.021 23.3861 61.999 32.9926 62C42.599 62.001 52.0734 60.0251 60.836 56.2274C64.8899 54.4705 66.189 49.5315 63.9812 45.7044L39.9279 4.00919C36.8497 -1.32672 29.1489 -1.32754 26.0695 4.00772L2.00741 45.6979Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12104)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="106"
          height="103"
          viewBox="0 0 106 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12088" fill="white">
            <path d="M1.51231 81.2077C-0.696301 85.0344 0.604538 89.9553 4.58029 91.8826C19.6381 99.1822 36.1854 102.998 52.9882 103C69.7911 103.002 86.3391 99.1893 101.399 91.8929C105.375 89.9664 106.677 85.0458 104.469 81.2186L59.9279 4.00919C56.8497 -1.32672 49.1489 -1.32754 46.0695 4.00772L1.51231 81.2077Z" />
          </mask>
          <path
            d="M1.51231 81.2077C-0.696301 85.0344 0.604538 89.9553 4.58029 91.8826C19.6381 99.1822 36.1854 102.998 52.9882 103C69.7911 103.002 86.3391 99.1893 101.399 91.8929C105.375 89.9664 106.677 85.0458 104.469 81.2186L59.9279 4.00919C56.8497 -1.32672 49.1489 -1.32754 46.0695 4.00772L1.51231 81.2077Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12088)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="146"
          height="142"
          viewBox="0 0 146 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12072" fill="white">
            <path d="M2.01697 114.985C-0.191643 118.812 1.11131 123.725 5.05025 125.727C26.0648 136.405 49.3372 141.997 72.9841 142C96.631 142.003 119.905 136.415 140.921 125.741C144.861 123.741 146.165 118.828 143.957 115L79.9279 4.0092C76.8497 -1.32671 69.1489 -1.32755 66.0695 4.00772L2.01697 114.985Z" />
          </mask>
          <path
            d="M2.01697 114.985C-0.191643 118.812 1.11131 123.725 5.05025 125.727C26.0648 136.405 49.3372 141.997 72.9841 142C96.631 142.003 119.905 136.415 140.921 125.741C144.861 123.741 146.165 118.828 143.957 115L79.9279 4.0092C76.8497 -1.32671 69.1489 -1.32755 66.0695 4.00772L2.01697 114.985Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12072)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="184"
          height="181"
          viewBox="0 0 184 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12056" fill="white">
            <path d="M1.52163 148.763C-0.686981 152.59 0.617599 157.499 4.53426 159.543C31.4933 173.617 61.4895 180.997 91.9799 181C122.47 181.003 152.468 173.63 179.43 159.562C183.347 157.518 184.653 152.609 182.445 148.782L98.9279 4.0092C95.8497 -1.32672 88.1489 -1.32755 85.0695 4.00772L1.52163 148.763Z" />
          </mask>
          <path
            d="M1.52163 148.763C-0.686981 152.59 0.617599 157.499 4.53426 159.543C31.4933 173.617 61.4895 180.997 91.9799 181C122.47 181.003 152.468 173.63 179.43 159.562C183.347 157.518 184.653 152.609 182.445 148.782L98.9279 4.0092C95.8497 -1.32672 88.1489 -1.32755 85.0695 4.00772L1.52163 148.763Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12056)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="224"
          height="221"
          viewBox="0 0 224 221"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_12081" fill="white">
            <path d="M1.52641 183.407C-0.682198 187.233 0.623352 192.139 4.5248 194.213C37.5746 211.779 74.4665 220.996 111.976 221C149.485 221.004 186.379 211.795 219.432 194.236C223.334 192.163 224.641 187.257 222.433 183.43L118.928 4.0092C115.85 -1.32672 108.149 -1.32755 105.07 4.00772L1.52641 183.407Z" />
          </mask>
          <path
            d="M1.52641 183.407C-0.682198 187.233 0.623352 192.139 4.5248 194.213C37.5746 211.779 74.4665 220.996 111.976 221C149.485 221.004 186.379 211.795 219.432 194.236C223.334 192.163 224.641 187.257 222.433 183.43L118.928 4.0092C115.85 -1.32672 108.149 -1.32755 105.07 4.00772L1.52641 183.407Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_12081)"
          />
        </svg>
      )}
    </>
  );
}

export { Gray };
