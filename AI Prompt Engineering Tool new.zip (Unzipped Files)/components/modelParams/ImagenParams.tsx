import React from "react";

interface ImagenParamsProps {
  params: Record<string, any>;
  onChange: (key: string, value: any) => void;
}

export function ImagenParams({ params, onChange }: ImagenParamsProps) {
  // Currently Imagen doesn't have any parameters that affect the prompt text
  return (
    <div className="flex flex-col space-y-6 w-full max-w-[640px]">
      <p className="font-['Segoe_UI:Regular',_sans-serif] font-normal text-[16px] text-[#717182] leading-[19.5px]">
        No specific parameters are required for Gemini (formerly Imagen).
      </p>
    </div>
  );
}