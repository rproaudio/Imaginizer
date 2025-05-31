import React from "react";
import { RadioSelector } from "../RadioSelector";

interface FluxParamsProps {
  params: {
    style: string;
  };
  onChange: (key: string, value: any) => void;
}

export function FluxParams({ params, onChange }: FluxParamsProps) {
  return (
    <div className="flex flex-col space-y-6 w-full max-w-[640px]">
      <div className="space-y-4">
        <RadioSelector
          label="Style"
          options={[
            { value: "creative", label: "Creative" },
            { value: "realistic", label: "Realistic" },
          ]}
          value={params.style}
          onChange={(value) => onChange("style", value)}
        />
      </div>
    </div>
  );
}