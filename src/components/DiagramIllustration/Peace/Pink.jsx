import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function Pink({ radius, onClick, level = 'middle' }) {
  const { activePeace } = useContext(activePeaceContext);
  const isActive = activePeace === 'pink';
  const strokeColor = isActive ? '#FF40F8' : '#fff';

  function handleClick() {
    onClick('pink');
  }

  return (
    <>
      {radius === 'fifth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_pink peace_radius_${radius}`}
          width="59"
          height="47"
          viewBox="0 0 59 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12007" fill="white">
            <path d="M8 -7.62939e-06C3.58172 -7.62939e-06 -0.0473047 3.59369 0.45646 7.98315C1.94719 20.9724 7.04969 33.2909 15.1803 43.5297C17.9279 46.9898 23.0352 46.9648 26.1594 43.8406L56.3431 13.6569C61.3829 8.61713 57.8135 0 50.6863 0L8 -7.62939e-06Z" />
          </mask>
          <path
            d="M8 -7.62939e-06C3.58172 -7.62939e-06 -0.0473047 3.59369 0.45646 7.98315C1.94719 20.9724 7.04969 33.2909 15.1803 43.5297C17.9279 46.9898 23.0352 46.9648 26.1594 43.8406L56.3431 13.6569C61.3829 8.61713 57.8135 0 50.6863 0L8 -7.62939e-06Z"
            fill="#FDBCDF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12007)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_pink peace_radius_${radius}`}
          width="100"
          height="76"
          viewBox="0 0 100 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11987" fill="white">
            <path d="M8 -7.62939e-06C3.58172 -7.62939e-06 -0.0300394 3.58669 0.287962 7.99352C2.01013 31.8591 11.4047 54.5396 27.0625 72.6329C29.9537 75.9739 35.0438 75.9562 38.168 72.832L97.3431 13.6569C102.383 8.61713 98.8135 0 91.6863 0L8 -7.62939e-06Z" />
          </mask>
          <path
            d="M8 -7.62939e-06C3.58172 -7.62939e-06 -0.0300394 3.58669 0.287962 7.99352C2.01013 31.8591 11.4047 54.5396 27.0625 72.6329C29.9537 75.9739 35.0438 75.9562 38.168 72.832L97.3431 13.6569C102.383 8.61713 98.8135 0 91.6863 0L8 -7.62939e-06Z"
            fill="#FDBCDF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11987)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_pink peace_radius_${radius}`}
          width="139"
          height="103"
          viewBox="0 0 139 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11997" fill="white">
            <path d="M8 -1.52588e-05C3.58172 -1.52588e-05 -0.0222598 3.5849 0.213117 7.9969C2.03832 42.2093 15.5288 74.7782 38.43 100.261C41.3833 103.547 46.4666 103.533 49.5908 100.409L136.343 13.6569C141.383 8.61714 137.814 0 130.686 0L8 -1.52588e-05Z" />
          </mask>
          <path
            d="M8 -1.52588e-05C3.58172 -1.52588e-05 -0.0222598 3.5849 0.213117 7.9969C2.03832 42.2093 15.5288 74.7782 38.43 100.261C41.3833 103.547 46.4666 103.533 49.5908 100.409L136.343 13.6569C141.383 8.61714 137.814 0 130.686 0L8 -1.52588e-05Z"
            fill="#FDBCDF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11997)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_pink peace_radius_${radius}`}
          width="178"
          height="131"
          viewBox="0 0 178 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11971" fill="white">
            <path d="M8 -1.52588e-05C3.58173 -1.52588e-05 -0.0176655 3.58458 0.169165 7.9989C2.05503 52.557 19.6465 95.0266 49.8203 127.867C52.8096 131.121 57.8894 131.111 61.0136 127.986L175.343 13.6569C180.383 8.61714 176.814 0 169.686 0L8 -1.52588e-05Z" />
          </mask>
          <path
            d="M8 -1.52588e-05C3.58173 -1.52588e-05 -0.0176655 3.58458 0.169165 7.9989C2.05503 52.557 19.6465 95.0266 49.8203 127.867C52.8096 131.121 57.8894 131.111 61.0136 127.986L175.343 13.6569C180.383 8.61714 176.814 0 169.686 0L8 -1.52588e-05Z"
            fill="#FDBCDF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11971)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_pink peace_radius_${radius}`}
          width="218"
          height="159"
          viewBox="0 0 218 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_11982" fill="white">
            <path d="M8.00001 -1.52588e-05C3.58173 -1.52588e-05 -0.0145758 3.58453 0.13963 8.00012C2.06629 63.1687 23.8666 115.799 61.5143 156.172C64.5275 159.403 69.6052 159.395 72.7294 156.271L215.343 13.6569C220.383 8.61714 216.814 0 209.686 0L8.00001 -1.52588e-05Z" />
          </mask>
          <path
            d="M8.00001 -1.52588e-05C3.58173 -1.52588e-05 -0.0145758 3.58453 0.13963 8.00012C2.06629 63.1687 23.8666 115.799 61.5143 156.172C64.5275 159.403 69.6052 159.395 72.7294 156.271L215.343 13.6569C220.383 8.61714 216.814 0 209.686 0L8.00001 -1.52588e-05Z"
            fill="#FDBCDF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_11982)"
          />
        </svg>
      )}
      {radius === 'fifth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_pink peace_radius_${radius}`}
          width="64"
          height="58"
          viewBox="0 0 64 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12105" fill="white">
            <path d="M8 -7.62939e-06C3.58172 -7.62939e-06 -0.0472237 3.59323 0.456631 7.98269C1.5335 17.3641 4.50105 26.4594 9.21044 34.7078C13.9198 42.9561 20.244 50.135 27.7756 55.831C31.2996 58.4962 36.2386 57.1975 38.4845 53.3926L62.8776 12.0665C66.0255 6.73356 62.1809 0 55.9883 0L8 -7.62939e-06Z" />
          </mask>
          <path
            d="M8 -7.62939e-06C3.58172 -7.62939e-06 -0.0472237 3.59323 0.456631 7.98269C1.5335 17.3641 4.50105 26.4594 9.21044 34.7078C13.9198 42.9561 20.244 50.135 27.7756 55.831C31.2996 58.4962 36.2386 57.1975 38.4845 53.3926L62.8776 12.0665C66.0255 6.73356 62.1809 0 55.9883 0L8 -7.62939e-06Z"
            fill="#FDBCDF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12105)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_pink peace_radius_${radius}`}
          width="105"
          height="93"
          viewBox="0 0 105 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12089" fill="white">
            <path d="M8 -7.62939e-06C3.58172 -7.62939e-06 -0.0300029 3.58652 0.28815 7.99332C1.48085 24.5137 6.3591 40.5939 14.6051 55.0366C22.8511 69.4792 34.2193 81.8541 47.8399 91.2787C51.4732 93.7928 56.3977 92.5056 58.6436 88.7007L103.878 12.0665C107.025 6.73356 103.181 0 96.9883 0L8 -7.62939e-06Z" />
          </mask>
          <path
            d="M8 -7.62939e-06C3.58172 -7.62939e-06 -0.0300029 3.58652 0.28815 7.99332C1.48085 24.5137 6.3591 40.5939 14.6051 55.0366C22.8511 69.4792 34.2193 81.8541 47.8399 91.2787C51.4732 93.7928 56.3977 92.5056 58.6436 88.7007L103.878 12.0665C107.025 6.73356 103.181 0 96.9883 0L8 -7.62939e-06Z"
            fill="#FDBCDF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12089)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_pink peace_radius_${radius}`}
          width="144"
          height="127"
          viewBox="0 0 144 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12073" fill="white">
            <path d="M8 -1.52588e-05C3.58172 -1.52588e-05 -0.0222497 3.58449 0.213267 7.99649C1.45746 31.3043 8.12713 54.0401 19.7366 74.3738C31.3462 94.7075 47.5353 112.008 66.9748 124.927C70.6546 127.373 75.5734 126.091 77.8193 122.286L142.878 12.0665C146.025 6.73357 142.181 0 135.988 0L8 -1.52588e-05Z" />
          </mask>
          <path
            d="M8 -1.52588e-05C3.58172 -1.52588e-05 -0.0222497 3.58449 0.213267 7.99649C1.45746 31.3043 8.12713 54.0401 19.7366 74.3738C31.3462 94.7075 47.5353 112.008 66.9748 124.927C70.6546 127.373 75.5734 126.091 77.8193 122.286L142.878 12.0665C146.025 6.73357 142.181 0 135.988 0L8 -1.52588e-05Z"
            fill="#FDBCDF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12073)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_pink peace_radius_${radius}`}
          width="183"
          height="160"
          viewBox="0 0 183 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12057" fill="white">
            <path d="M8 -1.52588e-05C3.58173 -1.52588e-05 -0.0176725 3.58369 0.169276 7.99802C1.44375 38.0915 9.89544 67.4867 24.8682 93.711C39.8409 119.935 60.8591 142.156 86.1269 158.55C89.8334 160.955 94.7492 159.677 96.995 155.872L181.878 12.0665C185.025 6.73357 181.181 0 174.988 0L8 -1.52588e-05Z" />
          </mask>
          <path
            d="M8 -1.52588e-05C3.58173 -1.52588e-05 -0.0176725 3.58369 0.169276 7.99802C1.44375 38.0915 9.89544 67.4867 24.8682 93.711C39.8409 119.935 60.8591 142.156 86.1269 158.55C89.8334 160.955 94.7492 159.677 96.995 155.872L181.878 12.0665C185.025 6.73357 181.181 0 174.988 0L8 -1.52588e-05Z"
            fill="#FDBCDF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12057)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_pink peace_radius_${radius}`}
          width="223"
          height="195"
          viewBox="0 0 223 195"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_12082" fill="white">
            <path d="M8.00001 -1.52588e-05C3.58173 -1.52588e-05 -0.0145945 3.58307 0.139708 7.99866C1.43449 45.0508 11.7092 81.2782 30.1313 113.544C48.5534 145.81 74.5287 173.073 105.779 193.022C109.503 195.399 114.417 194.124 116.662 190.319L221.878 12.0665C225.025 6.73355 221.181 0 214.988 0L8.00001 -1.52588e-05Z" />
          </mask>
          <path
            d="M8.00001 -1.52588e-05C3.58173 -1.52588e-05 -0.0145945 3.58307 0.139708 7.99866C1.43449 45.0508 11.7092 81.2782 30.1313 113.544C48.5534 145.81 74.5287 173.073 105.779 193.022C109.503 195.399 114.417 194.124 116.662 190.319L221.878 12.0665C225.025 6.73355 221.181 0 214.988 0L8.00001 -1.52588e-05Z"
            fill="#FDBCDF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_12082)"
          />
        </svg>
      )}
    </>
  );
}

export { Pink };
