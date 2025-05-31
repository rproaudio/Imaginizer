import React from "react";
import { RadioSelector } from "../RadioSelector";
import { ImaginizerInput } from "../ImaginizerInput";

interface MidjourneyParamsProps {
  params: {
    stylize: number;
    chaos: number;
  };
  onChange: (key: string, value: any) => void;
}

export function MidjourneyParams({ params, onChange }: MidjourneyParamsProps) {
  return (
    <div className="flex flex-col space-y-6 w-full max-w-[640px]">
      <div className="space-y-4">
        <RadioSelector
          label="Stylize Value"
          options={[
            { value: 100, label: "100" },
            { value: 250, label: "250" },
            { value: 625, label: "625" },
            { value: 1250, label: "1250" },
          ]}
          value={params.stylize}
          onChange={(value) => onChange("stylize", value)}
        />
      </div>
      
      <div className="space-y-4">
        <RadioSelector
          label="Chaos Value"
          options={[
            { value: 0, label: "0" },
            { value: 25, label: "25" },
            { value: 50, label: "50" },
            { value: 100, label: "100" },
          ]}
          value={params.chaos}
          onChange={(value) => onChange("chaos", value)}
        />
      </div>
    </div>
  );
}