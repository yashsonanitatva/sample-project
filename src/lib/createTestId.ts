import kebabCase from 'lodash/kebabCase';

export type TestElementType =
  | 'input'
  | 'input-container'
  | 'button'
  | 'navigation';

export const createTestId = (type: TestElementType, name: string) => `${type}-${kebabCase(name)}`;
