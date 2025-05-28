import { Page } from "@playwright/test";

export const signInLocator = (page: Page) => ({
    headlinePage: page.getByRole('heading', { name: 'Sign In' }),
    emailInput: page.getByRole('textbox', { name: 'Email or username' }),
    passwordInput: page.getByRole('textbox', { name: 'Password' }),
    loginBtn: page.getByRole('button', { name: 'Sign In' }),
    signupLink: page.getByRole('link', { name: 'Sign up now.' })
})