import React from "react";
import { RadioSelector } from "../RadioSelector";

interface DalleParamsProps {
  params: {
    style: string;
  };
  onChange: (key: string, value: any) => void;
}

export function DalleParams({ params, onChange }: DalleParamsProps) {
  return (
    <div className="flex flex-col space-y-6 w-full max-w-[640px]">
      <div className="space-y-4">
        <RadioSelector
          label="Style"
          options={[
            { value: "vivid", label: "Vivid" },
            { value: "natural", label: "Natural" },
          ]}
          value={params.style}
          onChange={(value) => onChange("style", value)}
        />
      </div>
    </div>
  );
}