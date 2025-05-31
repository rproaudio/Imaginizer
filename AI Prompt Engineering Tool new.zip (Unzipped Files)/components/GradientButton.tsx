import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export function GradientButton({ children, onClick, icon, className = "" }: GradientButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#32343a] relative rounded-md shrink-0 transition-transform hover:scale-[1.02] active:scale-[0.98] ${className}`}
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 205 52\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.7200000286102295\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(12.114 5.0375 7.3172 -8.5618 -8.1534 6.5)\\'><stop stop-color=\\'rgba(255,51,186,1)\\' offset=\\'0.19653\\'/><stop stop-color=\\'rgba(237,66,179,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 205 52\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.8899999856948853\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-1.1648 -5.2 -14.1 1.5368 89.688 59.312)\\'><stop stop-color=\\'rgba(173,18,245,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(183,38,227,1)\\' offset=\\'0.10122\\'/><stop stop-color=\\'rgba(193,57,209,1)\\' offset=\\'0.20244\\'/><stop stop-color=\\'rgba(213,95,172,1)\\' offset=\\'0.40488\\'/><stop stop-color=\\'rgba(233,134,135,1)\\' offset=\\'0.60732\\'/><stop stop-color=\\'rgba(253,172,98,1)\\' offset=\\'0.80976\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(85, 18, 138) 0%, rgb(85, 18, 138) 100%)",
      }}
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 md:gap-4 items-center justify-center p-3 md:p-[16px] relative">
          <div className="flex flex-col font-['Sora:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[#fcfbf8] text-[14px] md:text-[16px] text-center">
            <p className="block leading-[20px]">
              {children}
            </p>
          </div>
          {icon && icon}
        </div>
      </div>
    </button>
  );
}