import React from "react";
import { ImaginizerInput } from "../ImaginizerInput";
import { useIsMobile } from "../ui/use-mobile";

interface FantasyHeroParamsProps {
  params: {
    heroArchetype: string;
    primaryWeapon: string;
    armorStyle: string;
    keyDetail: string;
    settingSnippet: string;
  };
  onChange: (key: string, value: any) => void;
}

export function FantasyHeroParams({ params, onChange }: FantasyHeroParamsProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col space-y-4 md:space-y-6 w-full max-w-[640px]">
      <ImaginizerInput
        id="heroArchetype"
        label="Hero Archetype/Race"
        value={params.heroArchetype}
        onChange={(e) => onChange("heroArchetype", e.target.value)}
        placeholder="E.g., Elven Ranger, Dwarven Paladin, Human Sorcerer"
        maxLength={80}
      />
      
      <ImaginizerInput
        id="primaryWeapon"
        label="Primary Weapon/Magic"
        value={params.primaryWeapon}
        onChange={(e) => onChange("primaryWeapon", e.target.value)}
        placeholder="Describe their main weapon or magical ability"
        maxLength={80}
      />
      
      <ImaginizerInput
        id="armorStyle"
        label="Armor/Outfit Style"
        value={params.armorStyle}
        onChange={(e) => onChange("armorStyle", e.target.value)}
        placeholder="Describe their armor or outfit appearance"
        maxLength={80}
      />
      
      <ImaginizerInput
        id="keyDetail"
        label="Key Detail/Accessory"
        value={params.keyDetail}
        onChange={(e) => onChange("keyDetail", e.target.value)}
        placeholder="A distinctive feature, accessory or magical item"
        maxLength={80}
      />
      
      <ImaginizerInput
        id="settingSnippet"
        label="Setting Snippet (Optional)"
        value={params.settingSnippet}
        onChange={(e) => onChange("settingSnippet", e.target.value)}
        placeholder="Brief description of environment or background"
        maxLength={80}
      />
    </div>
  );
}