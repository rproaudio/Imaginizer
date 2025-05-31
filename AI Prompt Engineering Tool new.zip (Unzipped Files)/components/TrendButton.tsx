import React from "react";
import { useIsMobile } from "./ui/use-mobile";

interface TrendButtonProps {
  name: string;
  selected: boolean;
  onClick: () => void;
}

export function TrendButton({ name, selected, onClick }: TrendButtonProps) {
  const isMobile = useIsMobile();
  
  return (
    <div
      className={`group flex items-center justify-center h-9 md:h-10 px-3 md:px-4 rounded-md hover:bg-[#32343A] hover:text-white cursor-pointer transition-colors ${
        selected ? "bg-[#32343A] text-white" : "bg-white text-[#32343A]"
      } border border-[#E5E5E7] flex-shrink-0 whitespace-nowrap`}
      onClick={onClick}
    >
      <span className="text-[14px] md:text-[16px] font-light">
        {name}
      </span>
    </div>
  );
}