import { test, expect } from '@playwright/test';

// Helper to navigate to a specific slide and step
const navigateToSlide = async (page, slideIndex, stepIndex = 0) => {
  await page.goto('/');
  await expect(page.getByAltText('Granostack Cover')).toBeVisible({ timeout: 10000 });

  // Correct step counts for the slides up to the target
  const stepsPerSlide = [1, 3, 3, 6, 3]; 
  let keyPresses = 0;
  for (let i = 0; i < slideIndex; i++) {
    keyPresses += stepsPerSlide[i];
  }
  keyPresses += stepIndex;

  for (let i = 0; i < keyPresses; i++) {
    await page.keyboard.press('ArrowRight');
  }
};

test.describe('Presentation Slides - Slide Creator', () => {
  test('Slide - Creator (Step 1: AI Engine)', async ({ page }) => {
    await navigateToSlide(page, 4, 0);
    await expect(page.locator('footer')).toContainText('5 / 7');
    await expect(page.locator('h2')).toContainText('AI-Powered Knowledge Engine');
    await expect(page).toHaveScreenshot('slide-creator-step-1.png');
  });

  test('Slide - Creator (Step 2: Learning Motivation)', async ({ page }) => {
    await navigateToSlide(page, 4, 1);
    await expect(page.locator('footer')).toContainText('5 / 7');
    await expect(page.locator('h2')).toContainText('Effective Learning & Motivation');
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot('slide-creator-step-2.png');
  });

  test('Slide - Creator (Step 3: Ecosystem)', async ({ page }) => {
    await navigateToSlide(page, 4, 2);
    await expect(page.locator('footer')).toContainText('5 / 7');
    await expect(page.locator('h2')).toContainText('Creator ecosystem · Activation key');
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot('slide-creator-step-3.png');
  });
});
