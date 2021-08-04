import kebabCase from 'lodash/kebabCase';

export type TestElementType =
  | 'input'
  | 'input-container'
  | 'button'
  | 'radio-button'
  | 'box'
  | 'logo'
  | 'toggle'
  | 'template'
  | 'link'
  | 'checkbox'
  | 'tab'
  | 'label'
  | 'transaction'
  | 'rounded-button'
  | 'error-state-view'
  | 'list'
  | 'list-item'
  | 'combo-search-box'
  | 'dropdown-button'
  | 'message-box'
  | 'accordion'
  | 'navigation-button'
  | 'settings-item'
  | 'transaction-item'
  | 'transaction-inspector'
  | 'badge'
  | 'loading';

export const createTestId = (type: TestElementType, name: string) => `${type}-${kebabCase(name)}`;
