import {ThemeName} from '@theme/theme';

export enum EnvironmentType {
  /**
   * Deployed publicly.
   */
  Production = 'production',
  /**
   * Deployed for use within company employees.
   */
  Development = 'develop',
  /**
   * Running on the local machine of a developer.
   */
  Local = 'local'
}

export enum VercelEnvironment {
  Production = 'production',
  Development = 'development'
}

export interface Environment {
  /**
   * True if current environment is designed to help developers debug and never see the light of day for any actual users (e.g. NODE_ENV being development).
   */
  isDebugBuild: boolean;
  /**
   * True if current environment is test
   */
  isTestEnvironment: boolean;
  /**
   * If the project is deployed on Vercel, what kind of deployment it is.
   */
  vercelEnvironment?: VercelEnvironment;
  /**
   * Name of the theme used across the entire project.
   */
  themeName: ThemeName;
  /**
   * Api server
   */
  apiServer: string;
}
