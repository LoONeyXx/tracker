import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function Red({ radius, onClick, level = 'middle' }) {
  const { activePeace } = useContext(activePeaceContext);
  const isActive = activePeace === 'red';
  const strokeColor = isActive ? '#FF6442' : '#fff';

  function handleClick() {
    onClick('red');
  }

  return (
    <>
      {radius === 'fifth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="47"
          height="59"
          viewBox="0 0 47 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12005" fill="white">
            <path d="M0 51C0 55.4183 3.59321 59.0472 7.98267 58.5434C14.4342 57.8028 20.7644 56.1666 26.7878 53.6716C32.8113 51.1766 38.4444 47.8574 43.53 43.8192C46.9901 41.0716 46.9648 35.9648 43.8406 32.8406L13.6569 2.65685C8.61713 -2.38287 0 1.18647 0 8.31371V51Z" />
          </mask>
          <path
            d="M0 51C0 55.4183 3.59321 59.0472 7.98267 58.5434C14.4342 57.8028 20.7644 56.1666 26.7878 53.6716C32.8113 51.1766 38.4444 47.8574 43.53 43.8192C46.9901 41.0716 46.9648 35.9648 43.8406 32.8406L13.6569 2.65685C8.61713 -2.38287 0 1.18647 0 8.31371V51Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12005)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace  peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="76"
          height="100"
          viewBox="0 0 76 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11985" fill="white">
            <path d="M-7.62939e-06 92C-7.62939e-06 96.4183 3.58634 100.03 7.99315 99.7118C19.8337 98.857 31.4783 96.1068 42.4779 91.5506C53.4774 86.9945 63.6561 80.7052 72.6331 72.9371C75.9741 70.046 75.9562 64.9562 72.832 61.832L13.6569 2.65685C8.61713 -2.38287 0 1.18647 0 8.31371L-7.62939e-06 92Z" />
          </mask>
          <path
            d="M-7.62939e-06 92C-7.62939e-06 96.4183 3.58634 100.03 7.99315 99.7118C19.8337 98.857 31.4783 96.1068 42.4779 91.5506C53.4774 86.9945 63.6561 80.7052 72.6331 72.9371C75.9741 70.046 75.9562 64.9562 72.832 61.832L13.6569 2.65685C8.61713 -2.38287 0 1.18647 0 8.31371L-7.62939e-06 92Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11985)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="103"
          height="139"
          viewBox="0 0 103 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11995" fill="white">
            <path d="M0 131C0 135.418 3.58435 139.022 7.99634 138.787C24.9618 137.881 41.6703 134.098 57.4025 127.582C73.1347 121.065 87.6241 111.925 100.261 100.569C103.547 97.6163 103.533 92.5334 100.409 89.4092L13.6568 2.65685C8.61713 -2.38287 0 1.18646 0 8.31371V131Z" />
          </mask>
          <path
            d="M0 131C0 135.418 3.58435 139.022 7.99634 138.787C24.9618 137.881 41.6703 134.098 57.4025 127.582C73.1347 121.065 87.6241 111.925 100.261 100.569C103.547 97.6163 103.533 92.5334 100.409 89.4092L13.6568 2.65685C8.61713 -2.38287 0 1.18646 0 8.31371V131Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11995)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace  peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="131"
          height="178"
          viewBox="0 0 131 178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11969" fill="white">
            <path d="M-1.52588e-05 170C-1.52588e-05 174.418 3.58347 178.018 7.99779 177.831C30.0872 176.895 51.8628 172.09 72.3271 163.613C92.7916 155.137 111.587 143.137 127.868 128.179C131.122 125.19 131.111 120.111 127.986 116.986L13.6569 2.65686C8.61714 -2.38286 0 1.18646 0 8.31371L-1.52588e-05 170Z" />
          </mask>
          <path
            d="M-1.52588e-05 170C-1.52588e-05 174.418 3.58347 178.018 7.99779 177.831C30.0872 176.895 51.8628 172.09 72.3271 163.613C92.7916 155.137 111.587 143.137 127.868 128.179C131.122 125.19 131.111 120.111 127.986 116.986L13.6569 2.65686C8.61714 -2.38286 0 1.18646 0 8.31371L-1.52588e-05 170Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11969)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="159"
          height="218"
          viewBox="0 0 159 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_11980" fill="white">
            <path d="M-1.52588e-05 210C-1.52588e-05 214.418 3.58293 218.015 7.9985 217.86C35.3425 216.905 62.3167 211.055 87.6345 200.568C112.952 190.081 136.162 175.144 156.173 156.484C159.404 153.471 159.395 148.395 156.271 145.271L13.6568 2.65685C8.61713 -2.38287 0 1.18646 0 8.31371L-1.52588e-05 210Z" />
          </mask>
          <path
            d="M-1.52588e-05 210C-1.52588e-05 214.418 3.58293 218.015 7.9985 217.86C35.3425 216.905 62.3167 211.055 87.6345 200.568C112.952 190.081 136.162 175.144 156.173 156.484C159.404 153.471 159.395 148.395 156.271 145.271L13.6568 2.65685C8.61713 -2.38287 0 1.18646 0 8.31371L-1.52588e-05 210Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_11980)"
          />
        </svg>
      )}
      {radius === 'fifth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="65"
          height="58"
          viewBox="0 0 65 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12103" fill="white">
            <path d="M26.4623 53.424C28.7043 57.2312 33.6421 58.5347 37.1687 55.8731C44.7142 50.1783 51.051 42.9964 55.7702 34.7417C60.4894 26.4869 63.4633 17.3824 64.5424 7.99092C65.0468 3.60152 61.4183 0.00785433 57 0.00733185L8.99746 0.00165528C2.80791 0.000923329 -1.03783 6.7279 2.10309 12.0613L26.4623 53.424Z" />
          </mask>
          <path
            d="M26.4623 53.424C28.7043 57.2312 33.6421 58.5347 37.1687 55.8731C44.7142 50.1783 51.051 42.9964 55.7702 34.7417C60.4894 26.4869 63.4633 17.3824 64.5424 7.99092C65.0468 3.60152 61.4183 0.00785433 57 0.00733185L8.99746 0.00165528C2.80791 0.000923329 -1.03783 6.7279 2.10309 12.0613L26.4623 53.424Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12103)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="106"
          height="93"
          viewBox="0 0 106 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12087" fill="white">
            <path d="M47.2679 88.7528C49.51 92.5599 54.4332 93.8521 58.069 91.3417C71.7125 81.9213 83.1019 69.5427 91.3642 55.0903C99.6264 40.638 104.515 24.543 105.711 8.00643C106.03 3.59966 102.418 0.0127029 98 0.0121765L8.99746 0.00165558C2.80791 0.000923157 -1.03783 6.72791 2.1031 12.0613L47.2679 88.7528Z" />
          </mask>
          <path
            d="M47.2679 88.7528C49.51 92.5599 54.4332 93.8521 58.069 91.3417C71.7125 81.9213 83.1019 69.5427 91.3642 55.0903C99.6264 40.638 104.515 24.543 105.711 8.00643C106.03 3.59966 102.418 0.0127029 98 0.0121765L8.99746 0.00165558C2.80791 0.000923157 -1.03783 6.72791 2.1031 12.0613L47.2679 88.7528Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12087)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="145"
          height="127"
          viewBox="0 0 145 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12071" fill="white">
            <path d="M67.0587 122.358C69.3008 126.165 74.2184 127.452 77.9006 125.01C97.3715 112.098 113.59 94.793 125.222 74.4464C136.854 54.0998 143.538 31.3441 144.786 8.01422C145.022 3.60225 141.418 0.0173187 137 0.0167847L8.99747 0.00164795C2.80792 0.000930786 -1.03783 6.72791 2.10309 12.0613L67.0587 122.358Z" />
          </mask>
          <path
            d="M67.0587 122.358C69.3008 126.165 74.2184 127.452 77.9006 125.01C97.3715 112.098 113.59 94.793 125.222 74.4464C136.854 54.0998 143.538 31.3441 144.786 8.01422C145.022 3.60225 141.418 0.0173187 137 0.0167847L8.99747 0.00164795C2.80792 0.000930786 -1.03783 6.72791 2.10309 12.0613L67.0587 122.358Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12071)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="184"
          height="160"
          viewBox="0 0 184 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12055" fill="white">
            <path d="M86.8495 155.964C89.0916 159.771 94.0061 161.054 97.715 158.653C123.023 142.268 144.078 120.043 159.08 93.8025C174.081 67.5621 182.551 38.1416 183.83 8.02037C184.017 3.60606 180.418 0.0219269 176 0.0214081L8.99747 0.00164795C2.80792 0.000930786 -1.03783 6.72791 2.10309 12.0613L86.8495 155.964Z" />
          </mask>
          <path
            d="M86.8495 155.964C89.0916 159.771 94.0061 161.054 97.715 158.653C123.023 142.268 144.078 120.043 159.08 93.8025C174.081 67.5621 182.551 38.1416 183.83 8.02037C184.017 3.60606 180.418 0.0219269 176 0.0214081L8.99747 0.00164795C2.80792 0.000930786 -1.03783 6.72791 2.10309 12.0613L86.8495 155.964Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12055)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="224"
          height="195"
          viewBox="0 0 224 195"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_12080" fill="white">
            <path d="M107.148 190.431C109.39 194.238 114.302 195.519 118.029 193.145C149.327 173.209 175.348 145.94 193.805 113.655C212.262 81.3698 222.559 45.1116 223.859 8.02573C224.014 3.61015 220.418 0.0266571 216 0.0261383L8.99747 0.00164795C2.80792 0.000930786 -1.03783 6.72791 2.10309 12.0613L107.148 190.431Z" />
          </mask>
          <path
            d="M107.148 190.431C109.39 194.238 114.302 195.519 118.029 193.145C149.327 173.209 175.348 145.94 193.805 113.655C212.262 81.3698 222.559 45.1116 223.859 8.02573C224.014 3.61015 220.418 0.0266571 216 0.0261383L8.99747 0.00164795C2.80792 0.000930786 -1.03783 6.72791 2.10309 12.0613L107.148 190.431Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_12080)"
          />
        </svg>
      )}
    </>
  );
}

export { Red };
