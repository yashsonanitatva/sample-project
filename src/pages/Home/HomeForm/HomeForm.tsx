import React, { FunctionComponent } from "react";

import TextInput from "@components/TextInput";
import { Button } from "@components/Button";
import { FormContainer, MainWrapper } from "./HomeForm.styles";
import { Field, FieldProps, Form, Formik } from "formik";
import handleValidate from "./HomeForm.validate";
import { Box } from "@components/Login/Login.styles";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "@state/actions/user.action";
import { useRouter } from "next/router";
import { IState } from "@state/store.model";

const HomeForm: FunctionComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userList = useSelector((state: IState) => state.user.list);

  const handleSubmit = (values: any) => {
    console.log("in---", [...userList, values]);
    dispatch(setUsers([...userList, values]));
    router.push("/");
  };

  return (
    <MainWrapper>
      <FormContainer>
        <h1 style={{ textAlign: "center" }}>Add People</h1>
        <Box marginBottom={20} />
        <Formik
          initialValues={{
            name: "",
            userName: "",
            email: "",
            phone: "",
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validate={handleValidate}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field name="name">
                {({ field, meta }: FieldProps) => (
                  <TextInput
                    {...field}
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    error={meta.touched && Boolean(meta.error)}
                    errorMessage={meta.error}
                    autoComplete="off"
                  />
                )}
              </Field>
              <Box marginBottom={20} />
              <Field name="userName">
                {({ field, meta }: FieldProps) => (
                  <TextInput
                    {...field}
                    name="userName"
                    label="User Name"
                    fullWidth
                    error={meta.touched && Boolean(meta.error)}
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
                    fullWidth
                    error={meta.touched && Boolean(meta.error)}
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
                    fullWidth
                    error={meta.touched && Boolean(meta.error)}
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
                fullWidth
                label="Add User"
              />
            </Form>
          )}
        </Formik>
      </FormContainer>
    </MainWrapper>
  );
};

export default HomeForm;
