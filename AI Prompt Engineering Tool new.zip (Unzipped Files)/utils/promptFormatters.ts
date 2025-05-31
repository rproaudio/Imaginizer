export type ModelType = 'midjourney' | 'dalle' | 'imagen' | 'anime' | 'flux' | 'ideogram';
export type TrendType = 'none' | 'action-figure' | 'fashion-doll' | 'anime' | 'fantasy-hero';

interface FormatPromptProps {
  model: ModelType;
  trend: TrendType;
  prompt: string;
  params: any;
  trendParams?: any;
}

export function formatPrompt({ model, trend, prompt, params, trendParams }: FormatPromptProps): string {
  let formattedPrompt = prompt.trim();
  
  // Apply trend-specific modifications
  if (trend !== 'none') {
    switch (trend) {
      case 'action-figure':
        formattedPrompt = formatActionFigurePrompt(formattedPrompt, trendParams);
        break;
      case 'fashion-doll':
        formattedPrompt = formatFashionDollPrompt(formattedPrompt, trendParams);
        break;
      case 'anime':
        formattedPrompt = formatAnimeTrendPrompt(formattedPrompt, trendParams);
        break;
      case 'fantasy-hero':
        formattedPrompt = formatFantasyHeroPrompt(formattedPrompt, trendParams);
        break;
    }
  }
  
  // Apply model-specific formatting
  switch (model) {
    case 'midjourney':
      formattedPrompt = formatMidjourneyPrompt(formattedPrompt, params);
      break;
    case 'dalle':
      formattedPrompt = formatDallePrompt(formattedPrompt, params);
      break;
    case 'imagen':
      formattedPrompt = formatImagenPrompt(formattedPrompt, params);
      break;
    case 'anime':
      formattedPrompt = formatAnimePrompt(formattedPrompt, params);
      break;
    case 'flux':
      formattedPrompt = formatFluxPrompt(formattedPrompt, params);
      break;
    case 'ideogram':
      formattedPrompt = formatIdeogramPrompt(formattedPrompt, params);
      break;
  }
  
  return formattedPrompt;
}

function formatActionFigurePrompt(prompt: string, params: any): string {
  if (!params) return `${prompt}, action figure style, toy photography, plastic texture, realistic lighting, miniature scene`;
  
  let formattedPrompt = prompt;
  
  // Start with base action figure description
  let actionFigureDetails = "action figure style, detailed plastic toy, articulated joints, ";
  
  // Add character name if provided
  if (params.characterName && params.characterName.trim()) {
    formattedPrompt = `"${params.characterName}" ${formattedPrompt}`;
  }
  
  // Add branding text if provided
  if (params.brandingText && params.brandingText.trim()) {
    actionFigureDetails += `"${params.brandingText}" branding, `;
  }
  
  // Add accessories if provided
  let accessories = [];
  if (params.accessory1 && params.accessory1.trim()) accessories.push(params.accessory1);
  if (params.accessory2 && params.accessory2.trim()) accessories.push(params.accessory2);
  if (params.accessory3 && params.accessory3.trim()) accessories.push(params.accessory3);
  
  if (accessories.length > 0) {
    actionFigureDetails += `comes with accessories: ${accessories.join(', ')}, `;
  }
  
  // Add toy era/style if provided
  if (params.toyEra && params.toyEra.trim()) {
    actionFigureDetails += `${params.toyEra} style, `;
  }
  
  // Add packaging if not "No Packaging"
  if (params.packaging && params.packaging.trim() && params.packaging !== "No Packaging") {
    actionFigureDetails += `${params.packaging}, `;
  }
  
  // Finish with standard toy photography details
  actionFigureDetails += "toy photography, realistic lighting, shallow depth of field, studio background";
  
  return `${formattedPrompt}, ${actionFigureDetails}`;
}

function formatFashionDollPrompt(prompt: string, params: any): string {
  if (!params) return `${prompt}, fashion doll style, smooth plastic, glossy finish, poseable figure, doll accessories, fashion photography`;
  
  let formattedPrompt = prompt;
  
  // Start with base fashion doll description
  let dollDetails = "fashion doll style, smooth plastic, glossy finish, poseable figure, ";
  
  // Add doll name if provided
  if (params.dollName && params.dollName.trim()) {
    formattedPrompt = `"${params.dollName}" ${formattedPrompt}`;
  }
  
  // Add outfit description if provided
  if (params.outfitDescription && params.outfitDescription.trim()) {
    dollDetails += `wearing ${params.outfitDescription}, `;
  }
  
  // Add key accessory if provided
  if (params.keyAccessory && params.keyAccessory.trim()) {
    dollDetails += `with ${params.keyAccessory} accessory, `;
  }
  
  // Add hair style if provided
  if (params.hairStyle && params.hairStyle.trim()) {
    dollDetails += `${params.hairStyle} hairstyle, `;
  }
  
  // Add packaging if not "No Packaging"
  if (params.packaging && params.packaging.trim() && params.packaging !== "No Packaging") {
    dollDetails += `${params.packaging} packaging, `;
  }
  
  // Finish with standard fashion doll photography details
  dollDetails += "fashion photography, studio lighting, perfect proportions";
  
  return `${formattedPrompt}, ${dollDetails}`;
}

