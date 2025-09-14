import { render, screen } from '@testing-library/react';
import SlideProgress from './SlideProgress';
import { mockMatchMedia } from '../../tests/mocks/matchMedia.mock';
import styles from './SlideProgress.module.css';

describe('SlideProgress', () => {
  beforeAll(() => {
    mockMatchMedia();
  });

  it('should render the correct two-column grid layout for step 0', () => {
    render(<SlideProgress step={0} />);
    
    const container = screen.getByTestId('slide-progress-container');
    const slideContent = container.querySelector('.slide-content');
    const layoutGrid = slideContent.querySelector(`.${styles.layoutGrid}`);
    
    expect(layoutGrid).toBeInTheDocument();

    const computedStyles = window.getComputedStyle(layoutGrid);
    expect(computedStyles.display).toBe('grid');
    expect(computedStyles.gridTemplateColumns).toBe('2fr 1fr');

    const leftColumn = layoutGrid.querySelector(`.${styles.leftColumn}`);
    const rightColumn = layoutGrid.querySelector(`.${styles.rightColumn}`);

    expect(leftColumn).toBeInTheDocument();
    expect(rightColumn).toBeInTheDocument();

    expect(leftColumn.querySelector('h2').textContent).toBe('Full-Stack Craftsmanship');
    expect(leftColumn.querySelector('img').src).toContain('macos-app.png');
    expect(rightColumn.querySelector('img').src).toContain('change-avatar.gif');
  });

  it('should render the default layout for other steps', () => {
    render(<SlideProgress step={1} />);
    const container = screen.getByTestId('slide-progress-container');
    const defaultLayout = container.querySelector(`.${styles.defaultLayout}`);
    expect(defaultLayout).toBeInTheDocument();
  });
});
