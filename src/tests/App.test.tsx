// src/tests/App.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { matchMedia } from './mocks/matchMedia.mock';

// Mock matchMedia before each test
beforeEach(() => {
  matchMedia.clear();
});


describe('App Slide Navigation (Landscape)', () => {
  beforeEach(() => {
    // Set viewport to landscape
    matchMedia.useMediaQuery('(orientation: landscape)');
  });

  it('should render only the active slide and navigate correctly', () => {
    render(<App />);
    
    // Initial state: Only cover slide content should be present
    expect(screen.getByAltText('Granostack Cover')).toBeInTheDocument();
    expect(screen.queryByText('Knowledge in Silos')).not.toBeInTheDocument();

    // Navigate forward
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    
    // After navigation: Cover slide is unmounted, Story slide is mounted
    expect(screen.queryByAltText('Granostack Cover')).not.toBeInTheDocument();
    expect(screen.getByText('Knowledge in Silos')).toBeInTheDocument();

    // Navigate backward
    fireEvent.keyDown(window, { key: 'ArrowLeft' });

    // After navigation: Story slide is unmounted, Cover slide is mounted back
    expect(screen.queryByText('Knowledge in Silos')).not.toBeInTheDocument();
    expect(screen.getByAltText('Granostack Cover')).toBeInTheDocument();
  });
});

describe('App Slide Navigation (Portrait)', () => {
    beforeEach(() => {
        // Set viewport to portrait
        matchMedia.useMediaQuery('(orientation: portrait)');
    });

    it('should render all slides initially for vertical scrolling in portrait mode', () => {
        render(<App />);
        expect(screen.getByTestId('portrait-container')).toBeInTheDocument();
        expect(screen.queryByTestId('landscape-container')).not.toBeInTheDocument();
        
        // In portrait, all slides are in the document for scrolling.
        expect(screen.getByAltText('Granostack Cover')).toBeInTheDocument();
        expect(screen.getByText('Knowledge in Silos')).toBeInTheDocument();
    });
});

describe('Footer Functionality', () => {
  beforeEach(() => {
    matchMedia.useMediaQuery('(orientation: landscape)');
  });

  it('should display the correct page number on initial render and after navigation', () => {
    render(<App />);

    // 1. Initial render check
    expect(screen.getByText('1 / 6')).toBeInTheDocument();

    // 2. Navigate forward and check update
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(screen.queryByText('1 / 6')).not.toBeInTheDocument();
    expect(screen.getByText('2 / 6')).toBeInTheDocument();

    // 3. Navigate backward and check update
    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    expect(screen.queryByText('2 / 6')).not.toBeInTheDocument();
    expect(screen.getByText('1 / 6')).toBeInTheDocument();
  });
});

describe('Fullscreen Functionality', () => {
  beforeEach(() => {
    matchMedia.useMediaQuery('(orientation: landscape)');
    // Reset mocks before each test
    vi.clearAllMocks();
  });

  it('should call requestFullscreen when "f" key is pressed', () => {
    render(<App />);

    // Ensure it hasn't been called yet
    expect(document.documentElement.requestFullscreen).not.toHaveBeenCalled();

    // Press the 'f' key
    fireEvent.keyDown(window, { key: 'f', code: 'KeyF' });

    // Assert that requestFullscreen was called once
    expect(document.documentElement.requestFullscreen).toHaveBeenCalledTimes(1);
  });
});

describe('Scroll Snap Functionality (Portrait)', () => {
  beforeEach(() => {
    matchMedia.useMediaQuery('(orientation: portrait)');
  });

  it('should have the correct class for scroll snapping', () => {
    render(<App />);

    const portraitContainer = screen.getByTestId('portrait-container');

    // 1. Check if the container has the specific class for portrait scrolling
    expect(portraitContainer).toHaveClass('portrait-scroll');

    // 2. Check each slide for its own necessary class
    const slides = portraitContainer.children;
    expect(slides.length).toBe(6);
    for (const slide of slides) {
      expect(slide).toHaveClass('slide');
    }
  });
});
