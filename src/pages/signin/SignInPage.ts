import { Page, expect } from '@playwright/test'
import { signInLocator } from './signin.locator'




export default class SignInPage {

    constructor(public page: Page) { }

    async isLoginPage(page: Page = this.page) {
        const locator = signInLocator(page)
        
        await expect(locator.headlinePage).toBeVisible()
        await expect(locator.emailInput).toBeVisible()
        await expect(locator.passwordInput).toBeVisible()
        await expect(locator.loginBtn).toBeVisible()
        await expect(locator.signupLink).toBeVisible()
    }

    async login(email: string, password: string, page: Page = this.page) {
        const locator = signInLocator(page)

        await locator.emailInput.fill(email)
        await locator.passwordInput.fill(password)
        await locator.loginBtn.click()

    }



}