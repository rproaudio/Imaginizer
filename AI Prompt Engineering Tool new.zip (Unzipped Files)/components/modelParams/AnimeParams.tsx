import React from "react";
import { ImaginizerInput } from "../ImaginizerInput";
import { useIsMobile } from "../ui/use-mobile";

interface AnimeParamsProps {
  params: {
    characterDescription: string;
    settingMood: string;
    keyElement: string;
    dominantColors: string;
    style?: string;
    seed?: number;
    sampler?: string;
  };
  onChange: (key: string, value: any) => void;
}

export function AnimeParams({ params, onChange }: AnimeParamsProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col space-y-4 md:space-y-6 w-full max-w-[640px]">
      <ImaginizerInput
        id="characterDescription"
        label="Character Description"
        value={params.characterDescription}
        onChange={(e) => onChange("characterDescription", e.target.value)}
        placeholder="Describe your character's appearance and personality"
        maxLength={80}
      />
      
      <ImaginizerInput
        id="settingMood"
        label="Setting/Mood"
        value={params.settingMood}
        onChange={(e) => onChange("settingMood", e.target.value)}
        placeholder="Describe the setting and overall mood/atmosphere"
        maxLength={80}
      />
      
      <ImaginizerInput
        id="keyElement"
        label="Key Ghibli-esque Element"
        value={params.keyElement}
        onChange={(e) => onChange("keyElement", e.target.value)}
        placeholder="Magical element, creature, or object"
        maxLength={80}
      />
      
      <ImaginizerInput
        id="dominantColors"
        label="Dominant Colors/Time of Day"
        value={params.dominantColors}
        onChange={(e) => onChange("dominantColors", e.target.value)}
        placeholder="Color palette and lighting conditions"
        maxLength={80}
      />
    </div>
  );
}