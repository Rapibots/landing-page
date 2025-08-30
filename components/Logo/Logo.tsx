interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="500"
      height="500"
      className={className}
    >
      <title>logo</title>
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
          <path d="m7.38 0h487v448h-487z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cp2">
          <path d="m5.33 0h489.34v448h-489.34z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cp3">
          <path d="m450.67 185.33h42.71v84h-42.71z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="cp4">
          <path d="m6.61 185.33h42.72v84h-42.72z" />
        </clipPath>
      </defs>
      <g id="Clip-Path" clipPath="url(#cp1)">
        <g>
          <g>
            <g id="Clip-Path" clipPath="url(#cp2)">
              <g>
                <path
                  className="s0"
                  d="m320.9 86.1h-141.2c-38.9 0-74.2 15.9-99.7 41.5-25.6 25.6-41.5 60.9-41.5 99.7 0 38.8 15.9 74.1 41.5 99.7 25.5 25.6 60.8 41.4 99.7 41.4h15.4l78.3 73.1c7.1 6.5 18.2 6.1 24.8-0.9 3.1-3.4 4.7-7.7 4.7-12v-60.2h18c38.8 0 74.1-15.8 99.7-41.4 25.6-25.6 41.5-60.9 41.5-99.7 0-38.8-15.9-74.1-41.5-99.7-25.6-25.6-60.9-41.5-99.7-41.5zm-141.2 35.2h141.2c29.2 0 55.7 11.9 74.9 31.1 19.2 19.2 31.1 45.7 31.1 74.9 0 29.1-11.9 55.6-31.1 74.9-19.2 19.2-45.7 31.1-74.9 31.1h-35.5c-9.7 0-17.6 7.9-17.6 17.6v37.4l-53.1-49.5c-3.2-3.3-7.7-5.5-12.8-5.5h-22.2c-29.2 0-55.7-11.9-74.9-31.1-19.2-19.3-31.2-45.8-31.2-74.9 0-29.2 12-55.7 31.2-74.9 19.2-19.2 45.7-31.1 74.9-31.1z"
                />
                <path
                  fillRule="evenodd"
                  className="s0"
                  d="m262.2 33.1h-23.9v72.4h23.9z"
                />
                <path
                  fillRule="evenodd"
                  className="s0"
                  d="m250.3 0.2c-17.3 0-31.3 14-31.3 31.2 0 17.3 14 31.3 31.3 31.3 17.2 0 31.3-14 31.3-31.3 0-17.2-14.1-31.2-31.3-31.2z"
                />
                <g id="Clip-Path" clipPath="url(#cp3)">
                  <g>
                    <path
                      fillRule="evenodd"
                      className="s0"
                      d="m451.9 269c23 0 41.7-18.7 41.7-41.7 0-23.1-18.7-41.7-41.7-41.7z"
                    />
                  </g>
                </g>
                <g id="Clip-Path" clipPath="url(#cp4)">
                  <g>
                    <path
                      fillRule="evenodd"
                      className="s0"
                      d="m48.1 269c-23.1 0-41.7-18.7-41.7-41.7 0-23.1 18.6-41.7 41.7-41.7z"
                    />
                  </g>
                </g>
                <path
                  fillRule="evenodd"
                  className="s0"
                  d="m307.5 177.3c-10.2 0-18.6 8.4-18.6 18.6v56.2c0 10.2 8.4 18.5 18.6 18.5 10.2 0 18.5-8.3 18.5-18.5v-56.2c0-10.2-8.3-18.6-18.5-18.6z"
                />
                <path
                  fillRule="evenodd"
                  className="s0"
                  d="m193.1 177.3c-10.2 0-18.6 8.4-18.6 18.6v56.2c0 10.2 8.4 18.5 18.6 18.5 10.2 0 18.6-8.3 18.6-18.5v-56.2c0-10.2-8.4-18.6-18.6-18.6z"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
