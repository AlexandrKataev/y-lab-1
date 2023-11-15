import { useEffect, useState } from 'react';

export const usePassword = () => {
  const [password, setPassword] = useState('');
  const [passwordRequireMessage, setPasswordRequireMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (password && passwordRequireMessage) {
      setPasswordRequireMessage(false);
    }
  }, [password, passwordRequireMessage]);

  return {
    password,
    setPassword,
    passwordRequireMessage,
    setPasswordRequireMessage,
    showPassword,
    setShowPassword,
  };
};
