import { test } from '@playwright/test';
import { deleteBill, createBill } from './support/helpers/helpers';
import { HomePage } from './support/pages/homePage';
import { faker } from '@faker-js/faker'
import { BillPage } from './support/pages/billPage';

test.describe('Bill CRUD operations', () => {

    let homePage: HomePage
    let billPage: BillPage
    let billName: string
    let updatedBillName = faker.word.words()

    test.beforeEach(async ({ page }) => {
        await page.goto("https://seubarriga.wcaquino.me/")
        homePage = new HomePage(page)
        billPage = new BillPage(page)
        billName = faker.word.words()
    })

    test('Should create a new bill', async ({ request }) => {
        await homePage.addBill()
        await billPage.addBill(billName)
        await billPage.expectBillToBeVisible(billName)
        await deleteBill(request, billName)
    })

    test('Should retrieve a bill', async ({ request }) => {
        await createBill(request, billName)
        await homePage.listBill()
        await billPage.expectBillToBeVisible(billName)
        await deleteBill(request, billName)
    })

    test('Should update a bill', async ({ request }) => {
        await createBill(request, billName)
        await homePage.listBill()
        await billPage.editBillButton(billName)
        await billPage.editBill(updatedBillName)
        await billPage.expectBillAlertWithSucess('Conta alterada com sucesso!')
        await deleteBill(request, updatedBillName)
    })

    test('Should delete a bill successfully', async ({ request }) => {
        await createBill(request, billName)
        await homePage.listBill()
        await billPage.deleteBillButton(billName)
        await billPage.expectBillAlertWithSucess('Conta removida com sucesso!')
    })
})