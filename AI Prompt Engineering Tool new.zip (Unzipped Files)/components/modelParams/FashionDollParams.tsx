import React from "react";
import { RadioSelector } from "../RadioSelector";
import { ImaginizerInput } from "../ImaginizerInput";
import { ImaginizerTextarea } from "../ImaginizerTextarea";
import { useIsMobile } from "../ui/use-mobile";

interface FashionDollParamsProps {
  params: {
    dollName: string;
    outfitDescription: string;
    keyAccessory: string;
    hairStyle: string;
    packaging: string;
  };
  onChange: (key: string, value: any) => void;
}

export function FashionDollParams({ params, onChange }: FashionDollParamsProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col space-y-4 md:space-y-6 w-full max-w-[640px]">
      <ImaginizerInput
        id="dollName"
        label="Doll Name"
        value={params.dollName}
        onChange={(e) => onChange("dollName", e.target.value)}
        placeholder="Your Doll Name"
        maxLength={80}
      />
      
      <ImaginizerTextarea
        id="outfitDescription"
        label="Outfit Description"
        value={params.outfitDescription}
        onChange={(e) => onChange("outfitDescription", e.target.value)}
        placeholder="Describe the outfit in detail"
        maxLength={80}
      />
      
      <ImaginizerInput
        id="keyAccessory"
        label="Key Accessory"
        value={params.keyAccessory}
        onChange={(e) => onChange("keyAccessory", e.target.value)}
        placeholder="Key Accessory or Prop"
        maxLength={80}
      />
      
      <ImaginizerInput
        id="hairStyle"
        label="Hair Style & Color"
        value={params.hairStyle}
        onChange={(e) => onChange("hairStyle", e.target.value)}
        placeholder="Hair Style & Color Description"
        maxLength={80}
      />
      
      <div className="space-y-3 md:space-y-4">
        <RadioSelector
          label="Packaging"
          options={[
            { value: "No Packaging", label: "None" },
            { value: "Blister", label: "Blister" },
            { value: "Boxed", label: "Boxed" },
          ]}
          value={params.packaging}
          onChange={(value) => onChange("packaging", value)}
        />
      </div>
    </div>
  );
}