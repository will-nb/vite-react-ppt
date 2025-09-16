import { test, expect, Page } from '@playwright/test';

// Function to navigate to a specific slide and step
const navigateToSlide = async (page: Page, slideIndex: number) => {
  await page.goto(`/?slide=${slideIndex}`);
  // A short static wait is the most reliable way to wait for animations to settle.
  await page.waitForTimeout(500);
};

test.describe('Presentation Slides - Slide Roadmap', () => {
  test('Slide - Roadmap (Single View)', async ({ page }) => {
    // SlideRoadmap is the 5th slide (index 4)
    await navigateToSlide(page, 4);

    // Take a screenshot of the entire slide
    await expect(page.locator('.slide')).toHaveScreenshot(`slide-roadmap-single-view.png`);
  });
});
