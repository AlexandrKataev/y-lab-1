import { useState, ChangeEvent } from 'react';
import './app.scss';
import { HideIcon, PasswordIcon, ShowIcon, EmailIcon } from '@shared/ui';
import { Greeting, AlertIcon } from '@shared/ui';
import { useEmail } from './hooks/useEmail';
import { usePassword } from './hooks/usePassword';
import { validateEmail } from './helpers/validate-email';
import { authService } from '@shared/api/services/auth.service';

const App = () => {
  const {
    email,
    emailRequireMessage,
    isEmailValid,
    setEmail,
    setEmailRequireMessage,
    setEmailValid,
  } = useEmail();

  const {
    password,
    setPassword,
    passwordRequireMessage,
    setPasswordRequireMessage,
    showPassword,
    setShowPassword,
  } = usePassword();

  const [showGreeting, setShowGreeting] = useState(false);

  const onClickLogin = () => {
    const isEmailValid = validateEmail(email);
    if (!email) {
      setEmailRequireMessage(true);
    }
    if (!password) {
      setPasswordRequireMessage(true);
    }
    if (email) {
      setEmailValid(isEmailValid);
    }
    if (email && password && isEmailValid) {
      setShowGreeting(!showGreeting);
      authService.login({ email, password });
    }
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailValid(true);
  };

  const onClickLogout = () => {
    setShowGreeting(false);
    setEmail('');
    setPassword('');
  };

  return (
    <main className="container">
      {!showGreeting && (
        <form className="form">
          <h1 className="title">Log In</h1>
          <div className="input_wrapper">
            <EmailIcon className="icon" />
            <input
              value={email}
              onChange={(event) => onChangeEmail(event)}
              className="input"
              type="text"
              placeholder="Email"
            />
            {!isEmailValid && (
              <div className="invalid-message">Invalid email: example@gmail.com</div>
            )}
            {(emailRequireMessage || !isEmailValid) && <AlertIcon className="alert" />}
          </div>
          <div className="input_wrapper">
            <PasswordIcon className="icon" />
            <input
              value={password}
              onChange={(value) => setPassword(value.target.value)}
              className="input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
            />

            {password && showPassword && (
              <HideIcon className="show-password" onClick={() => setShowPassword(false)} />
            )}
            {password && !showPassword && (
              <ShowIcon className="show-password" onClick={() => setShowPassword(true)} />
            )}
            {passwordRequireMessage && <AlertIcon className="alert" />}
          </div>
          <button type="button" className="button" onClick={onClickLogin}>
            Log In
          </button>
        </form>
      )}
      {showGreeting && (
        <>
          <Greeting className="greeting" />
          <button type="button" className="button-logout" onClick={onClickLogout}>
            Log Out
          </button>
        </>
      )}
    </main>
  );
};

export default App;
