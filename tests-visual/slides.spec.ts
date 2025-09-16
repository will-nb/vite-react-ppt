import { test, expect, Page } from '@playwright/test';

const navigateToSlide = async (page: Page, slideIndex: number, stepIndex: number = 0) => {
  await page.goto('/');
  // Wait for the cover page to be ready
  await expect(page.locator('.slide.cover')).toBeVisible({ timeout: 10000 });

  // This array must match the `stepsPerSlide` in App.tsx
  const stepsPerSlide = [1, 4, 3, 6, 4, 1];
  let keyPresses = 0;

  // Calculate key presses to reach the target slide's first step
  for (let i = 0; i < slideIndex; i++) {
    keyPresses += stepsPerSlide[i];
  }
  // Add key presses to reach the target step within that slide
  keyPresses += stepIndex;

  // Simulate user pressing the right arrow key
  for (let i = 0; i < keyPresses; i++) {
    await page.keyboard.press('ArrowRight');
    // A small delay between presses can help prevent race conditions
    await page.waitForTimeout(50);
  }

  // Final short wait for animations to settle
  await page.waitForTimeout(300);
};

test.describe('Presentation Slides - Slide Progress', () => {

  test('Slide - Progress (Step 1)', async ({ page }) => {
    await navigateToSlide(page, 2, 0);
    await expect(page.locator('footer')).toContainText('Team Building3 / 6');
    await expect(page).toHaveScreenshot('slide-progress-step-1.png');
  });

  test('Slide - Progress (Step 2)', async ({ page }) => {
    await navigateToSlide(page, 2, 1);
    await expect(page.locator('footer')).toContainText('Team Building3 / 6');
    await expect(page).toHaveScreenshot('slide-progress-step-2.png');
  });

  test('Slide - Progress (Step 3)', async ({ page }) => {
    await navigateToSlide(page, 2, 2);
    await expect(page.locator('footer')).toContainText('Team Building3 / 6');
    await expect(page).toHaveScreenshot('slide-progress-step-3.png');
  });
});
