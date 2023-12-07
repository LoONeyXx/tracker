import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function Purple({ radius, onClick, level = 'middle' }) {
  const { activePeace } = useContext(activePeaceContext);
  const isActive = activePeace === 'purple';
  const strokeColor = isActive ? '#AC40D2' : '#fff';

  function handleClick(e) {
    e.stopPropagation();
    console.log(e.target);
    onClick('purple');
  }

  return (
    <>
      {radius === 'fifth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_purple peace_radius_${radius}`}
          width="59"
          height="47"
          viewBox="0 0 59 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12008" fill="white">
            <path d="M26.1594 3.15938C23.0352 0.0351887 17.9279 0.0102081 15.1803 3.47024C7.04969 13.7091 1.94719 26.0276 0.456462 39.0168C-0.0473038 43.4063 3.58172 47 8 47L50.6863 47C57.8135 47 61.3829 38.3829 56.3431 33.3431L26.1594 3.15938Z" />
          </mask>
          <path
            d="M26.1594 3.15938C23.0352 0.0351887 17.9279 0.0102081 15.1803 3.47024C7.04969 13.7091 1.94719 26.0276 0.456462 39.0168C-0.0473038 43.4063 3.58172 47 8 47L50.6863 47C57.8135 47 61.3829 38.3829 56.3431 33.3431L26.1594 3.15938Z"
            fill="#D8C2E5"
            stroke="white"
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12008)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace  peace_level_${level} peace_color_purple peace_radius_${radius}`}
          width="100"
          height="76"
          viewBox="0 0 100 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11988" fill="white">
            <path d="M38.168 3.16801C35.0438 0.0438156 29.9537 0.0260963 27.0625 3.36705C11.4047 21.4604 2.01014 44.1408 0.287963 68.0065C-0.0300389 72.4133 3.58172 76 8 76L91.6863 76C98.8135 76 102.383 67.3829 97.3431 62.3431L38.168 3.16801Z" />
          </mask>
          <path
            d="M38.168 3.16801C35.0438 0.0438156 29.9537 0.0260963 27.0625 3.36705C11.4047 21.4604 2.01014 44.1408 0.287963 68.0065C-0.0300389 72.4133 3.58172 76 8 76L91.6863 76C98.8135 76 102.383 67.3829 97.3431 62.3431L38.168 3.16801Z"
            fill="#D8C2E5"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11988)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_purple peace_radius_${radius}`}
          width="139"
          height="103"
          viewBox="0 0 139 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11998" fill="white">
            <path d="M49.5908 2.59084C46.4666 -0.533348 41.3833 -0.546833 38.43 2.73936C15.5288 28.2218 2.03833 60.7907 0.213118 95.0031C-0.0222592 99.4151 3.58172 103 8 103L130.686 103C137.814 103 141.383 94.3829 136.343 89.3431L49.5908 2.59084Z" />
          </mask>
          <path
            d="M49.5908 2.59084C46.4666 -0.533348 41.3833 -0.546833 38.43 2.73936C15.5288 28.2218 2.03833 60.7907 0.213118 95.0031C-0.0222592 99.4151 3.58172 103 8 103L130.686 103C137.814 103 141.383 94.3829 136.343 89.3431L49.5908 2.59084Z"
            fill="#D8C2E5"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11998)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace  peace_level_${level} peace_color_purple peace_radius_${radius}`}
          width="178"
          height="131"
          viewBox="0 0 178 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11972" fill="white">
            <path d="M61.0137 3.01368C57.8895 -0.110512 52.8096 -0.120975 49.8203 3.13253C19.6465 35.9734 2.05504 78.443 0.169167 123.001C-0.0176648 127.415 3.58172 131 8 131L169.686 131C176.814 131 180.383 122.383 175.343 117.343L61.0137 3.01368Z" />
          </mask>
          <path
            d="M61.0137 3.01368C57.8895 -0.110512 52.8096 -0.120975 49.8203 3.13253C19.6465 35.9734 2.05504 78.443 0.169167 123.001C-0.0176648 127.415 3.58172 131 8 131L169.686 131C176.814 131 180.383 122.383 175.343 117.343L61.0137 3.01368Z"
            fill="#D8C2E5"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11972)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_purple peace_radius_${radius}`}
          width="218"
          height="159"
          viewBox="0 0 218 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_11983" fill="white">
            <path d="M72.7294 2.72942C69.6052 -0.394775 64.5276 -0.403084 61.5143 2.82825C23.8666 43.2007 2.0663 95.8313 0.139631 151C-0.0145753 155.415 3.58172 159 8 159L209.686 159C216.814 159 220.383 150.383 215.343 145.343L72.7294 2.72942Z" />
          </mask>
          <path
            d="M72.7294 2.72942C69.6052 -0.394775 64.5276 -0.403084 61.5143 2.82825C23.8666 43.2007 2.0663 95.8313 0.139631 151C-0.0145753 155.415 3.58172 159 8 159L209.686 159C216.814 159 220.383 150.383 215.343 145.343L72.7294 2.72942Z"
            fill="#D8C2E5"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_11983)"
          />
        </svg>
      )}
      {radius === 'fifth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_purple peace_radius_${radius}`}
          width="65"
          height="58"
          viewBox="0 0 65 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12106" fill="white">
            <path d="M38.9786 4.31881C36.7679 0.493355 31.841 -0.850816 28.2926 1.78168C20.7044 7.41126 14.3113 14.5364 9.52512 22.7468C4.73894 30.9572 1.68896 40.0312 0.529254 49.4082C-0.0130464 53.7931 3.58427 57.418 8.00238 57.4567L55.9964 57.8773C62.1871 57.9315 66.0907 51.2352 62.9931 45.8748L38.9786 4.31881Z" />
          </mask>
          <path
            d="M38.9786 4.31881C36.7679 0.493355 31.841 -0.850816 28.2926 1.78168C20.7044 7.41126 14.3113 14.5364 9.52512 22.7468C4.73894 30.9572 1.68896 40.0312 0.529254 49.4082C-0.0130464 53.7931 3.58427 57.418 8.00238 57.4567L55.9964 57.8773C62.1871 57.9315 66.0907 51.2352 62.9931 45.8748L38.9786 4.31881Z"
            fill="#D8C2E5"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12106)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_purple peace_radius_${radius}`}
          width="106"
          height="94"
          viewBox="0 0 106 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12090" fill="white">
            <path d="M59.4644 4.81997C57.2537 0.994507 52.3413 -0.338116 48.6849 2.14228C34.9708 11.4457 23.4841 23.723 15.1041 38.0985C6.7241 52.4739 1.70057 68.5189 0.362447 85.0368C0.00568935 89.4407 3.58585 93.0587 8.00395 93.0974L96.9964 93.8773C103.187 93.9315 107.091 87.2352 103.993 81.8748L59.4644 4.81997Z" />
          </mask>
          <path
            d="M59.4644 4.81997C57.2537 0.994507 52.3413 -0.338116 48.6849 2.14228C34.9708 11.4457 23.4841 23.723 15.1041 38.0985C6.7241 52.4739 1.70057 68.5189 0.362447 85.0368C0.00568935 89.4407 3.58585 93.0587 8.00395 93.0974L96.9964 93.8773C103.187 93.9315 107.091 87.2352 103.993 81.8748L59.4644 4.81997Z"
            fill="#D8C2E5"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12090)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_purple peace_radius_${radius}`}
          width="145"
          height="127"
          viewBox="0 0 145 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12074" fill="white">
            <path d="M78.9509 4.05277C76.7402 0.227308 71.8334 -1.09961 68.1312 1.31183C48.5634 14.0575 32.2089 31.2188 20.411 51.4574C8.61304 71.6961 1.73822 94.3835 0.289093 117.691C0.014922 122.101 3.58734 125.717 8.00545 125.756L135.996 126.877C142.187 126.932 146.091 120.235 142.993 114.875L78.9509 4.05277Z" />
          </mask>
          <path
            d="M78.9509 4.05277C76.7402 0.227308 71.8334 -1.09961 68.1312 1.31183C48.5634 14.0575 32.2089 31.2188 20.411 51.4574C8.61304 71.6961 1.73822 94.3835 0.289093 117.691C0.014922 122.101 3.58734 125.717 8.00545 125.756L135.996 126.877C142.187 126.932 146.091 120.235 142.993 114.875L78.9509 4.05277Z"
            fill="#D8C2E5"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12074)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_purple peace_radius_${radius}`}
          width="184"
          height="161"
          viewBox="0 0 184 161"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12058" fill="white">
            <path d="M98.4374 4.28557C96.2267 0.460112 91.3229 -0.863245 87.5944 1.50731C62.1639 17.6759 40.9334 39.7149 25.7178 65.8163C10.5023 91.9178 1.7855 121.252 0.246614 151.348C0.0209895 155.76 3.58884 159.375 8.00695 159.414L174.996 160.877C181.187 160.932 185.091 154.235 181.993 148.875L98.4374 4.28557Z" />
          </mask>
          <path
            d="M98.4374 4.28557C96.2267 0.460112 91.3229 -0.863245 87.5944 1.50731C62.1639 17.6759 40.9334 39.7149 25.7178 65.8163C10.5023 91.9178 1.7855 121.252 0.246614 151.348C0.0209895 155.76 3.58884 159.375 8.00695 159.414L174.996 160.877C181.187 160.932 185.091 154.235 181.993 148.875L98.4374 4.28557Z"
            fill="#D8C2E5"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12058)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_purple peace_radius_${radius}`}
          width="224"
          height="196"
          viewBox="0 0 224 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_12083" fill="white">
            <path d="M118.424 4.65255C116.213 0.827087 111.311 -0.493916 107.565 1.849C76.1172 21.5185 49.8814 48.5574 31.1607 80.6717C12.44 112.786 1.8388 148.939 0.218589 185.996C0.0255979 190.41 3.59038 194.025 8.00849 194.063L214.996 195.877C221.187 195.932 225.091 189.235 221.993 183.875L118.424 4.65255Z" />
          </mask>
          <path
            d="M118.424 4.65255C116.213 0.827087 111.311 -0.493916 107.565 1.849C76.1172 21.5185 49.8814 48.5574 31.1607 80.6717C12.44 112.786 1.8388 148.939 0.218589 185.996C0.0255979 190.41 3.59038 194.025 8.00849 194.063L214.996 195.877C221.187 195.932 225.091 189.235 221.993 183.875L118.424 4.65255Z"
            fill="#D8C2E5"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_12083)"
          />
        </svg>
      )}
    </>
  );
}

export { Purple };
