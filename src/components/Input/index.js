import PropTypes from 'prop-types'
import { useState } from 'react'

import { CheckGrayImage, CheckGreenImage, EyeImage, EyeSlashImage } from '../../assets/images/svgs'
import { Container } from '../Shape'
import styles from './Input.module.scss'

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
      <div className={styles.inputWrapper}>
        <input
          name='email'
          placeholder='E-mail'
          value={email}
          type='text'
          onChange={handleChangeInputs}
          onBlur={handleBlurEmail}
        />
        {checkEmailValidation() ? (
          <CheckGreenImage className={styles.image} />
        ) : (
          <CheckGrayImage className={styles.image} />
        )}
      </div>

      {!!email.length && emailErrorView && <p className={styles.errorMessage}>invalid e-mail address.</p>}

      <div className={styles.inputWrapper} type='password'>
        <input
          name='password'
          placeholder='Password'
          value={password}
          type={isPasswordView ? 'text' : 'password'}
          onChange={handleChangeInputs}
        />
        <button type='button' onClick={handleTogglePasswordView}>
          {isPasswordView ? <EyeImage className={styles.image} /> : <EyeSlashImage className={styles.image} />}
        </button>
      </div>
    </Container>
  )
}

Input.propTypes = {
  title: PropTypes.string,
}

export default Input