function formatAnimeTrendPrompt(prompt: string, params: any): string {
  if (!params) return `${prompt}, anime style, vibrant colors, detailed illustration, Studio Ghibli inspired`;
  
  let formattedPrompt = prompt;
  
  // Start with base anime description
  let animeDetails = "anime style, ";
  
  // Add character description if provided
  if (params.characterDescription && params.characterDescription.trim()) {
    animeDetails += `character: ${params.characterDescription}, `;
  }
  
  // Add setting/mood if provided
  if (params.settingMood && params.settingMood.trim()) {
    animeDetails += `${params.settingMood} mood, `;
  }
  
  // Add Ghibli element if provided
  if (params.keyElement && params.keyElement.trim()) {
    animeDetails += `Ghibli element: ${params.keyElement}, `;
  }
  
  // Add dominant colors if provided
  if (params.dominantColors && params.dominantColors.trim()) {
    animeDetails += `color palette: ${params.dominantColors}, `;
  }
  
  // Finish with standard anime illustration details
  animeDetails += "vibrant colors, detailed illustration, Studio Ghibli inspired";
  
  return `${formattedPrompt}, ${animeDetails}`;
}

function formatFantasyHeroPrompt(prompt: string, params: any): string {
  if (!params) return `${prompt}, fantasy hero, heroic pose, epic lighting, dramatic angle, fantasy armor, detailed weapons, magical effects`;
  
  let formattedPrompt = prompt;
  
  // Start with base fantasy hero description
  let heroDetails = "fantasy hero, ";
  
  // Add hero archetype/race if provided
  if (params.heroArchetype && params.heroArchetype.trim()) {
    heroDetails += `${params.heroArchetype}, `;
  }
  
  // Add weapon/magic if provided
  if (params.primaryWeapon && params.primaryWeapon.trim()) {
    heroDetails += `wielding ${params.primaryWeapon}, `;
  }
  
  // Add armor/outfit if provided
  if (params.armorStyle && params.armorStyle.trim()) {
    heroDetails += `wearing ${params.armorStyle}, `;
  }
  
  // Add key detail if provided
  if (params.keyDetail && params.keyDetail.trim()) {
    heroDetails += `with ${params.keyDetail}, `;
  }
  
  // Add setting if provided
  if (params.settingSnippet && params.settingSnippet.trim()) {
    heroDetails += `in ${params.settingSnippet}, `;
  }
  
  // Finish with standard fantasy hero details
  heroDetails += "heroic pose, epic lighting, dramatic angle, detailed fantasy design, magical effects";
  
  return `${formattedPrompt}, ${heroDetails}`;
}

function formatMidjourneyPrompt(prompt: string, params: any): string {
  if (!params) return prompt;
  
  const { stylize = 250, chaos = 0 } = params;
  let formattedPrompt = prompt;
  
  // Add stylize parameter
  formattedPrompt += ` --stylize ${stylize}`;
  
  // Add chaos parameter if greater than 0
  if (chaos > 0) {
    formattedPrompt += ` --chaos ${chaos}`;
  }
  
  return formattedPrompt;
}

function formatDallePrompt(prompt: string, params: any): string {
  if (!params) return prompt;
  
  const { style = "vivid" } = params;
  let formattedPrompt = prompt;
  
  // Add style as a suffix
  if (style === "vivid") {
    formattedPrompt += ", vibrant colors, high contrast, detailed";
  } else if (style === "natural") {
    formattedPrompt += ", natural lighting, realistic colors, photorealistic";
  }
  
  return formattedPrompt;
}

function formatImagenPrompt(prompt: string, params: any): string {
  // Imagen doesn't use command parameters in the prompt text
  return prompt;
}

function formatAnimePrompt(prompt: string, params: any): string {
  if (!params) return prompt;
  
  const { style = "anime_v2", seed = 12345, sampler = "euler_a" } = params;
  let formattedPrompt = prompt;
  
  // Add style as a prefix
  formattedPrompt = `${style}, ${formattedPrompt}`;
  
  // Add seed parameter
  formattedPrompt += `, seed:${seed}`;
  
  // Add sampler parameter
  formattedPrompt += `, sampler:${sampler}`;
  
  return formattedPrompt;
}

function formatFluxPrompt(prompt: string, params: any): string {
  if (!params) return prompt;
  
  const { style = "creative" } = params;
  let formattedPrompt = prompt;
  
  // Add style as a suffix
  formattedPrompt += `, ${style} style`;
  
  return formattedPrompt;
}

function formatIdeogramPrompt(prompt: string, params: any): string {
  if (!params) return prompt;
  
  const { style = "default" } = params;
  let formattedPrompt = prompt;
  
  // Add style as a suffix if not default
  if (style !== 'default') {
    formattedPrompt += `, ${style} style`;
  }
  
  return formattedPrompt;
}