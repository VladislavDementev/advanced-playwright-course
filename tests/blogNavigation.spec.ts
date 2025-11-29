import { test, expect } from '@playwright/test';

test('blog navigation', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
  await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Our Story' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'shopping_cart' }).click();
  await page.getByRole('button', { name: 'Back to store' }).click();
  await page.getByRole('link', { name: 'shopping_cart' }).click();
  await page.getByRole('button', { name: 'Remove item' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Vladislav');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('test@mail.com');
  await page.getByRole('textbox', { name: 'Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Message' }).fill('123');
  await page.getByRole('button', { name: 'Send Message' }).click();
});