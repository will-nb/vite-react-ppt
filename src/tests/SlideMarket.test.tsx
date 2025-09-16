import { render, screen } from '@testing-library/react';
import SlideMarket from '../components/slides/SlideMarket';
import { matchMedia } from './mocks/matchMedia.mock';

// Un-skipping the tests and updating them for the new, unified design.
describe('SlideMarket Component', () => {

  beforeAll(() => {
    matchMedia.useMediaQuery('(min-width: 1024px)');
    // Mock for Chart.js
    window.HTMLCanvasElement.prototype.getContext = () => null;
  });

  test('should display market analysis content for step 0', () => {
    render(<SlideMarket step={0} />);
    expect(screen.getByText('A Far From Saturated Market')).toBeInTheDocument();
    expect(screen.getByText(/Global mobile learning/)).toBeInTheDocument();
  });

  test('should display the "Students" user profile for step 1', () => {
    render(<SlideMarket step={1} />);
    expect(screen.getByText('Who We Serve')).toBeInTheDocument();
    expect(screen.getByText('Students')).toBeInTheDocument();
    // Check for the description of the active user
    expect(screen.getByText('Deepen understanding of complex subjects and ace exams.')).toBeInTheDocument();
  });

  test('should display the "Professionals" user profile for step 3', () => {
    render(<SlideMarket step={3} />);
    expect(screen.getByText('Who We Serve')).toBeInTheDocument();
    expect(screen.getByText('Professionals')).toBeInTheDocument();
    // Check for the description of the active user
    expect(screen.getByText('Stay ahead of the curve in your field and drive innovation.')).toBeInTheDocument();
  });

  test('should display pricing content for step 5', () => {
    render(<SlideMarket step={5} />);
    expect(screen.getByText('Pricing & Rewards')).toBeInTheDocument();
    expect(screen.getByText('Membership')).toBeInTheDocument();
    expect(screen.getByText('HK$998 one-time')).toBeInTheDocument();
  });

});
