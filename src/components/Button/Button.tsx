import { FunctionComponent, useCallback } from "react";
import useUid from "@lib/hooks/useUid";
import { ButtonProps } from "./Button.models";
import {
  ButtonContainer,
  ButtonText,
  IconLabel,
  StyledButton,
  Spinner,
} from "./Button.styles";

/**
 * A primary button element.
 *
 * Children must adhere to the guidelines here: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content
 */
export const Button: FunctionComponent<ButtonProps> = (props) => {
  const {
    label,
    name,
    children,
    busy = false,
    disabled = false,
    variant = "contained",
    type = "button",
    size = "default",
    onClick,
    Icon,
    fullWidth,
    ...rest
  } = props;

  const uid = useUid("button", name);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick?.(event);
    },
    [onClick]
  );

  return (
    <ButtonContainer
      data-testid={`${uid}-container`}
      $variant={variant}
      $fullWidth={fullWidth}
    >
      <StyledButton
        name={name}
        aria-label={label ?? name}
        variant={variant}
        disabled={disabled || busy}
        data-testid={uid}
        onClick={handleClick}
        type={type}
        size={size}
        fullWidth={fullWidth}
        busy={busy}
        {...rest}
      >
        {busy ? (
          <Spinner />
        ) : variant === "icon" && Icon ? (
          <Icon />
        ) : (
          children ?? <ButtonText>{label}</ButtonText>
        )}
      </StyledButton>
      {variant === "icon" && <IconLabel size={size}>{label}</IconLabel>}
    </ButtonContainer>
  );
};
