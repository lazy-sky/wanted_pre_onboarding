import { useState } from 'react';
import styled from 'styled-components';

import { Container } from './Shape';

function Input({ title }) {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const [isPasswordView, setIsPasswordView] = useState(false);
  const [emailErrorView, setEmailErrorView] = useState(false);

  const { email, password } = inputValues;

  const handleChangeInputs = (e) => {
    const {
      target: { value, name },
    } = e;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleTogglePasswordView = () => {
    setIsPasswordView((prev) => !prev);
  };

  const handleBlurEmail = () => {
    if (!checkEmailValidation() && email.length) {
      setEmailErrorView(true);
    } else {
      setEmailErrorView(false);
    }
  };

  const checkEmailValidation = () => {
    const emailRegExp =
      // eslint-disable-next-line max-len
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return emailRegExp.test(email);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <InputWrapper>
        <input
          name="email"
          placeholder="E-mail"
          value={email}
          type="email"
          autoFocus
          onChange={handleChangeInputs}
          onBlur={handleBlurEmail}
        />
        {checkEmailValidation()
          ? <img src="/images/check_green.svg" alt="이메일 형식 유효" />
          : <img src="/images/check_gray.svg" alt="이메일 형식 오류" />
        }
      </InputWrapper>

      {!!email.length && emailErrorView && (
        <ErrorMessage>invalid e-mail address.</ErrorMessage>
      )}

      <InputWrapper type="password">
        <input
          name="password"
          placeholder="Password"
          value={password}
          type={isPasswordView ? 'text' : 'password'}
          onChange={handleChangeInputs}
        />
        {isPasswordView
          ? <img
            src="/images/eye.svg"
            alt="비밀번호 보임"
            onClick={handleTogglePasswordView}
          />
          : <img
            src="/images/eye-slash.svg"
            alt="이메일 형식 유효"
            onClick={handleTogglePasswordView}
          />
        }
      </InputWrapper>
    </Container>
  );
}

const InputWrapper = styled.div`
  position: relative;
  margin: 24px auto 0;
  text-align: center;

  input {
    width: 90%;
    padding: 8px;
  }

  img {
    position: absolute;
    right: 20px;
    top: 9px;
    width: 16px;
    cursor: ${({ type }) => type === 'password' ? 'pointer' : 'inherit'};
  }
`;

const ErrorMessage = styled.p`
  font-size: smaller;
  margin-left: 8px;
  color: red;
`;

export default Input;
