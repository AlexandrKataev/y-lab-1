import { useState } from 'react';
import './App.scss';
import { HideIcon, PasswordIcon, ShowIcon, EmailIcon } from '@shared/ui';
import { Greeting } from '@shared/ui/greeting';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [showGreeting, setShowGreeting] = useState(false);

  const onClickSubmit = () => {
    console.log('onclick');
    setShowGreeting(!showGreeting);
  };

  return (
    <main className="container">
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
        </div>
        <div className="input_wrapper">
          <input
            value={password}
            onChange={(value) => setPassword(value.target.value)}
            className="input"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
          {!password && <PasswordIcon className="icon" />}
          {password && showPassword && (
            <HideIcon className="icon icon_button" onClick={() => setShowPassword(false)} />
          )}
          {password && !showPassword && (
            <ShowIcon className="icon icon_button" onClick={() => setShowPassword(true)} />
          )}
        </div>
        <button type="button" className="button" onClick={() => onClickSubmit()}>
          Log In
        </button>
      </form>
      {showGreeting && <EmailIcon />}
      <Greeting />
    </main>
  );
};

export default App;
