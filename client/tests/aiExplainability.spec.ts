import { test, expect } from '@playwright/test';

test('', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByRole('tab', { name: 'New' }).click();
    await page.getByText('Sarah Dunn').click();

    const accordionTrigger = page.getByText('AI Explainability');
    await expect(page.getByText('Request Documents')).toBeHidden();

    await accordionTrigger.click();
    await expect(page.getByText('Request Documents')).toBeVisible();

    await accordionTrigger.click();
    await expect(page.getByText('Request Documents')).toBeHidden();
});