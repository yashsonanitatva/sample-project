import {FormikErrors} from 'formik';
import {TFunction} from 'i18next';
import {LoginProps} from './Login.models';

export const loginValidate = (values: LoginProps, t: TFunction) => {
  const {userName, password} = values;

  const errors: FormikErrors<LoginProps> = {};

  if (!userName) {
    errors.userName = t('errors.userName');
  }

  if (!password) {
    errors.password = t('errors.password');
  }

  return errors;
};
