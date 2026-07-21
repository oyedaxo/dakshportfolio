import { useState, useEffect } from "react";

export function useScrollSpy(ids: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      // Find all sections by ID
      const elements = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      if (elements.length === 0) return;

      // Find the element that is most visible or currently active in the viewport
      let currentActiveId = "";

      for (const element of elements) {
        const { top } = element.getBoundingClientRect();
        
        // If element is relatively near the top of viewport with an offset
        if (top <= offset + 50) {
          currentActiveId = element.id;
        }
      }

      // If at very top, default to first id
      if (window.scrollY === 0 && elements.length > 0) {
        currentActiveId = elements[0].id;
      }

      // Check if scrolled to bottom
      if (window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight) {
        currentActiveId = elements[elements.length - 1].id;
      }

      if (currentActiveId && currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset, activeId]);

  return activeId;
}
