"use client";
import React from "react";
import RegisterForm from "@/components/RegisterForm";
import { FormWrapper } from "./styled";
const Register = () => {
  return (
    <FormWrapper>
      <h2>登入頁面</h2>
      <RegisterForm />
    </FormWrapper>
  );
};

export default Register;
