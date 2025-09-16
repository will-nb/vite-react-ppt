import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SlideRoadmap from './SlideRoadmap';
import { matchMedia } from '../../tests/mocks/matchMedia.mock';

describe('SlideRoadmap', () => {
  beforeAll(() => {
    matchMedia.useMediaQuery('(orientation: landscape)');
  });

  const quarters = [
    { milestone: 'M1-3', title: 'Public Beta' },
    { milestone: 'M4-6', title: 'Creator Tools' },
    { milestone: 'M7-9', title: 'Compliance' },
    { milestone: 'M10-12', title: 'Global Launch' },
  ];

  test('renders all roadmap quarters correctly on a single slide', () => {
    render(<SlideRoadmap />);

    // Check that the main title is present
    expect(screen.getByText('Roadmap')).toBeInTheDocument();

    // Check that all quarter titles and milestones are rendered
    quarters.forEach(quarter => {
      expect(screen.getByText(quarter.milestone)).toBeInTheDocument();
      expect(screen.getByText(quarter.title)).toBeInTheDocument();
    });
  });
});
