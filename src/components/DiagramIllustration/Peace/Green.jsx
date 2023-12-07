import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function Green({ radius, onClick, level = 'middle' }) {
  const { activePeace } = useContext(activePeaceContext);
  const isActive = activePeace === 'green';
  const strokeColor = isActive ? '#4B9F68' : '#fff';

  function handleClick() {
    onClick('green');
  }

  return (
    <>
      {radius === 'fifth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_green peace_radius_${radius}`}
          width="59"
          height="47"
          viewBox="0 0 59 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12011" fill="white">
            <path d="M51 47C55.4183 47 59.0473 43.4063 58.5435 39.0168C57.0528 26.0276 51.9503 13.7091 43.8197 3.47025C41.0721 0.0102158 35.9648 0.0351925 32.8406 3.15939L2.65686 33.3431C-2.38286 38.3829 1.18648 47 8.31371 47H51Z" />
          </mask>
          <path
            d="M51 47C55.4183 47 59.0473 43.4063 58.5435 39.0168C57.0528 26.0276 51.9503 13.7091 43.8197 3.47025C41.0721 0.0102158 35.9648 0.0351925 32.8406 3.15939L2.65686 33.3431C-2.38286 38.3829 1.18648 47 8.31371 47H51Z"
            fill="#C2E5CE"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12011)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace  peace_level_${level} peace_color_green peace_radius_${radius}`}
          width="100"
          height="76"
          viewBox="0 0 100 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11991" fill="white">
            <path d="M92 76C96.4183 76 100.03 72.4133 99.712 68.0065C97.9899 44.1408 88.5953 21.4604 72.9375 3.36705C70.0463 0.0261002 64.9562 0.0438194 61.832 3.16801L2.65686 62.3431C-2.38286 67.3829 1.18648 76 8.31372 76H92Z" />
          </mask>
          <path
            d="M92 76C96.4183 76 100.03 72.4133 99.712 68.0065C97.9899 44.1408 88.5953 21.4604 72.9375 3.36705C70.0463 0.0261002 64.9562 0.0438194 61.832 3.16801L2.65686 62.3431C-2.38286 67.3829 1.18648 76 8.31372 76H92Z"
            fill="#C2E5CE"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11991)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_green peace_radius_${radius}`}
          width="139"
          height="103"
          viewBox="0 0 139 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12001" fill="white">
            <path d="M131 103C135.418 103 139.022 99.4151 138.787 95.0031C136.962 60.7907 123.471 28.2218 100.57 2.73937C97.6167 -0.546825 92.5334 -0.53334 89.4092 2.59085L2.65686 89.3431C-2.38286 94.3829 1.18648 103 8.31372 103H131Z" />
          </mask>
          <path
            d="M131 103C135.418 103 139.022 99.4151 138.787 95.0031C136.962 60.7907 123.471 28.2218 100.57 2.73937C97.6167 -0.546825 92.5334 -0.53334 89.4092 2.59085L2.65686 89.3431C-2.38286 94.3829 1.18648 103 8.31372 103H131Z"
            fill="#C2E5CE"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12001)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace  peace_level_${level} peace_color_green peace_radius_${radius}`}
          width="178"
          height="131"
          viewBox="0 0 178 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11975" fill="white">
            <path d="M170 131C174.418 131 178.018 127.415 177.831 123.001C175.945 78.443 158.353 35.9734 128.18 3.13255C125.19 -0.12096 120.111 -0.1105 116.986 3.01369L2.65686 117.343C-2.38286 122.383 1.18648 131 8.31372 131H170Z" />
          </mask>
          <path
            d="M170 131C174.418 131 178.018 127.415 177.831 123.001C175.945 78.443 158.353 35.9734 128.18 3.13255C125.19 -0.12096 120.111 -0.1105 116.986 3.01369L2.65686 117.343C-2.38286 122.383 1.18648 131 8.31372 131H170Z"
            fill="#C2E5CE"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11975)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_green peace_radius_${radius}`}
          width="218"
          height="159"
          viewBox="0 0 218 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_11986" fill="white">
            <path d="M210 159C214.418 159 218.015 155.415 217.86 151C215.934 95.8313 194.133 43.2007 156.486 2.82825C153.472 -0.403076 148.395 -0.394768 145.271 2.72942L2.65686 145.343C-2.38286 150.383 1.18648 159 8.31371 159H210Z" />
          </mask>
          <path
            d="M210 159C214.418 159 218.015 155.415 217.86 151C215.934 95.8313 194.133 43.2007 156.486 2.82825C153.472 -0.403076 148.395 -0.394768 145.271 2.72942L2.65686 145.343C-2.38286 150.383 1.18648 159 8.31371 159H210Z"
            fill="#C2E5CE"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_11986)"
          />
        </svg>
      )}
      {radius === 'fifth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_green peace_radius_${radius}`}
          width="65"
          height="58"
          viewBox="0 0 65 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12108" fill="white">
            <path d="M56.9974 57.4295C61.4155 57.3888 65.0112 53.7624 64.467 49.3777C63.3021 39.9924 60.2435 30.9116 55.4461 22.6974C50.6487 14.4832 44.2422 7.35766 36.6402 1.73188C33.0886 -0.896372 28.1634 0.453686 25.9573 4.28178L1.98631 45.8771C-1.10359 51.2388 2.80324 57.9282 8.9913 57.8713L56.9974 57.4295Z" />
          </mask>
          <path
            d="M56.9974 57.4295C61.4155 57.3888 65.0112 53.7624 64.467 49.3777C63.3021 39.9924 60.2435 30.9116 55.4461 22.6974C50.6487 14.4832 44.2422 7.35766 36.6402 1.73188C33.0886 -0.896372 28.1634 0.453686 25.9573 4.28178L1.98631 45.8771C-1.10359 51.2388 2.80324 57.9282 8.9913 57.8713L56.9974 57.4295Z"
            fill="#C2E5CE"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12108)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_green peace_radius_${radius}`}
          width="106"
          height="94"
          viewBox="0 0 106 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12092" fill="white">
            <path d="M97.9956 93.0522C102.414 93.0116 105.992 89.392 105.634 84.9883C104.287 68.4569 99.2491 52.4011 90.8502 38.0202C82.4513 23.6393 70.9422 11.3628 57.2052 2.06788C53.5459 -0.408144 48.6351 0.930349 46.429 4.75845L1.98631 81.8771C-1.10359 87.2388 2.80324 93.9282 8.9913 93.8713L97.9956 93.0522Z" />
          </mask>
          <path
            d="M97.9956 93.0522C102.414 93.0116 105.992 89.392 105.634 84.9883C104.287 68.4569 99.2491 52.4011 90.8502 38.0202C82.4513 23.6393 70.9422 11.3628 57.2052 2.06788C53.5459 -0.408144 48.6351 0.930349 46.429 4.75845L1.98631 81.8771C-1.10359 87.2388 2.80324 93.9282 8.9913 93.8713L97.9956 93.0522Z"
            fill="#C2E5CE"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12092)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_green peace_radius_${radius}`}
          width="145"
          height="127"
          viewBox="0 0 145 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12076" fill="white">
            <path d="M136.994 125.693C141.412 125.653 144.983 122.035 144.707 117.626C143.246 94.2994 136.351 71.5972 124.527 51.3516C112.703 31.106 96.3176 13.9468 76.7185 1.21409C73.0134 -1.19293 68.1082 0.139858 65.9022 3.96795L1.98631 114.877C-1.10359 120.239 2.80324 126.928 8.9913 126.871L136.994 125.693Z" />
          </mask>
          <path
            d="M136.994 125.693C141.412 125.653 144.983 122.035 144.707 117.626C143.246 94.2994 136.351 71.5972 124.527 51.3516C112.703 31.106 96.3176 13.9468 76.7185 1.21409C73.0134 -1.19293 68.1082 0.139858 65.9022 3.96795L1.98631 114.877C-1.10359 120.239 2.80324 126.928 8.9913 126.871L136.994 125.693Z"
            fill="#C2E5CE"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12076)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_green peace_radius_${radius}`}
          width="184"
          height="161"
          viewBox="0 0 184 161"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12060" fill="white">
            <path d="M175.992 159.334C180.41 159.294 183.977 155.677 183.749 151.265C182.196 121.145 173.453 91.7929 158.204 65.683C142.955 39.5731 121.685 17.5373 96.2149 1.38625C92.4836 -0.979843 87.5814 0.349365 85.3753 4.17746L1.98631 148.877C-1.10359 154.239 2.80324 160.928 8.9913 160.871L175.992 159.334Z" />
          </mask>
          <path
            d="M175.992 159.334C180.41 159.294 183.977 155.677 183.749 151.265C182.196 121.145 173.453 91.7929 158.204 65.683C142.955 39.5731 121.685 17.5373 96.2149 1.38625C92.4836 -0.979843 87.5814 0.349365 85.3753 4.17746L1.98631 148.877C-1.10359 154.239 2.80324 160.928 8.9913 160.871L175.992 159.334Z"
            fill="#C2E5CE"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12060)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_green peace_radius_${radius}`}
          width="224"
          height="196"
          viewBox="0 0 224 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_12085" fill="white">
            <path d="M215.991 193.966C220.409 193.926 223.972 190.31 223.777 185.896C222.139 148.81 211.507 112.634 192.745 80.5101C173.983 48.3858 147.699 21.3514 116.203 1.70404C112.454 -0.634403 107.554 0.692451 105.348 4.52055L1.98631 183.877C-1.10359 189.239 2.80324 195.928 8.9913 195.871L215.991 193.966Z" />
          </mask>
          <path
            d="M215.991 193.966C220.409 193.926 223.972 190.31 223.777 185.896C222.139 148.81 211.507 112.634 192.745 80.5101C173.983 48.3858 147.699 21.3514 116.203 1.70404C112.454 -0.634403 107.554 0.692451 105.348 4.52055L1.98631 183.877C-1.10359 189.239 2.80324 195.928 8.9913 195.871L215.991 193.966Z"
            fill="#C2E5CE"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_12085)"
          />
        </svg>
      )}
    </>
  );
}

export { Green };
