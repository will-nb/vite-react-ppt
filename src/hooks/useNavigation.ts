// src/hooks/useNavigation.ts
import { useState, useEffect, useCallback } from 'react';

interface NavigationOptions {
  slideCount: number;
  stepsPerSlide?: number[];
}

export const useNavigation = ({ slideCount, stepsPerSlide = [] }: NavigationOptions) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  const totalStepsForCurrentSlide = stepsPerSlide[slideIndex] || 1;

  const goToNext = useCallback(() => {
    if (stepIndex < totalStepsForCurrentSlide - 1) {
      setStepIndex(stepIndex + 1);
    } else if (slideIndex < slideCount - 1) {
      setSlideIndex(slideIndex + 1);
      setStepIndex(0);
    }
  }, [slideIndex, stepIndex, slideCount, totalStepsForCurrentSlide]);

  const goToPrev = useCallback(() => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    } else if (slideIndex > 0) {
      const prevSlideStepCount = stepsPerSlide[slideIndex - 1] || 1;
      setSlideIndex(slideIndex - 1);
      setStepIndex(prevSlideStepCount - 1);
    }
  }, [slideIndex, stepIndex, stepsPerSlide]);

  const toggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, []);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowDown', 'Space', 'Enter', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        goToNext();
      } else if (['ArrowLeft', 'ArrowUp', 'Backspace', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        goToPrev();
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullScreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNext, goToPrev, toggleFullScreen]);

  return { slideIndex, stepIndex, goToNext, goToPrev };
};
