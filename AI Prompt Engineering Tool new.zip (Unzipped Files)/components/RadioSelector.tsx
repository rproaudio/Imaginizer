import React from "react";
import { OptionButton } from "./OptionButton";
import { Label } from "./ui/label";

interface RadioOption {
  value: string | number;
  label: string;
}

interface RadioSelectorProps {
  label?: string;
  options: RadioOption[] | string[];
  value: string | number;
  onChange: (value: string | number) => void;
  allowDeselect?: boolean;
}

export function RadioSelector({ 
  label, 
  options, 
  value, 
  onChange, 
  allowDeselect = true 
}: RadioSelectorProps) {
  const handleOptionClick = (optionValue: string | number) => {
    if (allowDeselect && optionValue === value) {
      // Deselect if the same option is clicked again
      onChange("");
    } else {
      // Select the new option
      onChange(optionValue);
    }
  };

  // Check if options are strings or objects
  const isObjectOptions = options.length > 0 && typeof options[0] !== 'string';

  return (
    <div className="space-y-3 w-full">
      {label && (
        <Label className="text-[13px] font-['Sora:Regular',_sans-serif] text-[#32343a] block">
          {label}
        </Label>
      )}
      <div className="flex flex-wrap gap-3">
        {isObjectOptions
          ? (options as RadioOption[]).map((option) => (
              <OptionButton
                key={`${option.value}`}
                name={option.label}
                selected={value === option.value}
                onClick={() => handleOptionClick(option.value)}
              />
            ))
          : (options as string[]).map((option) => (
              <OptionButton
                key={option}
                name={option}
                selected={value === option}
                onClick={() => handleOptionClick(option)}
              />
            ))}
      </div>
    </div>
  );
}