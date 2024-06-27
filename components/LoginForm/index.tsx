"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { superbaseClient } from "@/app/lib/superbaseClient";
import Alert from "react-bootstrap/Alert";
import { useRouter } from "next/navigation";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { SubmitButton, ValidateMessage, ValidateWrapper } from "./styled";
import Image from "next/image";

// async function testloading() {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
// }

const LoginForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const supabase = superbaseClient();
      console.log("data", values);

      try {
        const signUpResponse = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        });

        if (signUpResponse.error) {
          throw new Error(signUpResponse.error.message);
        }

        console.log("id", signUpResponse.data?.user?.id);
        router.push("/");
      } catch (error) {
        console.error("An error occurred:", (error as Error).message);
        setAlertMessage("An error occurred: " + (error as Error).message);
        setShowAlert(true);
      }

      setSubmitting(false);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          {alertMessage}
        </Alert>
      )}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email Address</Form.Label>
        <Form.Control
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ValidateWrapper>
            <Image src="/alert.svg" alt="error" width={12} height={12} />
            <ValidateMessage>{formik.errors.email}</ValidateMessage>
          </ValidateWrapper>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <ValidateWrapper>
            <Image src="/alert.svg" alt="error" width={12} height={12} />
            <ValidateMessage>{formik.errors.password}</ValidateMessage>
          </ValidateWrapper>
        ) : null}
      </Form.Group>
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

export default LoginForm;
