import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import clsx from "clsx";

import Logo from "../../../components/logo/Logo";
import Icons from "../../../components/icons/Icons";

import httpClient from "../../../utils/HttpClient";
import userService from "../../../utils/UserService";

import routers from "../../../configurations/routes";

import "./page.css";

const styleClasses = {
  pageBody: "page_body",
  logoContainer: "logo_container",
  formContainer: "form_container",
  form: "form",
  formGroup: "group",
  formLabel: "label",
  formLabelActive: "active",
  formControl: "control",
  togglePasswordBtn: "toggle_password_btn",
  togglePasswordBtnIcon: "icon",
  helpOptionsContainer: "help_options_container",
  error: "error",
};

export default function Page() {
  const [redirect, setRedirect] = useState(false);

  const [code, setCode] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
  });

  const handleSubmit = () => {
    httpClient.endpoints.auth.login
      .post({
        body: {
          code: code.value,
          password: password.value,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          userService.setUser(response.data);

          setRedirect(true);
        }
      })
      .catch(() => {
        setCode({ ...code, error: "Code is incorrect." });
        setPassword({ ...password, error: "Password is incorrect" });
      });
  };

  return redirect ? (
    <Navigate to={routers.admin.home} replace={true} />
  ) : (
    <div className={clsx(styleClasses.pageBody)}>
      <Container fluid="md" className={clsx(styleClasses.formContainer)}>
        <Form className={clsx(styleClasses.form)}>
          <div className={clsx(styleClasses.logoContainer)}>
            <Logo />
          </div>
          <CodeInput
            value={code.value}
            onChange={(value) => {
              let error = "";
              if (value === "") {
                error = "Code is required.";
              }
              setCode({ value, error });
            }}
            error={code.error}
          />
          <PasswordInput
            value={password.value}
            onChange={(value) => {
              let error = "";
              if (value === "") {
                error = "Password is required.";
              }

              setPassword({ value, error });
            }}
            error={password.error}
          />
          <Container className={clsx(styleClasses.helpOptionsContainer)}>
            <Row>
              <Col sm={6}>
                <Form.Check label="Remember me" />
              </Col>
              <Col sm={6}>
                <Link>Forgot password?</Link>
              </Col>
            </Row>
          </Container>
          <Button onClick={handleSubmit}>Login</Button>
        </Form>
      </Container>
    </div>
  );
}

function CodeInput({ onChange, value = "", error = "" }) {
  const [activeInput, setActiveInput] = useState(false);
  const inputRef = useRef();

  const handleActiveInput = () => {
    setActiveInput(true);
    inputRef.current.focus();
  };

  const handleBlurInput = () => {
    const inputValue = inputRef.current.value;

    if (inputValue === "") {
      setActiveInput(false);
    }
  };

  const handleOnChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <Form.Group
        className={clsx(styleClasses.formGroup)}
        onClick={handleActiveInput}
        onBlur={handleBlurInput}
      >
        <Form.Label
          className={clsx(styleClasses.formLabel, {
            [styleClasses.formLabelActive]: activeInput,
          })}
          onBlur={handleBlurInput}
        >
          Code
        </Form.Label>
        <Form.Control
          ref={inputRef}
          type={"text"}
          className={clsx(styleClasses.formControl)}
          onChange={handleOnChange}
          value={value}
          onFocus={() => {
            setActiveInput(true);
          }}
        />
      </Form.Group>
      <span className={clsx(styleClasses.error)}>{error}</span>
    </>
  );
}

function PasswordInput({ onChange = (value) => {}, value = "", error = "" }) {
  const [showPassword, setShowPassword] = useState(false);
  const [activeInput, setActiveInput] = useState(false);

  const inputRef = useRef();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);

    const inputValue = inputRef.current.value;

    if (inputValue === "") {
      inputRef.current.focus();
    }
  };

  const handleActiveInput = () => {
    setActiveInput(true);
    inputRef.current.focus();
  };

  const handleBlurInput = () => {
    const inputValue = inputRef.current.value;

    if (inputValue === "") {
      setActiveInput(false);
    }
  };

  const handleOnChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <Form.Group
        className={clsx(styleClasses.formGroup)}
        onClick={handleActiveInput}
        onBlur={handleBlurInput}
      >
        <Form.Label
          className={clsx(styleClasses.formLabel, {
            [styleClasses.formLabelActive]: activeInput,
          })}
          onBlur={handleBlurInput}
        >
          Password
        </Form.Label>
        <Form.Control
          ref={inputRef}
          type={showPassword ? "text" : "password"}
          className={clsx(styleClasses.formControl)}
          onChange={handleOnChange}
          onFocus={() => {
            setActiveInput(true);
          }}
          value={value}
        />
        <Button
          className={clsx(styleClasses.togglePasswordBtn)}
          onClick={handleTogglePassword}
        >
          {showPassword ? (
            <Icons.Eye className={clsx(styleClasses.togglePasswordBtnIcon)} />
          ) : (
            <Icons.EyeSlash
              className={clsx(styleClasses.togglePasswordBtnIcon)}
            />
          )}
        </Button>
      </Form.Group>
      <span className={clsx(styleClasses.error)}>{error}</span>
    </>
  );
}
