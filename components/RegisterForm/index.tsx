"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { superbaseClient } from "@/app/lib/superbaseClient";
import Alert from "react-bootstrap/Alert";
import { useMutation, gql } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { ValidateMessage, ValidateWrapper } from "./styled";
import Image from "next/image";

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($id: String!, $name: String!, $email: String!) {
    createUser(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const RegisterForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION);
  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const supabase = superbaseClient();
      console.log("data", values);

      try {
        const signUpResponse = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
        });

        if (signUpResponse.error) {
          throw new Error(signUpResponse.error.message);
        }

        console.log("id", signUpResponse.data?.user?.id);

        await createUser({
          variables: {
            id: signUpResponse.data?.user?.id,
            name: values.Name,
            email: values.email,
          },
        });
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
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label htmlFor="Name">Name</Form.Label>
          <Form.Control
            id="Name"
            name="Name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Name}
          />
          {formik.touched.Name && formik.errors.Name ? (
            <ValidateWrapper>
              <Image src="/alert.svg" alt="error" width={12} height={12} />
              <ValidateMessage>{formik.errors.Name}</ValidateMessage>
            </ValidateWrapper>
          ) : null}
        </Form.Group>
      </Row>
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
      <Form.Group className="mb-3">
        <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
        <Form.Control
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <ValidateWrapper>
            <Image src="/alert.svg" alt="error" width={12} height={12} />
            <ValidateMessage>{formik.errors.confirmPassword}</ValidateMessage>
          </ValidateWrapper>
        ) : null}
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default RegisterForm;
