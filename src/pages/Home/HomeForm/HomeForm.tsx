import React, { FunctionComponent } from 'react';

import TextInput from '@components/TextInput';
import { Button } from '@components/Button';
import { MainWrapper } from './HomeForm.styles';
import { Formik } from 'formik';
import handleValidate from './HomeForm.validate';
import { isBoolean, isEmpty, isNull } from 'lodash';

const HomeForm: FunctionComponent = (props: any) => {

	const handleSubmit = (values: any) => {

	}

	return (
		<MainWrapper>
			<div>
				<Formik
					initialValues={{
						firstName: "",
						lastName: "",
						email: "",
						phone: "",
					}}
					onSubmit={handleSubmit}
					validate={handleValidate}
				>
					{({ values, setFieldValue, handleSubmit, errors, touched }) => (
						<>
							<div style={{ padding: 10, }}>
								<TextInput
									name="firstName"
									label="First Name"
									value={values.firstName}
									onChange={(event) => {
										setFieldValue('firstName', event.target.value);
									}}
								/>
							</div>
							<div style={{ padding: 10, }}>
								<TextInput
									name="lastName"
									label="Last Name"
									value={values.lastName}
									onChange={(event) => {
										setFieldValue('lastName', event.target.value);
									}}
								/>
							</div>
							<div style={{ padding: 10, }}>
								<TextInput
									name="email"
									label="Email"
									value={values.email}
									onChange={(event) => {
										setFieldValue('email', event.target.value);
									}}
								/>
							</div>
							<div style={{ padding: 10, }}>
								<TextInput
									name="phone"
									label="Phone"
									value={values.phone}
									onChange={(event) => {
										setFieldValue('phone', event.target.value);
									}}
								/>
							</div>
							<Button
								name="add user"
								variant="pill"
								type="submit"
								onClick={() => handleSubmit()}
							>
								Add User
							</Button>
						</>
					)}
				</Formik>
			</div>
		</MainWrapper>
	)
};

export default HomeForm;

