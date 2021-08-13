import {FormikErrors} from 'formik';
import {IHomeForm} from './HomeForm.models';

const handleValidate = (values: IHomeForm) => {
  const error: FormikErrors<IHomeForm> = {};

  if (!values.name) {
    error.name = 'Please enter name';
  }

  if (!values.userName) {
    error.userName = 'Please enter user name';
  }

  if (!values.email) {
    error.email = 'Please enter email';
  }

  if (!values.phone) {
    error.phone = 'Please enter phone';
  }

  return error;
};

export default handleValidate;
