import { Page, Locator } from '@playwright/test'
import { LoginModel } from '../../fixtures/login.model'

export class LoginPage {

    readonly page: Page
    readonly email: Locator
    readonly password: Locator
    readonly enterButton: Locator

    constructor(page: Page) {
        this.page = page

        this.email = page.locator('#email')
        this.password = page.locator("#senha")
        this.enterButton = page.locator('css=button >> text=Entrar')
    }

    async login() {

        const loginModel: LoginModel = {
            email: 'wescleymartins02@outlook.com',
            senha: '1234@'
        }

        await this.page.goto('https://seubarriga.wcaquino.me/login')

        await this.email.fill(loginModel.email)
        await this.password.fill(loginModel.senha)
        await this.enterButton.click()
    }

}