import React from "react";
import { useIsMobile } from "./ui/use-mobile";

interface ModelButtonProps {
  name: string;
  icon: React.ReactNode;
  iconWhite: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export function ModelButton({ name, icon, iconWhite, selected, onClick }: ModelButtonProps) {
  const isMobile = useIsMobile();
  
  return (
    <div
      className={`group flex flex-col items-center gap-1 md:gap-3 w-[70px] md:w-[100px] h-[80px] md:h-[100px] rounded-md hover:bg-[#32343A] cursor-pointer transition-colors ${
        selected ? "bg-[#32343A]" : "bg-transparent"
      } flex-shrink-0`}
      onClick={onClick}
    >
      <div
        className={`mt-2 md:mt-4 rounded-full flex items-center justify-center w-9 h-9 md:w-12 md:h-12 ${
          selected ? "bg-[#32343A]" : "bg-white group-hover:bg-[#32343A]"
        } border border-[#E5E5E7] transition-colors`}
      >
        {selected ? iconWhite : (
          <>
            <div className="block group-hover:hidden">{icon}</div>
            <div className="hidden group-hover:block">{iconWhite}</div>
          </>
        )}
      </div>
      <span
        className={`text-[11px] md:text-[14px] text-center line-clamp-1 w-full px-1 ${
          selected ? "text-white" : "text-[#32343A] group-hover:text-white"
        } font-light transition-colors`}
      >
        {name}
      </span>
    </div>
  );
}