import { Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page
    readonly billDropdown: Locator
    readonly addBillButton: Locator
    readonly listBillButton: Locator

    constructor(page: Page) {
        this.page = page

        this.billDropdown = page.locator('css=a >> text=Contas')
        this.addBillButton = page.locator('css=a >> text=Adicionar')
        this.listBillButton = page.locator('css=a >> text=Listar')
    
    }

    async addBill() {
        await this.billDropdown.click()
        await this.addBillButton.click()
    }

    async listBill() {
        await this.billDropdown.click()
        await this.listBillButton.click()

    }


}