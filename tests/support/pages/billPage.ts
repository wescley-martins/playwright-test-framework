import { Locator, Page, expect} from "@playwright/test";
import { BillModel } from '../../fixtures/bill.model'

export class BillPage {

    readonly page: Page
    readonly billDescriptionInput: Locator
    readonly billSaveButton: Locator

    constructor(page: Page) {
        this.page = page

        this.billDescriptionInput = page.locator('#nome')
        this.billSaveButton = page.locator('css=button >> text=Salvar')
    }

    async addBill(billName: string) {
        const billModel: BillModel = {
            billDescriptionInput: billName
        }
        
        await this.billDescriptionInput.fill(billModel.billDescriptionInput)
        await this.billSaveButton.click()
    }

    async expectBillToBeVisible(billName: string) {
        const target = this.page.locator('#tabelaContas > tbody > tr', {hasText: billName})
        await expect(target).toBeVisible()
    }
}