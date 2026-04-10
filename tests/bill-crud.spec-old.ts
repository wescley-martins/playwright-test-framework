import { test, expect } from '@playwright/test';
import { deleteBill } from './support/helpers/helpers';

test.describe('Bill CRUD operations', () => {
    test('Should create a new bill', async ({ page, request }) => {
        await page.goto('https://seubarriga.wcaquino.me/login')
        await page.locator('#email').fill('wescleymartins02@outlook.com')
        await page.locator("#senha").fill('1234@')
        await page.click('css=button >> text=Entrar')

        const dropdownContas = page.locator('css=a >> text=Contas')
        await dropdownContas.click()
        const adicionarConta = page.locator('css=a >> text=Adicionar')
        await adicionarConta.click()

        const nomeConta = 'Nova Conta'

        await page.locator('#nome').fill(nomeConta)
        await page.click('css=button >> text=Salvar')

        const target = page.locator('#tabelaContas > tbody > tr', {hasText: nomeConta})
        await expect(target).toBeVisible()

        await deleteBill(request, nomeConta)
    })

    /* test('Should retrieve a bill', async({page}) => {
        
    })

    test('Should update a bill', async({page}) => {
        
    })

    test('Should delete a bill successfully', async({page}) => {
        
    }) */
})