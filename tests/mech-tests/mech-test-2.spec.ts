import { test, expect } from '@playwright/test';

test('mech-test-2', async ({ page }) => {
  await page.goto('https://mech.moscow/');
  await page.getByRole('button', { name: 'Поиск' }).click();
  await page.getByPlaceholder('Поиск').click();
  await page.getByPlaceholder('Поиск').fill('Пуховик');
// Замена на локатор по классу - выбираем первый результат
  await page.locator('[class*="lg:hover:bg-grey"]').first().click();
  await page.getByRole('button', { name: 'Добавить в корзину' }).click();
  await page.locator('.grid.grid-cols-3.items-center.gap-2 > button:nth-child(3)').click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
  await page.locator('#head').getByRole('link').filter({ hasText: /^$/ }).click();
});

