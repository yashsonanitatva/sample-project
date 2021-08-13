import * as styled from 'styled-components';

import {ThemeName} from '../theme/theme';

type ThemeInterface = {
  currentTheme: ThemeName;
};

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
