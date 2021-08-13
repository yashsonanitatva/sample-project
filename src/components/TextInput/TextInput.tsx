import React, {
  ChangeEventHandler,
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from 'react';

import useUid from '@lib/hooks/useUid';
import {TextInputProps} from './TextInput.models';
import {
  HtmlInput,
  InfoLabel,
  InputLabel,
  InputStyle,
  TextInputContainer
} from './TextInput.styles';
import InputContainer from '@components/InputContainer';

const TextInput: FunctionComponent<TextInputProps> = (props) => {
  const {
    label,
    defaultValue,
    value,
    disabled = false,
    error = false,
    name,
    infoLabel,
    onFocus,
    onBlur,
    onChange,
    errorMessage,
    fullWidth,
    readOnly,
    ...rest
  } = props;

  const [inputFocused, setInputFocused] = useState(false);
  const [used, setUsed] = useState(false);

  const onChangeWrapper: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setUsed(event.target.value?.length > 0);
      onChange?.(event);
    },
    [onChange]
  );

  useEffect(() => {
    setUsed(value ? value.length > 0 : false);
  }, [value]);

  const uid = useUid('input', name);

  return (
    <TextInputContainer $fullWidth={fullWidth}>
      <InputContainer focused={inputFocused} disabled={disabled} error={error}>
        <InputStyle>
          {label && (
            <InputLabel
              htmlFor={uid}
              data-testid={`${uid}-label`}
              active={inputFocused || used}
              disabled={disabled}
              error={error}
            >
              {error ? errorMessage : label}
            </InputLabel>
          )}
          <HtmlInput
            name={name}
            data-testid={uid}
            id={uid}
            value={value}
            defaultValue={defaultValue}
            fullWidth={fullWidth}
            onFocus={(event) => {
              setInputFocused(true);
              onFocus?.(event);
            }}
            onBlur={(event) => {
              setInputFocused(false);
              onBlur?.(event);
            }}
            onChange={onChangeWrapper}
            disabled={disabled}
            error={error}
            readOnly={readOnly}
            {...rest}
          />
        </InputStyle>
      </InputContainer>
      {infoLabel && (
        <InfoLabel data-testid={`${uid}-info-label`}>{infoLabel}</InfoLabel>
      )}
    </TextInputContainer>
  );
};

export default TextInput;
