import { test } from '../src/fixture-config'
import { username } from '../src/datatest/user'


test.describe("TS001: Create User Account", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/")
    })

    test("TC001: Signup Page validate", async ({ signUpPage }) => {
        await signUpPage.visitSignupPage()
        await signUpPage.isSignUpPage()
    })

    test("TC002: Create an account", async ({ signUpPage, signInPage }) => {
        await signUpPage.visitSignupPage()
        await signUpPage.createAccount(username)
        await signInPage.isLoginPage()
    })

})

