import { test, expect } from '@playwright/test';

test('Borrower selection updates center pane', async ({page}) =>{
    await page.goto(`http://localhost:5173`);

    await page.getByRole('tab', { name: 'New' }).click();
    await page.getByText('Sarah Dunn').click();

    await expect(page.getByRole('heading', { name: 'Borrower Detail' })).toBeVisible();
    await expect(page.getByText('Sarah Dunn')).toBeVisible();
});