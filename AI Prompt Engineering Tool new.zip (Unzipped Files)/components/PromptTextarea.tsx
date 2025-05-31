import React, { useState, useEffect } from "react";
import { CopyIcon } from "./CopyIcon";
import { ExpandIcon } from "./ExpandIcon";
import { IconButton } from "./IconButton";
import { useIsMobile } from "./ui/use-mobile";
import { CharacterCounter } from "./CharacterCounter";

interface PromptTextareaProps {
  label: string;
  value: string;
  onChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
  readOnly?: boolean;
  onCopy?: () => void;
  maxLength?: number;
}

export function PromptTextarea({
  label,
  value,
  onChange,
  placeholder,
  readOnly = false,
  onCopy,
  maxLength = 500,
}: PromptTextareaProps) {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);
  const [charCount, setCharCount] = useState(
    value?.length || 0,
  );
  const [isCopying, setIsCopying] = useState(false);

  useEffect(() => {
    setCharCount(value?.length || 0);
  }, [value]);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (!readOnly && onChange) {
      if (maxLength && e.target.value.length > maxLength) {
        e.target.value = e.target.value.slice(0, maxLength);
      }
      setCharCount(e.target.value.length);
      onChange(e);
    }
  };

  const handleCopy = () => {
    if (!value.trim()) return;

    setIsCopying(true);

    // Try to use the clipboard API
    try {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          if (onCopy) onCopy();
          setTimeout(() => setIsCopying(false), 1000);
        })
        .catch((err) => {
          // Fallback method if clipboard API fails
          fallbackCopyTextToClipboard(value);
        });
    } catch (err) {
      // If clipboard API is not supported, use fallback
      fallbackCopyTextToClipboard(value);
    }
  };

  // Fallback method for older browsers
  const fallbackCopyTextToClipboard = (text: string) => {
    // Create a temporary textarea
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Make it invisible
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful && onCopy) onCopy();
    } catch (err) {
      console.error("Fallback: Could not copy text: ", err);
    }

    document.body.removeChild(textArea);
    setTimeout(() => setIsCopying(false), 1000);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-['Segoe_UI:Regular',_sans-serif] font-normal text-[14px] md:text-[16px] text-[#717182]">
        {label}
      </label>

      <div
        className={`bg-neutral-100 relative rounded w-full ${isExpanded ? "min-h-[200px] md:min-h-[240px]" : "min-h-[100px] md:min-h-[160px]"} transition-all duration-300`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full p-2 md:p-4 flex flex-col">
            <div className="flex-grow relative">
              <textarea
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                readOnly={readOnly}
                maxLength={!readOnly ? maxLength : undefined}
                className="absolute inset-0 w-full h-full resize-none border-none p-0 font-['Segoe_UI:Light',_sans-serif] font-light text-[14px] md:text-[16px] leading-[1.4] text-[#32343a] focus:outline-none bg-transparent"
              />
            </div>

            {readOnly && (
              <div className="flex justify-end gap-2 mt-2 md:absolute md:right-4 md:bottom-4">
                <IconButton onClick={handleExpandToggle}>
                  <CopyIcon />
                </IconButton>
                <IconButton
                  onClick={handleCopy}
                  className={isCopying ? "bg-emerald-50" : ""}
                >
                  <ExpandIcon />
                  {isCopying && (
                    <span className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 rounded-md text-[10px] font-medium text-emerald-600">
                      Copied!
                    </span>
                  )}
                </IconButton>
              </div>
            )}
          </div>
        </div>
        <div className="absolute border border-[#9f9fa9] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      </div>

      {!readOnly && (
        <CharacterCounter
          current={charCount}
          max={maxLength}
          showAlways={charCount >= maxLength * 0.5}
        />
      )}
    </div>
  );
}