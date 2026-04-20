import { APIRequestContext, expect } from "@playwright/test";
import { LoginModel } from "../../fixtures/login.model";
import { BillModel } from "../../fixtures/bill.model";

async function getToken(request: APIRequestContext) {
    const login: LoginModel = {
        email: 'wescleymartins02@outlook.com',
        senha: '1234@'
    }

    const token = await request.post('http://barrigarest.wcaquino.me/signin', { data: login })
    const requestBody = JSON.parse(await token.text())

    return requestBody.token
}

async function getBills(request: APIRequestContext) {
    const token = await getToken(request)

    const getBills = await request.get('http://barrigarest.wcaquino.me/contas', {
        headers: {
            Authorization: `JWT ${token}`
        }
    })

    const bills = JSON.parse(await getBills.text())

    return bills
}

async function findBillIdByName(request: APIRequestContext, billName: string) {
    const bills = await getBills(request)
    let billId

    for (const data of bills) {
        if(data.nome == billName) {
            billId = data.id
        }
    }

    return billId

}

export async function deleteBill(request: APIRequestContext, billName: string ) {
    const token = await getToken(request)
    const billId = await findBillIdByName(request, billName)

    await request.delete(`http://barrigarest.wcaquino.me/contas/${billId}`, {
        headers: {
            Authorization: `JWT ${token}`
        }
    })
}

export async function createBill(request: APIRequestContext, billName: string) {

    const token = await getToken(request)

    const bill: BillModel = {
        nome: billName
    }
    
    const target = await request.post('http://barrigarest.wcaquino.me/contas/', {
        data: bill,

        headers: {
            Authorization: `JWT ${token}`
        }
    })

    expect(target.status()).toBe(201)
}