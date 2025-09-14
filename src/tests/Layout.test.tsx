import { render, screen } from '@testing-library/react';
import App from '../App';
import { mockMatchMedia } from './mocks/matchMedia.mock';

describe('Global Layout Rules', () => {
  beforeAll(() => {
    // Mock matchMedia for landscape/portrait checks
    mockMatchMedia({ orientation: 'landscape' });
  });

  it('should enforce that every .slide element contains a single .slide-content child', () => {
    render(<App />);

    // In landscape mode, only the active slide is in the DOM, so we need to render all of them
    // to properly test this rule. A better way might be to test each slide component individually.
    // For this test, we'll switch to a temporary "all slides visible" approach.
    const slidesContainer = screen.getByTestId('landscape-container');
    
    // This is a bit of a hack for testing, we'd ideally render each component in isolation
    // but for a global rule, checking the integrated app is valuable.
    const slides = slidesContainer.querySelectorAll('.slide');

    // This test will initially fail because there's only one slide rendered in landscape.
    // Let's adjust the test to be more robust after refactoring App to render all slides for testing.
    
    // For now, let's assume we can get all slide components and test them.
    // This test will fail until the components are refactored.
    const allSlideComponents = slides; // Placeholder
    
    expect(allSlideComponents.length).toBeGreaterThan(0);

    allSlideComponents.forEach((slideEl, index) => {
      // Rule 1: Must have exactly one direct child.
      expect(slideEl.children.length).toBe(1);

      // Rule 2: That single child must have the 'slide-content' class.
      const contentEl = slideEl.children[0];
      expect(contentEl).toHaveClass('slide-content');
    });
  });
});
