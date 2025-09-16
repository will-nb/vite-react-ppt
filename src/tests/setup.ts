// src/tests/setup.ts
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Canvas getContext for Chart.js
if (typeof HTMLCanvasElement !== 'undefined') {
  HTMLCanvasElement.prototype.getContext = () => null;
}

// Mock requestFullscreen
if (typeof document !== 'undefined' && !document.documentElement.requestFullscreen) {
  document.documentElement.requestFullscreen = vi.fn();
}
