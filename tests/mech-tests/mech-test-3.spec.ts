import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mech.moscow/');
  await page.getByRole('button', { name: 'Новинки' }).click();
  await page.getByRole('button', { name: 'Фильтры' }).click();
  await page.getByRole('checkbox', { name: 'coach1' }).check();
  await page.getByRole('button', { name: 'Применить' }).click();
  //замена на локатор по класс
  await page.locator('//*[@id="__nuxt"]/div/main/div/div[2]/div[3]/div/article/div[3]/a/h3').click();
  await page.getByRole('button', { name: 'Проверить наличие' }).click();
  await page.goBack();
  //шаг на страницу назад
  //комментарий для тестирования гита
  await page.getByRole('button', { name: 'Фильтры' }).click();
  await page.getByRole('button', { name: 'Очистить фильтры' }).click();
});
