import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

export function BagIcon({ className = '', size = 'md', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`icon-svg ${sizeMap[size]} ${className}`}
      fill="none"
      strokeWidth="1.6"
      {...props}
    >
      <path d="M6 8h12l-1 11H7L6 8Z" />
      <path d="M9 8a3 3 0 1 1 6 0" />
    </svg>
  );
}

export function HomeIcon({ className = '', size = 'md', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`icon-svg ${sizeMap[size]} ${className}`}
      fill="none"
      strokeWidth="1.6"
      {...props}
    >
      <path d="M4 10.5 12 4l8 6.5" />
      <path d="M6.5 9.8V20h11V9.8" />
      <path d="M10 20v-4.5h4V20" />
    </svg>
  );
}

export function HeartIcon({ className = '', size = 'md', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`icon-svg ${sizeMap[size]} ${className}`}
      fill="none"
      strokeWidth="1.6"
      {...props}
    >
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
    </svg>
  );
}

export function DropIcon({ className = '', size = 'md', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`icon-svg ${sizeMap[size]} ${className}`}
      fill="none"
      strokeWidth="1.6"
      {...props}
    >
      <path d="M12 3c3 4 5 7 5 10a5 5 0 1 1-10 0c0-3 2-6 5-10Z" />
    </svg>
  );
}

export function SparkIcon({ className = '', size = 'md', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`icon-svg ${sizeMap[size]} ${className}`}
      fill="none"
      strokeWidth="1.6"
      {...props}
    >
      <path d="m12 4 1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8L12 4Z" />
    </svg>
  );
}

export function SearchIcon({ className = '', size = 'md', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`icon-svg ${sizeMap[size]} ${className}`}
      fill="none"
      strokeWidth="1.6"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export function ChevronRightIcon({ className = '', size = 'md', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`icon-svg ${sizeMap[size]} ${className}`}
      fill="none"
      strokeWidth="1.6"
      {...props}
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function StarIcon({ className = '', size = 'md', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`icon-svg ${sizeMap[size]} ${className}`}
      fill="none"
      strokeWidth="1.6"
      {...props}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  );
}

export function CloseIcon({ className = '', size = 'md', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`icon-svg ${sizeMap[size]} ${className}`}
      fill="none"
      strokeWidth="1.6"
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export function MenuIcon({ className = '', size = 'md', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`icon-svg ${sizeMap[size]} ${className}`}
      fill="none"
      strokeWidth="1.6"
      {...props}
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}
