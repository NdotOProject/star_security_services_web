import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import clsx from "clsx";

import Logo from "../../../components/logo/Logo";
import Icons from "../../../components/icons/Icons";

import "./Login.css";

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

export default function Login() {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const [codeError, setCodeError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleCodeInputChange = (value) => {
    setCode(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = () => {
    if (code === "") {
      setCodeError("Code is empty.");
    } else {
      setCodeError("");
    }

    if (password === "") {
      setPasswordError("Password is empty.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className={clsx(styleClasses.pageBody)}>
      <Container fluid="md" className={clsx(styleClasses.formContainer)}>
        <Form className={clsx(styleClasses.form)}>
          <div className={clsx(styleClasses.logoContainer)}>
            <Logo />
          </div>
          <CodeInput
            value={code}
            onChange={handleCodeInputChange}
            error={codeError}
          />
          <PasswordInput
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
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
        />
      </Form.Group>
      <span className={clsx(styleClasses.error)}>{error}</span>
    </>
  );
}

function PasswordInput({ onChange, value = "", error = "" }) {
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
