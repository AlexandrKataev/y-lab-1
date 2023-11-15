import styles from './password-icon.module.scss';
import { IconProps } from './types';

export const PasswordIcon = (props: IconProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-main)"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
      <circle cx="16.5" cy="7.5" r=".5" />
    </svg>
  );
};
