import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'

import { Container } from './Shape'

function Input({ title }) {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  })
  const [isPasswordView, setIsPasswordView] = useState(false)
  const [emailErrorView, setEmailErrorView] = useState(false)

  const { email, password } = inputValues

  const handleChangeInputs = (e) => {
    const {
      target: { value, name },
    } = e
    setInputValues({
      ...inputValues,
      [name]: value,
    })
  }

  const handleTogglePasswordView = () => {
    setIsPasswordView((prev) => !prev)
  }

  const checkEmailValidation = () => {
    const emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    return emailRegExp.test(email)
  }

  const handleBlurEmail = () => {
    if (!checkEmailValidation() && email.length) {
      setEmailErrorView(true)
    } else {
      setEmailErrorView(false)
    }
  }

  return (
    <Container>
      <h2>{title}</h2>
      <InputWrapper>
        <input
          name='email'
          placeholder='E-mail'
          value={email}
          type='email'
          onChange={handleChangeInputs}
          onBlur={handleBlurEmail}
        />
        {checkEmailValidation() ? (
          <img src='/images/check_green.svg' alt='이메일 형식 유효' />
        ) : (
          <img src='/images/check_gray.svg' alt='이메일 형식 오류' />
        )}
      </InputWrapper>

      {!!email.length && emailErrorView && <ErrorMessage>invalid e-mail address.</ErrorMessage>}

      <InputWrapper type='password'>
        <input
          name='password'
          placeholder='Password'
          value={password}
          type={isPasswordView ? 'text' : 'password'}
          onChange={handleChangeInputs}
        />
        <button type='button' onClick={handleTogglePasswordView}>
          {isPasswordView ? (
            <img src='/images/eye.svg' alt='비밀번호 보임' />
          ) : (
            <img src='/images/eye-slash.svg' alt='이메일 형식 유효' />
          )}
        </button>
      </InputWrapper>
    </Container>
  )
}

Input.propTypes = {
  title: PropTypes.string,
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
    cursor: ${({ type }) => (type === 'password' ? 'pointer' : 'inherit')};
  }
`

const ErrorMessage = styled.p`
  font-size: smaller;
  margin-left: 8px;
  color: red;
`

export default Input
