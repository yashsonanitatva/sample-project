import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form, FieldProps, Field } from "formik";
import "./Login.i18n";

import { Box, LoginContainer } from "./Login.styles";
import { LoginProps } from "./Login.models";
import TextInput from "@components/TextInput";
import { Button } from "@components/Button";
import { loginValidate } from "./Login.validate";
import { setLoggedIn } from "@state/actions/auth.action";
import { useDispatch } from "react-redux";

const Login: FunctionComponent<LoginProps> = ({ userName, password }) => {
  const { t } = useTranslation("Login", { useSuspense: false });
  const dispatch = useDispatch();

  return (
    <LoginContainer data-testid="login">
      <h1 style={{ textAlign: "center" }}>{t("title")}</h1>
      <Box marginBottom={20} />
      <Formik<LoginProps>
        initialValues={{ userName: "", password: "" }}
        onSubmit={() => {
          dispatch(setLoggedIn(true));
        }}
        validate={(values) => loginValidate(values, t)}
      >
        {({ handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="userName">
              {({ field }: FieldProps) => (
                <TextInput
                  {...field}
                  label={t("userName")}
                  autoCapitalize="off"
                  type="text"
                  fullWidth
                />
              )}
            </Field>
            <Box marginBottom={20} />
            <Field name="password">
              {({ field }: FieldProps) => (
                <TextInput
                  {...field}
                  type="password"
                  label={t("password")}
                  autoCapitalize="off"
                  fullWidth
                />
              )}
            </Field>
            <Box marginBottom={20} />
            <Button
              type="submit"
              name="btnLogin"
              label={t("login")}
              fullWidth
            />
          </Form>
        )}
      </Formik>
    </LoginContainer>
  );
};

export default Login;
