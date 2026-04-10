import { test, expect } from '@playwright/test';
import { LoginPage } from './support/pages/loginPage';

test('Successfully logs in', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page)
    await loginPage.login()
    await expect(page).toHaveTitle('Seu Barriga - Home')
})