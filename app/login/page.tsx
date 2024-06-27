import React from "react";
import { FormWrapper, RegisterWrapper, RegisterLink } from "./styled";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <FormWrapper>
      <h2>Member Login</h2>
      <LoginForm />
      <RegisterWrapper>
        Don't have an account?{" "}
        <RegisterLink href="/register">Register</RegisterLink>
      </RegisterWrapper>
    </FormWrapper>
  );
};

export default Login;
