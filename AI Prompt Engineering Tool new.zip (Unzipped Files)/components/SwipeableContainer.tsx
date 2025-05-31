import React, { useRef, useState, useEffect } from "react";
import { useIsMobile } from "./ui/use-mobile";

interface SwipeableContainerProps {
  className?: string;
  children: React.ReactNode;
  showIndicators?: boolean;
}

export const SwipeableContainer: React.FC<SwipeableContainerProps> = ({
  className = "",
  children,
  showIndicators = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [showLeftIndicator, setShowLeftIndicator] = useState(false);
  const [showRightIndicator, setShowRightIndicator] = useState(true);

  // Check if scrolling is possible and update indicators
  const updateScrollIndicators = () => {
    if (!containerRef.current || !isMobile) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    // Show left indicator if scrolled more than 10px from left
    setShowLeftIndicator(scrollLeft > 10);
    // Show right indicator if there's more than 10px to scroll right
    setShowRightIndicator(scrollWidth - clientWidth - scrollLeft > 10);
  };

  // Update indicators on mount and when container content changes
  useEffect(() => {
    updateScrollIndicators();
    // Use ResizeObserver to detect content changes
    const observer = new ResizeObserver(() => {
      updateScrollIndicators();
    });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isMobile, children]);

  // Handle scroll events to update indicators
  const handleScroll = () => {
    updateScrollIndicators();
  };

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className={`w-full ${isMobile ? 'overflow-x-auto scrollbar-hide' : ''} ${className}`}
        onScroll={handleScroll}
      >
        {children}
      </div>
      
      {/* Scroll indicators - only visible on mobile when scrollable */}
      {isMobile && showIndicators && (
        <>
          {/* Left indicator */}
          <div 
            className={`absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent pointer-events-none transition-opacity duration-300
                      ${showLeftIndicator ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden="true"
          />
          
          {/* Right indicator */}
          <div 
            className={`absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent pointer-events-none transition-opacity duration-300
                      ${showRightIndicator ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden="true"
          />
        </>
      )}
    </div>
  );
};

// Custom class for hiding scrollbars but keeping functionality
const scrollbarHideStyles = `
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}
`;

// Add the styles to the document
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = scrollbarHideStyles;
  document.head.appendChild(styleElement);
}