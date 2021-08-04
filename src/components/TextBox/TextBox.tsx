import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import useUid from '@lib/hooks/useUid';

import './TextBox.i18n';

import { TextBoxContainer } from './TextBox.styles';
import { TextBoxProps } from './TextBox.models';

const TextBox: FunctionComponent<TextBoxProps> = ({ firstProp, secondProp }) => {
  const { t } = useTranslation('TextBox', { useSuspense: false });

  const uid = useUid('input', 'text-box'); // If there is only going to be one of your component on a given page ever, e.g. a tab bar, delete this line and assign a kebab-case string directly to `data-testid` below.

  return (
    <TextBoxContainer data-testid={uid}>
      <h2>{t('title')}</h2>
      <p>{firstProp} {secondProp}</p>
    </TextBoxContainer>
  );
};

export default TextBox;
