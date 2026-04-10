import { Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page
    readonly billDropdown: Locator
    readonly addBillButton: Locator

    constructor(page: Page) {
        this.page = page

        this.billDropdown = page.locator('css=a >> text=Contas')
        this.addBillButton = page.locator('css=a >> text=Adicionar')
    }

    async addBill() {
        await this.billDropdown.click()
        await this.addBillButton.click()
    }


}