import { test, expect } from '@playwright/test';

test.describe('Presentation Slides', () => {
  test('Slide - Progress', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByAltText('Granostack Cover')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('footer')).toContainText('1 / 8');

    await page.keyboard.press('ArrowRight');
    await expect(page.locator('footer')).toContainText('2 / 8');

    // The second slide has 3 internal steps.
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('footer')).toContainText('3 / 8');

    await expect(page.getByTestId('slide-progress-container')).toBeVisible();

    // The test is now clean and focuses solely on the screenshot comparison.
    await expect(page).toHaveScreenshot('slide-progress.png');
  });
});
