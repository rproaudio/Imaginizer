import React from "react";
import { useIsMobile } from "./ui/use-mobile";

interface CardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  showSubtitleOnlyWhenNoModel?: boolean;
  isModelSelected?: boolean;
}

export function Card({ 
  title, 
  subtitle, 
  children, 
  showSubtitleOnlyWhenNoModel = false,
  isModelSelected = false
}: CardProps) {
  const isMobile = useIsMobile();
  
  // Determine whether to show the subtitle
  const shouldShowSubtitle = !showSubtitleOnlyWhenNoModel || !isModelSelected;
  
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full shadow-sm overflow-hidden">
      <div className="box-border flex flex-col gap-4 md:gap-6 items-start justify-start p-4 md:p-6 relative w-full">
        <div className="relative w-full">
          <div className="flex flex-col gap-3 items-start justify-start relative w-full">
            <div className="relative w-full">
              <div className="flex flex-col gap-1 items-start justify-start relative w-full">
                <h2 className="font-['Sora:Light',_sans-serif] font-light text-[20px] md:text-[24px] tracking-[-0.4px] text-[#32343a] leading-tight line-clamp-2">
                  {title}
                </h2>
                {shouldShowSubtitle && (
                  <p className="font-['Sora:Regular',_sans-serif] font-normal text-[14px] text-[#717182] leading-snug line-clamp-3">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}