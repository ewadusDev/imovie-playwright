import { expect, Page } from "@playwright/test";
import { signUpLocator } from "./signup.locator";
import { signInLocator } from "../signin/signin.locator";

import type { CreateAccount } from "../../types/base"

export default class SignUpPage {
    constructor(public page: Page) { }

    async isSignUpPage(page: Page = this.page) {
        const locator = signUpLocator(page)

        await expect(locator.headLinePage).toBeVisible()
        await expect(locator.fullnameInput).toBeVisible()
        await expect(locator.usernameInput).toBeVisible()
        await expect(locator.emailInput).toBeVisible()
        await expect(locator.passwordInput).toBeVisible()
        await expect(locator.cfPasswordInput).toBeVisible()
        await expect(locator.createAccountBtn).toBeVisible()
        await expect(locator.signinLink).toBeVisible()
    }

    async createAccount(data: CreateAccount, page: Page = this.page) {
        const { fullname, username, email, password, cfpassword } = data
        const locator = signUpLocator(page)

        await locator.fullnameInput.fill(fullname)
        await locator.usernameInput.fill(username)
        await locator.emailInput.fill(email)
        await locator.passwordInput.fill(password)
        await locator.cfPasswordInput.fill(cfpassword)
        await locator.createAccountBtn.click()
    }

    async visitSignupPage(page: Page = this.page) {
        const locator = signInLocator(page)

        await page.getByRole('link', { name: 'Sign In' }).click();
        await locator.signupLink.click();
    }

}