import {ThemeName} from '@theme/theme';
import {Environment, VercelEnvironment} from './environment.models';

export const environment: Environment = {
  isDebugBuild: process.env.NODE_ENV === 'development',
  isTestEnvironment: process.env.NODE_ENV === 'test',
  vercelEnvironment: process.env.NEXT_PUBLIC_VERCEL_ENV as VercelEnvironment,
  themeName: (process.env.NEXT_PUBLIC_THEME as ThemeName) ?? 'dark',
  apiServer: process.env.REACT_APP_API_SERVER ?? ''
};
