"use client";
import React from "react";
import RegisterForm from "@/components/RegisterForm";
import { FormWrapper, LoginWrapper, LoginLink } from "./styled";

const Register = () => {
  return (
    <FormWrapper>
      <h2>Member Registration</h2>
      <RegisterForm />
      <LoginWrapper>
        Already have an account? <LoginLink href="/login">Login</LoginLink>
      </LoginWrapper>
    </FormWrapper>
  );
};

export default Register;
