import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Type, Volume2 } from "lucide-react";

export const AccessibilityControls = () => {
  const [largeText, setLargeText] = useState(false);

  const toggleLargeText = () => {
    setLargeText(!largeText);
    if (!largeText) {
      document.body.classList.add("large-text");
    } else {
      document.body.classList.remove("large-text");
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Button
        variant="secondary"
        size="sm"
        onClick={toggleLargeText}
        title="Toggle large text"
        className="shadow-soft"
      >
        <Type className="h-4 w-4" />
        {largeText ? "Normal Text" : "Large Text"}
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => speakText("Welcome to the AI-powered Early Dementia Screening Tool. Click on any section to have it read aloud.")}
        title="Read page aloud"
        className="shadow-soft"
      >
        <Volume2 className="h-4 w-4" />
        Read Aloud
      </Button>
    </div>
  );
};