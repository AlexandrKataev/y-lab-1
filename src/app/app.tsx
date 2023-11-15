import { useState, useEffect } from 'react';
import './app.scss';
import { HideIcon, PasswordIcon, ShowIcon, EmailIcon } from '@shared/ui';
import { Greeting } from '@shared/ui/greeting';
import { AlertIcon } from '@shared/ui/icons/alert-icon';

const App = () => {
  const [email, setEmail] = useState('');
  const [emailRequireMessage, setEmailRequireMessage] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordRequireMessage, setPasswordRequireMessage] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    if (email && emailRequireMessage) {
      setEmailRequireMessage(false);
    }
  }, [email, emailRequireMessage]);

  useEffect(() => {
    if (password && passwordRequireMessage) {
      setPasswordRequireMessage(false);
    }
  }, [password, passwordRequireMessage]);

  const onClickLogin = () => {
    if (!email) {
      setEmailRequireMessage(true);
    }
    if (!password) {
      setPasswordRequireMessage(true);
    }
    if (email && password) {
      setShowGreeting(!showGreeting);
    }
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
            <input
              value={email}
              onChange={(value) => setEmail(value.target.value)}
              className="input"
              type="email"
              placeholder="Email"
            />
            <EmailIcon className="icon" />
            {emailRequireMessage && <AlertIcon className="alert" />}
          </div>
          <div className="input_wrapper">
            <input
              value={password}
              onChange={(value) => setPassword(value.target.value)}
              className="input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
            />
            <PasswordIcon className="icon" />
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
