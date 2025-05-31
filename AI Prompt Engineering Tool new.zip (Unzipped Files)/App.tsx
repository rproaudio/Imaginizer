import React, { useState, useEffect } from "react";
import { toast } from "sonner@2.0.3";
import { ToastProvider } from "./components/ToastProvider";
import { 
  MidjourneyIcon, MidjourneyIconWhite,
  ChatGPTIcon, ChatGPTIconWhite,
  GeminiIcon, GeminiIconWhite,
  FluxIcon, FluxIconWhite,
  IdeogramIcon, IdeogramIconWhite,
  AnimeIcon, AnimeIconWhite
} from "./components/ModelIcons";
import { ModelButton } from "./components/ModelButton";
import { TrendButton } from "./components/TrendButton";
import { Card } from "./components/Card";
import { PromptTextarea } from "./components/PromptTextarea";
import { GradientButton } from "./components/GradientButton";
import { MidjourneyParams } from "./components/modelParams/MidjourneyParams";
import { DalleParams } from "./components/modelParams/DalleParams";
import { ImagenParams } from "./components/modelParams/ImagenParams";
import { AnimeParams } from "./components/modelParams/AnimeParams";
import { FluxParams } from "./components/modelParams/FluxParams";
import { IdeogramParams } from "./components/modelParams/IdeogramParams";
import { ActionFigureParams } from "./components/modelParams/ActionFigureParams";
import { FashionDollParams } from "./components/modelParams/FashionDollParams";
import { FantasyHeroParams } from "./components/modelParams/FantasyHeroParams";
import { ModelType, TrendType, formatPrompt } from "./utils/promptFormatters";
import { SwipeableContainer } from "./components/SwipeableContainer";
import { useIsMobile } from "./components/ui/use-mobile";
import Logo from "./imports/Logo";

