import {Except} from 'type-fest';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Aside from the standard functionality of the `name` prop in HTML, test id and analytics event names will be generated using the value given for this.
   */
  name: HTMLInputElement['name'];
  /**
   * Optional prop to make it a controlled component
   * @default undefined
   */
  value?: string;
  /**
   * Optional prop to disable the text input
   * @default false
   */
  disabled?: HTMLInputElement['disabled'];
  /**
   * Label for the input
   * @default undefined
   */
  label?: string;
  /**
   * Changes the styles to show error
   * @default false
   **/
  error?: boolean;
  /**
   * Error message to show whenever there is an error
   * @default undefined
   */
  errorMessage?: string;
  /**
   * Info Label below the input
   * @default undefined
   */
  infoLabel?: string;
  /**
   * If set to true, it will occupy all available parent width space as opposed to its
   * default behaviour of keeping a fixed width
   */
  fullWidth?: boolean;
}

export interface TextLabelProps extends Omit<InputStateProps, 'focused'> {
  /**
   * True when input is either focused or has text value
   */
  active: boolean;
}

export interface InputStateProps {
  /**
   * Focus state of the input element
   */
  focused: boolean;
  /**
   * Error state of the input element
   */
  error: boolean;
  /**
   * Disabled state of the input element
   */
  disabled: boolean;
}

export type HtmlInputProps = Except<InputStateProps, 'focused'> & {
  /**
   * If set to true, it will occupy all available parent width space as opposed to its
   * default behaviour of keeping a fixed width
   */
  fullWidth?: boolean;
  /**
   * If set to true, hides the caret
   */
  readOnly?: boolean;
};
