import React, { InputHTMLAttributes, forwardRef, useState } from "react";
import { useIsMobile } from "./ui/use-mobile";
import { CharacterCounter } from "./CharacterCounter";

export interface ImaginizerInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  maxLength?: number;
  showCounter?: boolean;
}

export const ImaginizerInput = forwardRef<HTMLInputElement, ImaginizerInputProps>(
  ({ 
    label, 
    error, 
    className = "", 
    containerClassName = "", 
    maxLength = 80, 
    showCounter = false,
    onChange,
    ...props 
  }, ref) => {
    const isMobile = useIsMobile();
    const [charCount, setCharCount] = useState(props.value?.toString().length || 0);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCharCount(e.target.value.length);
      if (onChange) {
        onChange(e);
      }
    };
    
    return (
      <div className={`flex flex-col gap-1.5 md:gap-2 w-full ${containerClassName}`}>
        {label && (
          <label 
            htmlFor={props.id} 
            className="font-['Segoe_UI:Regular',_sans-serif] font-normal text-[14px] md:text-[16px] text-[#717182]"
          >
            {label}
          </label>
        )}
        <div className="bg-neutral-100 relative rounded w-full">
          <div className="flex flex-row items-center overflow-hidden relative w-full">
            <div className="box-border flex flex-row items-center justify-start px-3 py-2 md:px-4 md:py-3 w-full">
              <input
                ref={ref}
                className={`w-full font-['Segoe_UI:Light',_sans-serif] font-light leading-[1.4] text-[14px] md:text-[16px] text-left bg-transparent outline-none border-none ${className}`}
                style={{ 
                  color: props.disabled ? "#717182" : "#32343A"
                }}
                placeholder={props.placeholder}
                maxLength={maxLength}
                onChange={handleChange}
                {...props}
              />
            </div>
          </div>
          <div className="absolute border border-[#9f9fa9] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
        </div>
        <CharacterCounter current={charCount} max={maxLength} showAlways={showCounter} />
        {error && <p className="text-red-500 text-[12px] md:text-[14px] mt-1">{error}</p>}
      </div>
    );
  }
);

ImaginizerInput.displayName = "ImaginizerInput";