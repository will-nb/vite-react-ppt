// tests-visual/slide-innovation.spec.ts
import { test, expect, Page } from '@playwright/test';

const VITE_SERVER_URL = 'http://localhost:5173';

/**
 * Navigates to a specific slide and step.
 * @param page - The Playwright page object.
 * @param slideIndex - The index of the slide to navigate to.
 * @param stepIndex - The index of the step within the slide.
 */
const navigateToSlide = async (page: Page, slideIndex: number, stepIndex: number = 0) => {
  await page.goto(`${VITE_SERVER_URL}?slide=${slideIndex}&step=${stepIndex}`);
  await page.waitForSelector('.slide.active', { timeout: 5000 });
};

test.describe('Presentation Slides - Slide Innovation', () => {
  test('Slide - Innovation (Step 4: Creator)', async ({ page }) => {
    // Navigate to the Innovation slide, step 3 (which is the 4th step, index-based)
    await navigateToSlide(page, 1, 3);
    
    // Wait for animations to settle
    await page.waitForTimeout(1000);

    // Take a screenshot and compare with the baseline
    await expect(page).toHaveScreenshot('slide-innovation-step-4-chromium-darwin.png', {
      fullPage: true,
      maxDiffPixels: 100, // Allow for minor rendering differences
    });
  });
});
