import { test } from '@playwright/test';
import { deleteBill } from './support/helpers/helpers';
import { LoginPage } from './support/pages/loginPage';
import { HomePage } from './support/pages/homePage';
import { faker} from '@faker-js/faker'
import { BillPage } from './support/pages/billPage';

test.describe('Bill CRUD operations', () => {
    test('Should create a new bill', async ({ page, request }) => {
        const loginPage: LoginPage = new LoginPage(page)
        await loginPage.login()
       
        const homePage: HomePage = new HomePage(page)
        await homePage.addBill()

        const billName = faker.word.words()

        const billPage: BillPage = new BillPage(page)
        await billPage.addBill(billName)
        await billPage.expectBillToBeVisible(billName)
        await deleteBill(request, billName)
    })

    /* test('Should retrieve a bill', async({page}) => {
        
    })

    test('Should update a bill', async({page}) => {
        
    })

    test('Should delete a bill successfully', async({page}) => {
        
    }) */
})