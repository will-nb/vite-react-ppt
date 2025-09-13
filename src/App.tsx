import React, { useState, useEffect, useCallback, useRef, forwardRef, useImperativeHandle } from 'react';
import { useDrag } from '@use-gesture/react';
import * as Slides from './components';

const SLIDE_COMPONENTS = [
  Slides.SlideCover,
  Slides.SlideStory,
  Slides.SlideProgress,
  Slides.SlideMarket,
  Slides.SlideCreator,
  Slides.SlideInnovQA,
  Slides.SlideInnovMemo,
  Slides.SlideInnovRewards,
  Slides.SlideRoadmap,
  Slides.SlideEnd,
];

export interface SlideHandle {
  getStepCount: () => number;
  nextStep: () => boolean;
  prevStep: () => boolean;
  setStep: (step: number) => void;
}

const App = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const activeSlideRef = useRef<SlideHandle>(null);

  const totalSlides = SLIDE_COMPONENTS.length;
  const progress = ((slideIndex + 1) / totalSlides) * 100;

  const handleNext = useCallback(() => {
    if (activeSlideRef.current?.nextStep()) {
      return; 
    }
    setSlideIndex(current => Math.min(current + 1, totalSlides - 1));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    if (activeSlideRef.current?.prevStep()) {
      return;
    }
    setSlideIndex(current => {
        const prevIndex = Math.max(current - 1, 0);
        // When moving to a previous slide, reset its step to the last one
        if (prevIndex < current) {
            // This is a bit of a hack, we need to get a ref to the *previous* slide
            // For now, we'll just reset the incoming slide to step 0
        }
        return prevIndex;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ([' ', 'Enter', 'ArrowRight', 'ArrowDown', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        handleNext();
      } else if (['ArrowLeft', 'ArrowUp', 'Backspace', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        handlePrev();
      } else if (e.key.toLowerCase() === 'f') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const bind = useDrag(({ swipe: [swipeX], last }) => {
    if (last) {
      if (swipeX < -0.5) handleNext();
      if (swipeX > 0.5) handlePrev();
    }
  });

  return (
    <div className="app-container" {...bind()}>
      <div className="stage">
        <div className="slides-container">
          {SLIDE_COMPONENTS.map((SlideComponent, index) => (
            <SlideComponent
              key={index}
              isActive={index === slideIndex}
              ref={index === slideIndex ? activeSlideRef : null}
            />
          ))}
        </div>
        <div className="footer">
          <span>HKSTP Pitch</span>
          <span>{slideIndex + 1} / {totalSlides}</span>
        </div>
        <div className="progress">
          <div className="bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="nav-hint">← / → to navigate · F to toggle fullscreen</div>
      </div>
    </div>
  );
};

export default App;
