import { test } from '../src/fixture-config'
import { username } from '../src/datatest/user'

test.describe("TS002: Login User Account", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/signin")
    })

    test("TC001: Sign in to homepage", async ({ signInPage, browsePage }) => {
        await signInPage.isLoginPage()
        await signInPage.login(username.email, username.password)
        await browsePage.isBrowsePage()
    })

})

test.describe("TS003: Watch Video", () => {
    test.beforeEach(async ({ page, signInPage }) => {
        await page.goto("/signin")
        await signInPage.login(username.email, username.password)
    })
    test("TC001: Watch on header", async ({ browsePage }) => {
        await browsePage.showMovieInfoHeader()
        await browsePage.watchMoviePreview()
    })

    test("TC002: Watch on Matched to you", async ({ browsePage }) => {
        await browsePage.watchMovieMatched()
    })

    test("TC003: Watch on Top 10 movies in Thailand Today", async ({ browsePage }) => {
        await browsePage.watchMovieTop10()
    })
})