import React from "react";
import { RadioSelector } from "../RadioSelector";

interface IdeogramParamsProps {
  params: {
    style: string;
  };
  onChange: (key: string, value: any) => void;
}

export function IdeogramParams({ params, onChange }: IdeogramParamsProps) {
  return (
    <div className="flex flex-col space-y-6 w-full max-w-[640px]">
      <div className="space-y-4">
        <RadioSelector
          label="Style"
          options={[
            { value: "default", label: "Default" },
            { value: "cinematic", label: "Cinematic" },
            { value: "anime", label: "Anime" },
            { value: "digital art", label: "Digital Art" },
          ]}
          value={params.style}
          onChange={(value) => onChange("style", value)}
        />
      </div>
    </div>
  );
}