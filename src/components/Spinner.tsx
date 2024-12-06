import React from 'react';
import { cn } from "@/lib/utils";

interface SpinnerProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ 
  className, 
  size = 'medium', 
  color = 'border-primary' 
}) => {
  const sizeClasses = {
    small: 'h-4 w-4 border-2',
    medium: 'h-8 w-8 border-4',
    large: 'h-12 w-12 border-[6px]'
  };

  return (
    <div 
      className={cn(
        'animate-spin rounded-full border-solid border-current border-r-transparent',
        sizeClasses[size],
        color,
        className
      )}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;