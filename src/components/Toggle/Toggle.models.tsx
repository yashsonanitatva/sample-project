import { SwitchOwnProps } from '@radix-ui/react-switch';

export interface ToggleProps extends Omit<SwitchOwnProps, 'required' | 'readOnly'> {
  /**
   * Name for test and label identifier please generate
   * your own test id and pass it down
   */
  name: string;
  /**
   * Disables the switch
   */
  disabled?: boolean;
}
