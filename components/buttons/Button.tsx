import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  className = '',
  type = "button",
}: ButtonProps) {
  const baseClasses = 'button';
  const variantClasses = `button-${variant}`;
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
