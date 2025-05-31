import React from "react";

interface CharacterCounterProps {
  current: number;
  max: number;
  showAlways?: boolean;
}

export function CharacterCounter({ current, max, showAlways = false }: CharacterCounterProps) {
  // Determine if we should show the counter
  // Show when approaching limit (>=70%) or when explicitly requested
  const shouldShow = showAlways || current >= max * 0.7;
  
  // Calculate percentage filled
  const percentFilled = (current / max) * 100;
  
  // Determine color based on how close to limit
  let textColor = "text-gray-400"; // Default color
  if (percentFilled >= 90) {
    textColor = "text-red-500"; // Red when very close or at limit
  } else if (percentFilled >= 80) {
    textColor = "text-orange-500"; // Orange when getting close
  } else if (percentFilled >= 70) {
    textColor = "text-amber-500"; // Amber when approaching
  }
  
  if (!shouldShow) {
    return null;
  }
  
  return (
    <div className={`text-[10px] md:text-[11px] text-right mt-1 ${textColor} transition-colors duration-200`}>
      {current}/{max} characters
    </div>
  );
}