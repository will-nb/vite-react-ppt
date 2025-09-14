import { test, expect } from '@playwright/test';

test.describe('Presentation Slides', () => {
  // Helper function for navigation to avoid repetition
  const navigateToSlide = async (page, slideIndex, stepIndex = 0) => {
    await page.goto('/');
    await expect(page.getByAltText('Granostack Cover')).toBeVisible({ timeout: 10000 });

    // Correct step counts for the first 3 slides (0-indexed)
    const stepsPerSlide = [1, 3, 3]; 
    let keyPresses = 0;
    for(let i = 0; i < slideIndex; i++) {
      keyPresses += stepsPerSlide[i];
    }
    keyPresses += stepIndex;

    for (let i = 0; i < keyPresses; i++) {
      await page.keyboard.press('ArrowRight');
    }
  };

  test('Slide - Progress (Step 1)', async ({ page }) => {
    await navigateToSlide(page, 2, 0);
    await expect(page.locator('footer')).toContainText('3 / 8');
    await expect(page.getByTestId('slide-progress-container')).toBeVisible();
    await expect(page).toHaveScreenshot('slide-progress-step-1.png');
  });

  test('Slide - Progress (Step 2)', async ({ page }) => {
    await navigateToSlide(page, 2, 1);
    await expect(page.locator('footer')).toContainText('3 / 8');
    await expect(page.getByTestId('slide-progress-container')).toBeVisible();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot('slide-progress-step-2.png');
  });

  test('Slide - Progress (Step 3)', async ({ page }) => {
    await navigateToSlide(page, 2, 2);
    await expect(page.locator('footer')).toContainText('3 / 8');
    await expect(page.getByTestId('slide-progress-container')).toBeVisible();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot('slide-progress-step-3.png');
  });
});
