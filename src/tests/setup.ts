// src/tests/setup.ts
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Canvas getContext for Chart.js
HTMLCanvasElement.prototype.getContext = vi.fn();

// Mock Fullscreen API
document.documentElement.requestFullscreen = vi.fn();
document.exitFullscreen = vi.fn();
Object.defineProperty(document, 'fullscreenElement', {
  value: null,
  writable: true,
});
