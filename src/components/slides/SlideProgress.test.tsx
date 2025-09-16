// src/components/slides/SlideProgress.test.tsx
import { render, screen } from '@testing-library/react';
import SlideProgress from './SlideProgress';
import styles from './SlideProgress.module.css';
import { matchMedia } from '../../tests/mocks/matchMedia.mock';

// The tests are now un-skipped and updated to reflect the new design.
describe('SlideProgress', () => {
  beforeAll(() => {
    // Mock for potential responsive elements, though current design is fixed.
    matchMedia.useMediaQuery('(min-width: 1024px)');
  });

  test('should render the split layout for step 0', () => {
    render(<SlideProgress step={0} className="active" />);
    
    // Check for the main title and description
    expect(screen.getByText('Full-Stack Craftsmanship')).toBeInTheDocument();
    
    // Check for the mockups by their content alt text
    expect(screen.getByAltText('Desktop App')).toBeInTheDocument();
    expect(screen.getByAltText('Mobile App GIF')).toBeInTheDocument();
    
    // Verify the container has the correct layout class
    const container = screen.getByTestId('slide-progress-container');
    expect(container.querySelector(`.${styles.gridSplit}`)).toBeInTheDocument();
  });

  test('should render the centered card layout for step 1', () => {
    render(<SlideProgress step={1} className="active" />);
    
    // Check for the main title
    expect(screen.getByText('Tiered AI Engine for Quality & Scale')).toBeInTheDocument();
    
    // Check for the content of the three cards
    expect(screen.getByText('Efficient Base')).toBeInTheDocument();
    expect(screen.getByText('Premium Quality')).toBeInTheDocument();
    expect(screen.getByText('Future-Ready')).toBeInTheDocument();
    
    // Verify the container has the correct layout class
    const container = screen.getByTestId('slide-progress-container');
    expect(container.querySelector(`.${styles.gridCenter}`)).toBeInTheDocument();
  });

  test('should render the hiring grid layout for step 2', () => {
    render(<SlideProgress step={2} className="active" />);
    
    // Check for the hiring title
    expect(screen.getByText('Hiring: Owners, Not Employees')).toBeInTheDocument();
    
    // Check for the three images by their alt text
    expect(screen.getByAltText('Two key roles')).toBeInTheDocument();
    expect(screen.getByAltText('Growth inside the company')).toBeInTheDocument();
    expect(screen.getByAltText('Growth as a creator')).toBeInTheDocument();
    
    // Verify the container has the correct layout class
    const container = screen.getByTestId('slide-progress-container');
    expect(container.querySelector(`.${styles.hiringLayout}`)).toBeInTheDocument();
  });
});
