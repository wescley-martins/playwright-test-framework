import { expect, test as setup } from '@playwright/test'
import { LoginPage } from './support/pages/loginPage'

setup('authenticate', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page)
    await loginPage.login()
    await expect(page).toHaveTitle('Seu Barriga - Home')
    await page.context().storageState({ path: 'playwright/.auth/storageState.json'})
})