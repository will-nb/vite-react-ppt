import { test, expect } from '@playwright/test';

test.describe('Presentation Slides', () => {
  const stepsToTest = [
    { name: 'Step 1: Split Layout', presses: 4, snapshot: 'slide-progress-step-1.png' },
    { name: 'Step 2: Centered AI Strategy', presses: 5, snapshot: 'slide-progress-step-2.png' },
    { name: 'Step 3: Hero Image - Key Roles', presses: 6, snapshot: 'slide-progress-step-3.png' },
    { name: 'Step 4: Hero Image - In Company', presses: 7, snapshot: 'slide-progress-step-4.png' },
    { name: 'Step 5: Hero Image - As Creators', presses: 8, snapshot: 'slide-progress-step-5.png' },
  ];

  for (const { name, presses, snapshot } of stepsToTest) {
    test(`Slide - Progress (${name})`, async ({ page }) => {
      await page.goto('/');
      await expect(page.getByAltText('Granostack Cover')).toBeVisible({ timeout: 10000 });

      // Navigate to the specific step on Slide 3
      // The number of presses accounts for slide changes and internal steps.
      for (let i = 0; i < presses; i++) {
        await page.keyboard.press('ArrowRight');
      }

      await expect(page.locator('footer')).toContainText('3 / 8');
      await expect(page.getByTestId('slide-progress-container')).toBeVisible();
      
      // A short wait for any transitions to complete before taking a screenshot
      await page.waitForTimeout(200);
      await expect(page).toHaveScreenshot(snapshot);
    });
  }
});
