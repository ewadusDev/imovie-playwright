import { test as base } from '@playwright/test'


import BrowsePage from "./pages/browse/BrowsePage";
import SignInPage from "./pages/signin/SigninPage";
import SignUpPage from "./pages/signup/SignUpPage";

type pages = {
    browsePage: BrowsePage
    signInPage: SignInPage
    signUpPage: SignUpPage

}

const testPages = base.extend<pages>({
    browsePage: async ({ page }, use) => {
        await use(new BrowsePage(page))
    },
    signInPage: async ({ page }, use) => {
        await use(new SignInPage(page))
    },
    signUpPage: async ({ page }, use) => {
        await use(new SignUpPage(page))
    },

})

export const test = testPages
export const expect = testPages.expect