import { Locator, Page, expect} from "@playwright/test";
import { BillModel } from '../../fixtures/bill.model'

export class BillPage {

    readonly page: Page
    readonly billDescriptionInput: Locator
    readonly billSaveButton: Locator
    readonly updatedSuccessAlert: Locator

    constructor(page: Page) {
        this.page = page

        this.billDescriptionInput = page.locator('#nome')
        this.billSaveButton = page.locator('css=button >> text=Salvar')
        this.updatedSuccessAlert = page.locator('div[role="alert"]')
    }

    async addBill(billName: string) {
        const billModel: BillModel = {
            nome: billName
        }
        
        await this.billDescriptionInput.fill(billModel.nome)
        await this.billSaveButton.click()
    }

    async expectBillToBeVisible(billName: string) {
        const target = this.page.locator('#tabelaContas > tbody > tr', {hasText: billName})
        await expect(target).toBeVisible()
    }

    async expectBillAlertWithSucess(message: string) {
        const target = this.updatedSuccessAlert
        await expect(target).toHaveText(message)
    }

    async editBillButton(billName: string) {
        const editButton =  this.page.locator(`xpath=//*[contains(text(), "${billName}")]/..//a/span[@class="glyphicon glyphicon-edit"]`)
        await editButton.click()
    }

    async deleteBillButton(billName: string) {
        const deleteButton = this.page.locator(`xpath=//*[contains(text(), "${billName}")]/..//a/span[@class="glyphicon glyphicon-remove-circle"]`)
        await deleteButton.click()
    }

    async editBill(updatedBillName: string) {
        await this.billDescriptionInput.clear()
        await this.addBill(updatedBillName)
    }
}