export default function App() {
  const isMobile = useIsMobile();
  const [selectedModel, setSelectedModel] = useState<ModelType | null>(null);
  const [selectedTrend, setSelectedTrend] = useState<TrendType>('none');
  const [basicPrompt, setBasicPrompt] = useState("");
  const [optimizedPrompt, setOptimizedPrompt] = useState("");
  
  // Model-specific parameters that impact prompt text
  const [midjourneyParams, setMidjourneyParams] = useState({
    stylize: 250,
    chaos: 0
  });
  
  const [dalleParams, setDalleParams] = useState({
    style: "vivid"
  });
  
  const [imagenParams, setImagenParams] = useState({});
  
  const [animeParams, setAnimeParams] = useState({
    characterDescription: "",
    settingMood: "",
    keyElement: "",
    dominantColors: "",
    style: "anime_v2",
    seed: 12345,
    sampler: "euler_a"
  });
  
  const [fluxParams, setFluxParams] = useState({
    style: "creative"
  });
  
  const [ideogramParams, setIdeogramParams] = useState({
    style: "default"
  });

  // Action Figure parameters
  const [actionFigureParams, setActionFigureParams] = useState({
    characterName: "",
    brandingText: "",
    accessory1: "",
    accessory2: "",
    accessory3: "",
    toyEra: "Modern Collector",
    packaging: "No Packaging"
  });

  // Fashion Doll parameters
  const [fashionDollParams, setFashionDollParams] = useState({
    dollName: "",
    outfitDescription: "",
    keyAccessory: "",
    hairStyle: "",
    packaging: "No Packaging"
  });

  // Fantasy Hero parameters
  const [fantasyHeroParams, setFantasyHeroParams] = useState({
    heroArchetype: "",
    primaryWeapon: "",
    armorStyle: "",
    keyDetail: "",
    settingSnippet: ""
  });

  // Update parameter values
  const updateMidjourneyParams = (key: string, value: any) => {
    setMidjourneyParams(prev => ({ ...prev, [key]: value }));
  };
  
  const updateDalleParams = (key: string, value: any) => {
    setDalleParams(prev => ({ ...prev, [key]: value }));
  };
  
  const updateImagenParams = (key: string, value: any) => {
    setImagenParams(prev => ({ ...prev, [key]: value }));
  };
  
  const updateAnimeParams = (key: string, value: any) => {
    setAnimeParams(prev => ({ ...prev, [key]: value }));
  };
  
  const updateFluxParams = (key: string, value: any) => {
    setFluxParams(prev => ({ ...prev, [key]: value }));
  };
  
  const updateIdeogramParams = (key: string, value: any) => {
    setIdeogramParams(prev => ({ ...prev, [key]: value }));
  };

  const updateActionFigureParams = (key: string, value: any) => {
    setActionFigureParams(prev => ({ ...prev, [key]: value }));
  };

  const updateFashionDollParams = (key: string, value: any) => {
    setFashionDollParams(prev => ({ ...prev, [key]: value }));
  };

  const updateFantasyHeroParams = (key: string, value: any) => {
    setFantasyHeroParams(prev => ({ ...prev, [key]: value }));
  };

  // Toggle model selection
  const toggleModelSelection = (model: ModelType) => {
    if (selectedModel === model) {
      setSelectedModel(null);
    } else {
      setSelectedModel(model);
    }
  };

  // Toggle trend selection
  const toggleTrendSelection = (trend: TrendType) => {
    if (selectedTrend === trend) {
      setSelectedTrend('none');
    } else {
      setSelectedTrend(trend);
    }
  };

  // Optimize the prompt based on selected model and parameters
  const optimizePrompt = () => {
    if (!selectedModel) {
      toast.error("Please select an AI model first");
      return;
    }
    
    // Only check for basic prompt if no trend is selected
    if (selectedTrend === 'none' && !basicPrompt.trim()) {
      toast.error("Please enter a basic prompt description");
      return;
    }
    
    // Validate trend-specific required fields
    if (selectedTrend === 'action-figure' && !actionFigureParams.characterName.trim()) {
      toast.error("Please enter a character name for your action figure");
      return;
    }

    if (selectedTrend === 'fashion-doll' && !fashionDollParams.dollName.trim()) {
      toast.error("Please enter a name for your fashion doll");
      return;
    }

    if (selectedTrend === 'anime' && !animeParams.characterDescription.trim()) {
      toast.error("Please enter a character description for your anime scene");
      return;
    }

    if (selectedTrend === 'fantasy-hero' && !fantasyHeroParams.heroArchetype.trim()) {
      toast.error("Please enter a hero archetype for your fantasy hero");
      return;
    }
    
    let params = selectedModel ? {
      midjourney: midjourneyParams,
      dalle: dalleParams,
      imagen: imagenParams,
      anime: animeParams,
      flux: fluxParams,
      ideogram: ideogramParams
    }[selectedModel] : null;

    // Get appropriate trend parameters
    let trendParams = null;
    if (selectedTrend === 'action-figure') {
      trendParams = actionFigureParams;
    } else if (selectedTrend === 'fashion-doll') {
      trendParams = fashionDollParams;
    } else if (selectedTrend === 'anime') {
      trendParams = animeParams;
    } else if (selectedTrend === 'fantasy-hero') {
      trendParams = fantasyHeroParams;
    }
    
    try {
      const formattedPrompt = formatPrompt({
        model: selectedModel,
        trend: selectedTrend,
        prompt: basicPrompt,
        params,
        trendParams
      });
      
      setOptimizedPrompt(formattedPrompt);
      toast.success("Prompt optimized successfully!");
    } catch (error) {
      toast.error("Error optimizing prompt: " + (error instanceof Error ? error.message : "Unknown error"));
    }
  };

  // Copy optimized prompt to clipboard
  const copyToClipboard = () => {
    if (!optimizedPrompt.trim()) {
      toast.error("No prompt to copy. Generate a prompt first.");
      return;
    }
    
    // The actual copy action is now handled in the PromptTextarea component
    // This function is now just for showing the toast notification
    toast.success("Copied to clipboard!");
  };

  // Reset all form fields
  const resetForm = () => {
    setSelectedModel(null);
    setSelectedTrend('none');
    setBasicPrompt("");
    setOptimizedPrompt("");
    toast.success("Form reset successfully");
  };

  // Define the OptimizeIcon component inline
  const OptimizeIcon = () => (
    <div className="relative shrink-0 size-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          d="M10 2.66667V1.33333"
          stroke="#FCFBF8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M10 10.6667V9.33333"
          stroke="#FCFBF8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M5.33333 6H6.66667"
          stroke="#FCFBF8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M13.3333 6H14.6667"
          stroke="#FCFBF8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M11.8667 7.86667L12.6667 8.66667"
          stroke="#FCFBF8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M10 6H10.0067"
          stroke="#FCFBF8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M11.8667 4.13333L12.6667 3.33333"
          stroke="#FCFBF8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M2 14L8 8"
          stroke="#FCFBF8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M8.13333 4.13333L7.33333 3.33333"
          stroke="#FCFBF8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </svg>
    </div>
  );

  // Render the appropriate parameter component based on selected model and trend
  const renderParameterComponent = () => {
    if (!selectedModel) {
      return (
        <div className="text-center py-8 text-gray-500 mx-auto w-full">
          Please select a model to see available parameters
        </div>
      );
    }

    // Get the trend-specific component
    const trendComponent = (() => {
      switch (selectedTrend) {
        case 'action-figure':
          return (
            <ActionFigureParams 
              params={actionFigureParams} 
              onChange={updateActionFigureParams} 
            />
          );
        case 'fashion-doll':
          return (
            <FashionDollParams
              params={fashionDollParams}
              onChange={updateFashionDollParams}
            />
          );
        case 'anime':
          return (
            <AnimeParams
              params={animeParams}
              onChange={updateAnimeParams}
            />
          );
        case 'fantasy-hero':
          return (
            <FantasyHeroParams
              params={fantasyHeroParams}
              onChange={updateFantasyHeroParams}
            />
          );
        default:
          return null;
      }
    })();

    // Get model-specific parameters component
    const modelComponent = (() => {
      switch (selectedModel) {
        case 'midjourney':
          return <MidjourneyParams params={midjourneyParams} onChange={updateMidjourneyParams} />;
        case 'dalle':
          return <DalleParams params={dalleParams} onChange={updateDalleParams} />;
        case 'imagen':
          return <ImagenParams params={imagenParams} onChange={updateImagenParams} />;
        case 'anime':
          // Skip model params for anime when trend is anime
          return selectedTrend === 'anime' ? null : <AnimeParams params={animeParams} onChange={updateAnimeParams} />;
        case 'flux':
          return <FluxParams params={fluxParams} onChange={updateFluxParams} />;
        case 'ideogram':
          return <IdeogramParams params={ideogramParams} onChange={updateIdeogramParams} />;
        default:
          return null;
      }
    })();

    // If a trend is selected, show trend parameters first, then model parameters
    if (selectedTrend !== 'none') {
      return (
        <div className="space-y-8 mx-auto w-full">
          {trendComponent}
          
          {modelComponent && (
            <div className="mt-8 pt-8 border-t border-gray-200 w-full">
              <h3 className="text-[16px] font-['Sora:Regular',_sans-serif] text-[#32343a] mb-4">
                Model-specific parameters
              </h3>
              {modelComponent}
            </div>
          )}
        </div>
      );
    }

    // If no trend is selected, just show model parameters
    return (
      <div className="space-y-8 mx-auto w-full">
        {modelComponent}
      </div>
    );
  };

  return (
    <>
      <ToastProvider />
      <div className="min-h-screen bg-[#32343a] flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-[0px_1px_16px_0px_rgba(31,58,88,0.15)] sticky top-0 w-full z-10">
          <div className="flex items-center justify-center py-3 px-4">
            <div className="w-full max-w-[1024px] relative h-[50px] flex items-center">
              <div className="relative h-[44px] w-[174px] overflow-hidden">
                <div className="absolute top-0 left-0 w-[694px] h-[174px] scale-[0.25] origin-top-left">
                  <Logo />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-[1024px] px-4 py-4 md:px-6 md:py-8 space-y-4 md:space-y-8">
            {/* Model Selection Card */}
            <Card
              title="Choose a model or trend"
              subtitle="Start by describing what you want to create and selecting your target AI model"
            >
              <div className="relative shrink-0 w-full">
                <div className="font-['Sora:Regular',_sans-serif] font-normal text-[#32343a] text-[14px] text-left mb-4">
                  <p className="block leading-[14px] text-[16px] font-bold my-2">Select model</p>
                </div>
                
                <SwipeableContainer>
                  <div className="flex flex-row gap-3 items-start justify-start overflow-x-auto pb-2">
                    <ModelButton
                      name="Midjourney"
                      icon={<MidjourneyIcon />}
                      iconWhite={<MidjourneyIconWhite />}
                      selected={selectedModel === 'midjourney'}
                      onClick={() => toggleModelSelection('midjourney')}
                    />
                    <ModelButton
                      name="ChatGPT"
                      icon={<ChatGPTIcon />}
                      iconWhite={<ChatGPTIconWhite />}
                      selected={selectedModel === 'dalle'}
                      onClick={() => toggleModelSelection('dalle')}
                    />
                    <ModelButton
                      name="Gemini"
                      icon={<GeminiIcon />}
                      iconWhite={<GeminiIconWhite />}
                      selected={selectedModel === 'imagen'}
                      onClick={() => toggleModelSelection('imagen')}
                    />
                    <ModelButton
                      name="Flux"
                      icon={<FluxIcon />}
                      iconWhite={<FluxIconWhite />}
                      selected={selectedModel === 'flux'}
                      onClick={() => toggleModelSelection('flux')}
                    />
                    <ModelButton
                      name="Ideogram"
                      icon={<IdeogramIcon />}
                      iconWhite={<IdeogramIconWhite />}
                      selected={selectedModel === 'ideogram'}
                      onClick={() => toggleModelSelection('ideogram')}
                    />
                  </div>
                </SwipeableContainer>
              </div>

              <div className="relative shrink-0 w-full mt-4">
                <div className="flex flex-col gap-[13px] items-start justify-start relative w-full">
                  <div className="font-['Sora:Regular',_sans-serif] font-normal text-[#32343a] text-[14px] text-left w-full">
                    <p className="block leading-[14px] text-[16px] font-bold">Select trend (optional)</p>
                  </div>
                  
                  <SwipeableContainer>
                    <div className="flex flex-row gap-3 items-start justify-start flex-wrap overflow-x-auto pb-2">
                      <TrendButton
                        name="Action-Figure"
                        selected={selectedTrend === 'action-figure'}
                        onClick={() => toggleTrendSelection('action-figure')}
                      />
                      <TrendButton
                        name="Fashion Doll"
                        selected={selectedTrend === 'fashion-doll'}
                        onClick={() => toggleTrendSelection('fashion-doll')}
                      />
                      <TrendButton
                        name="Anime"
                        selected={selectedTrend === 'anime'}
                        onClick={() => toggleTrendSelection('anime')}
                      />
                      <TrendButton
                        name="Fantasy Hero"
                        selected={selectedTrend === 'fantasy-hero'}
                        onClick={() => toggleTrendSelection('fantasy-hero')}
                      />
                    </div>
                  </SwipeableContainer>
                </div>
              </div>
            </Card>

            {/* Parameters Card */}
            <Card
              title="Configure parameters"
              subtitle="Select a model to see available parameters"
              showSubtitleOnlyWhenNoModel={true}
              isModelSelected={!!selectedModel}
            >
              {/* Only show the basic prompt textarea if no trend is selected */}
              {selectedTrend === 'none' && (
                <div className="relative shrink-0 w-full mx-auto">
                  <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start px-0 py-2 relative w-full">
                    <PromptTextarea
                      label="Basic prompt description"
                      value={basicPrompt}
                      onChange={(e) => setBasicPrompt(e.target.value)}
                      placeholder="Describe what you want to see (e.g., a serene landscape with a winding river at sunset)"
                      maxLength={80}
                    />
                  </div>
                </div>
              )}

              <div className={selectedTrend === 'none' ? "mt-4" : ""}>
                {renderParameterComponent()}
              </div>
            </Card>

            {/* Output Card */}
            <Card
              title="Generate & use your prompt"
              subtitle="Optimize your prompt and copy it for use in your AI image generator"
            >
              <div className="relative shrink-0 w-full mx-auto mb-4">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                  <GradientButton onClick={optimizePrompt} icon={<OptimizeIcon />} className="w-full md:w-auto">
                    Optimize Prompt
                  </GradientButton>
                  <div 
                    onClick={resetForm}
                    className="font-['Sora:Regular',_sans-serif] font-normal text-[#32343a] text-[14px] text-center md:text-right cursor-pointer hover:text-gray-900 transition-colors"
                  >
                    <p className="leading-[14px]">Reset</p>
                  </div>
                </div>
              </div>

              <div className="relative shrink-0 w-full mx-auto">
                <PromptTextarea
                  label="Optimized prompt"
                  value={optimizedPrompt}
                  placeholder="Your optimized prompt will appear here..."
                  readOnly={true}
                  onCopy={copyToClipboard}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}