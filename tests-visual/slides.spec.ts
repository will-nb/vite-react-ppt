import { test, expect } from '@playwright/test';

test.describe('Presentation Slides', () => {
  test('Slide - Progress (Step 1)', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByAltText('Granostack Cover')).toBeVisible({ timeout: 10000 });

    // Navigate to Slide 3
    await page.keyboard.press('ArrowRight'); // To slide 2
    await page.keyboard.press('ArrowRight'); // To slide 3, step 1
    await page.keyboard.press('ArrowRight'); 
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('footer')).toContainText('3 / 8');

    await expect(page.getByTestId('slide-progress-container')).toBeVisible();
    await expect(page).toHaveScreenshot('slide-progress-step-1.png');
  });

  test('Slide - Progress (Step 2)', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByAltText('Granostack Cover')).toBeVisible({ timeout: 10000 });

    // Navigate to Slide 3, Step 2
    await page.keyboard.press('ArrowRight'); // To slide 2
    await page.keyboard.press('ArrowRight'); // To slide 3, step 1
    await page.keyboard.press('ArrowRight'); 
    await page.keyboard.press('ArrowRight'); 
    await page.keyboard.press('ArrowRight'); // To slide 3, step 2
    await expect(page.locator('footer')).toContainText('3 / 8');

    await expect(page.getByTestId('slide-progress-container')).toBeVisible();
    // A short wait might be needed for the new content to render fully after navigation
    await page.waitForTimeout(200); 
    await expect(page).toHaveScreenshot('slide-progress-step-2.png');
  });
});
