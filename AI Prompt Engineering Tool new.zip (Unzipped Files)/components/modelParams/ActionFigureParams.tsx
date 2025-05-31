import React from "react";
import { RadioSelector } from "../RadioSelector";
import { ImaginizerInput } from "../ImaginizerInput";
import { useIsMobile } from "../ui/use-mobile";

interface ActionFigureParamsProps {
  params: {
    characterName: string;
    brandingText: string;
    accessory1: string;
    accessory2: string;
    accessory3: string;
    toyEra: string;
    packaging: string;
  };
  onChange: (key: string, value: any) => void;
}

export function ActionFigureParams({ params, onChange }: ActionFigureParamsProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col space-y-4 md:space-y-6 w-full max-w-[640px]">
      <ImaginizerInput
        id="characterName"
        label="Character Name"
        value={params.characterName}
        onChange={(e) => onChange("characterName", e.target.value)}
        placeholder="Your Character Name"
        maxLength={80}
      />
      
      <ImaginizerInput
        id="brandingText"
        label="Branding Text"
        value={params.brandingText}
        onChange={(e) => onChange("brandingText", e.target.value)}
        placeholder="Brand or Line Name"
        maxLength={80}
      />
      
      <div className="space-y-3 md:space-y-4">
        <p className="font-['Segoe_UI:Regular',_sans-serif] font-normal text-[14px] md:text-[16px] text-[#717182]">
          Accessories
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <ImaginizerInput
            id="accessory1"
            value={params.accessory1}
            onChange={(e) => onChange("accessory1", e.target.value)}
            placeholder="Primary Accessory"
            maxLength={80}
          />
          
          <ImaginizerInput
            id="accessory2"
            value={params.accessory2}
            onChange={(e) => onChange("accessory2", e.target.value)}
            placeholder="Secondary Accessory"
            maxLength={80}
          />
          
          <ImaginizerInput
            id="accessory3"
            value={params.accessory3}
            onChange={(e) => onChange("accessory3", e.target.value)}
            placeholder="Third Accessory"
            maxLength={80}
          />
        </div>
      </div>
      
      <div className="space-y-3 md:space-y-4">
        <RadioSelector
          label="Toy Era/Style"
          options={[
            { value: "70s", label: "70s" },
            { value: "80s", label: "80s" },
            { value: "90s", label: "90s" },
            { value: "Modern Collector", label: "Modern" },
            { value: "Vintage", label: "Vintage" },
            { value: "Futuristic", label: "Futuristic" },
          ]}
          value={params.toyEra}
          onChange={(value) => onChange("toyEra", value)}
        />
      </div>
      
      <div className="space-y-3 md:space-y-4">
        <RadioSelector
          label="Packaging"
          options={[
            { value: "No Packaging", label: "None" },
            { value: "Blister", label: "Blister" },
            { value: "Boxed", label: "Boxed" },
            { value: "Cardback", label: "Cardback" },
          ]}
          value={params.packaging}
          onChange={(value) => onChange("packaging", value)}
        />
      </div>
    </div>
  );
}