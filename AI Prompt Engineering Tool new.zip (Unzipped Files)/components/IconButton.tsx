import React from "react";

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function IconButton({ children, onClick, className = "" }: IconButtonProps) {
  return (
    <div 
      className={`relative rounded-md shrink-0 size-10 cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors ${className}`}
      onClick={onClick}
    >
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative size-10">
        {children}
      </div>
    </div>
  );
}