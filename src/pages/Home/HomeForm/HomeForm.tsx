import React, { FunctionComponent } from "react";

import TextInput from "@components/TextInput";
import { Button } from "@components/Button";
import { FormContainer, MainWrapper } from "./HomeForm.styles";
import { Field, FieldProps, Formik } from "formik";
import handleValidate from "./HomeForm.validate";
import { Box } from "@components/Login/Login.styles";

const HomeForm: FunctionComponent = (props: any) => {
  const handleSubmit = (values: any) => {};

  return (
    <MainWrapper>
      <FormContainer>
        <h1 style={{ textAlign: "center" }}>Add People</h1>
        <Box marginBottom={20} />
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
              <Field name="firstName">
                {({ field, meta }: FieldProps) => (
                  <TextInput
                    {...field}
                    name="firstName"
                    label="First Name"
                    type="text"
                    onChange={(event) => {
                      setFieldValue("firstName", event.target.value);
                    }}
                    fullWidth
                    error={Boolean(meta.error)}
                    errorMessage={meta.error}
                    autoComplete="off"
                  />
                )}
              </Field>
              <Box marginBottom={20} />
              <Field name="lastName">
                {({ field, meta }: FieldProps) => (
                  <TextInput
                    {...field}
                    name="lastName"
                    label="Last Name"
                    onChange={(event) => {
                      setFieldValue("lastName", event.target.value);
                    }}
                    fullWidth
                    error={Boolean(meta.error)}
                    errorMessage={meta.error}
                    autoComplete="off"
                  />
                )}
              </Field>
              <Box marginBottom={20} />
              <Field name="email">
                {({ field, meta }: FieldProps) => (
                  <TextInput
                    {...field}
                    name="email"
                    label="Email"
                    onChange={(event) => {
                      setFieldValue("email", event.target.value);
                    }}
                    fullWidth
                    error={Boolean(meta.error)}
                    errorMessage={meta.error}
                    autoComplete="off"
                  />
                )}
              </Field>
              <Box marginBottom={20} />
              <Field name="phone">
                {({ field, meta }: FieldProps) => (
                  <TextInput
                    {...field}
                    name="phone"
                    label="Phone"
                    onChange={(event) => {
                      setFieldValue("phone", event.target.value);
                    }}
                    fullWidth
                    error={Boolean(meta.error)}
                    errorMessage={meta.error}
                    autoComplete="off"
                  />
                )}
              </Field>
              <Box marginBottom={20} />
              <Button
                name="add user"
                variant="pill"
                type="submit"
                onClick={() => handleSubmit()}
                fullWidth
                label="Add User"
              />
            </>
          )}
        </Formik>
      </FormContainer>
    </MainWrapper>
  );
};

export default HomeForm;
