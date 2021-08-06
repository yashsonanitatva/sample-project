import { FormikErrors } from "formik";
import { IHomeForm } from "./HomeForm.models";

const handleValidate = (values: IHomeForm) => {
	const error: FormikErrors<IHomeForm> = {};

	if (!values.firstName) {
		error.firstName = "Please enter first name";
	}
	if (!values.lastName) {
		error.lastName = "Please enter last name";
	}
	if (!values.email) {
		error.email = "Please enter email";
	}
	if (!values.phone) {
		error.phone = "Please enter phone";
	}
	return error;
};

export default handleValidate;
