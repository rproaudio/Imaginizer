import React from "react";
import { useIsMobile } from "./ui/use-mobile";

interface OptionButtonProps {
  name: string;
  selected: boolean;
  onClick: () => void;
}

export function OptionButton({ name, selected, onClick }: OptionButtonProps) {
  const isMobile = useIsMobile();
  
  return (
    <div
      className={`group flex items-center justify-center h-8 md:h-10 px-2 md:px-4 rounded-md hover:bg-[#32343A] hover:text-white cursor-pointer transition-colors ${
        selected ? "bg-[#32343A] text-white" : "bg-white text-[#32343A]"
      } border border-[#E5E5E7]`}
      onClick={onClick}
    >
      <span className="text-[13px] md:text-[14px] font-light whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}