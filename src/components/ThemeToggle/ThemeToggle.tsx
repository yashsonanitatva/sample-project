import React, {FunctionComponent} from 'react';

import {AbsoluteContainer, ThemeToggleButton} from './ThemeToggle.styles';
import {ThemeToggleProps} from './ThemeToggle.models';

/**
 * This component is for dev purposes only
 */
const ThemeToggle: FunctionComponent<ThemeToggleProps> = (props) => {
  const {toggleTheme} = props;

  return (
    <AbsoluteContainer>
      <ThemeToggleButton
        type="button"
        onClick={toggleTheme}
        name="theme-toggle"
        aria-label="theme-toggle"
        aria-live="polite"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="16px"
          height="16px"
        >
          <path
            fill="currentColor"
            d="M507.607 216.525c5.857-5.857 5.857-15.355 0-21.213L316.69 4.394c-5.858-5.858-15.355-5.858-21.213 0L221.23 78.639l212.131 212.133zM153.616 485.616c17.015-17.015 26.386-39.607 26.385-63.615 0-17.983 29.222-54.182 59.105-66.561 8.643-3.579 20.426-6.366 27.48.688l8.197 8.196.086.087c11.298 11.298 26.365 17.52 42.428 17.52 16.06-.001 31.128-6.224 42.426-17.522l52.426-52.425L200.018 99.852l-52.427 52.427c-11.298 11.298-17.521 26.365-17.521 42.428 0 16.061 6.222 31.128 17.535 42.442.042.042.632.63 8.27 8.267 2.996 2.997 4.393 6.674 4.393 11.572 0 29.428-46.683 75.013-70.267 75.013C40.377 332 .002 372.373 0 421.999v.002c.001 24.009 9.372 46.601 26.387 63.613C43.401 502.63 65.993 512 90.001 512s46.601-9.37 63.615-26.384zM75 422c0-8.284 6.716-15 15-15s15 6.716 15 15-6.716 15-15 15-15-6.715-15-15z"
          />
        </svg>
      </ThemeToggleButton>
    </AbsoluteContainer>
  );
};

export default ThemeToggle;
