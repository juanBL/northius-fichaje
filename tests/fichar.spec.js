require('dotenv').config();
// @ts-check
const { test, expect } = require('@playwright/test');

test('fichar', async ({ page }) => {
  await page.goto('https://trainingbnetwork.checkjc.com/login');
  await page.getByPlaceholder('Usuario').click();
  await page.getByPlaceholder('Usuario').fill(process.env.USERID);
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill(process.env.PASSWORD);
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: ' Fichar' }).click();
  await page.goto('https://trainingbnetwork.checkjc.com/portal/employee');
});