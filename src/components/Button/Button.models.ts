import {ButtonHTMLAttributes, FunctionComponent} from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Aside from the standard functionality of the `name` prop in HTML, test id and analytics event names will be generated using the value given for this.
   */
  name: HTMLButtonElement['name'];
  /**
   * Button contents
   */
  label?: string;
  /**
   * Button loading state
   */
  busy?: boolean;
  /**
   * Variant
   * @default contained
   */
  variant?: ButtonVariants;
  /**
   * Size
   * @default default
   */
  size?: 'default' | 'contained';
  /**
   * Icon
   */
  Icon?: FunctionComponent;
  /**
   * If set to true, it will occupy all available parent width space as opposed to its
   * default behaviour of keeping a fixed width
   */
  fullWidth?: boolean;
  /**
   * Button with rounded corners
   */
  roundedCorners?: boolean;
}

export type ButtonVariants =
  | 'contained'
  | 'outlined'
  | 'squared'
  | 'icon'
  | 'pill'
  | 'link';
