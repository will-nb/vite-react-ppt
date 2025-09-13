// src/tests/mocks/matchMedia.mock.ts
import { vi } from 'vitest';

class MatchMediaMock {
  private mediaQueries: { [key: string]: boolean } = {};

  constructor() {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: this.mediaQueries[query] || false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  }

  useMediaQuery(query: string) {
    this.clear();
    this.mediaQueries[query] = true;
    // Trigger a change event if needed by the hook implementation
    window.dispatchEvent(new Event('resize'));
  }

  clear() {
    this.mediaQueries = {};
  }
}

export const matchMedia = new MatchMediaMock();
