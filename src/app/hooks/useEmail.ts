import { useEffect, useState } from 'react';

export const useEmail = () => {
  const [email, setEmail] = useState('');
  const [emailRequireMessage, setEmailRequireMessage] = useState(false);
  const [isEmailValid, setEmailValid] = useState(true);

  useEffect(() => {
    if (email && emailRequireMessage) {
      setEmailRequireMessage(false);
    }
  }, [email, emailRequireMessage]);

  return {
    email,
    setEmail,
    emailRequireMessage,
    setEmailRequireMessage,
    isEmailValid,
    setEmailValid,
  };
};
