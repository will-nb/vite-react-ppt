import { render, screen } from '@testing-library/react';
import SlideProgress from './SlideProgress';
import { matchMedia } from '../../tests/mocks/matchMedia.mock';
import styles from './SlideProgress.module.css';

describe('SlideProgress', () => {
  beforeAll(() => {
    matchMedia.useMediaQuery('(min-width: 1024px)');
  });

  it('should render the correct two-column grid layout for step 0', () => {
    render(<SlideProgress step={0} />);
    
    const container = screen.getByTestId('slide-progress-container');
    const slideContent = container.querySelector('.slide-content');
    expect(slideContent).not.toBeNull();
    const layoutGrid = slideContent!.querySelector(`.${styles.layoutGrid}`);
    
    expect(layoutGrid).toBeInTheDocument();
    expect(layoutGrid).not.toBeNull();

    const computedStyles = window.getComputedStyle(layoutGrid!);
    expect(computedStyles.display).toBe('grid');
    expect(computedStyles.gridTemplateColumns).toBe('2fr 1fr');

    const leftColumn = layoutGrid!.querySelector(`.${styles.leftColumn}`);
    const rightColumn = layoutGrid!.querySelector(`.${styles.rightColumn}`);

    expect(leftColumn).toBeInTheDocument();
    expect(rightColumn).toBeInTheDocument();
    expect(leftColumn).not.toBeNull();
    expect(rightColumn).not.toBeNull();

    const h2 = leftColumn!.querySelector('h2');
    expect(h2).not.toBeNull();
    expect(h2!.textContent).toBe('Full-Stack Craftsmanship');

    const leftImg = leftColumn!.querySelector('img');
    expect(leftImg).not.toBeNull();
    expect(leftImg!.src).toContain('macos-app.png');

    const rightImg = rightColumn!.querySelector('img');
    expect(rightImg).not.toBeNull();
    expect(rightImg!.src).toContain('change-avatar.gif');
  });

  it('should render the default layout for other steps', () => {
    render(<SlideProgress step={1} />);
    const container = screen.getByTestId('slide-progress-container');
    const defaultLayout = container.querySelector(`.${styles.defaultLayout}`);
    expect(defaultLayout).toBeInTheDocument();
  });
});
