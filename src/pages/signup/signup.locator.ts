import { Page } from "@playwright/test";


export const signUpLocator = (page: Page) => ({
    headLinePage: page.getByRole('heading', { name: 'Sign Up' }),
    fullnameInput: page.getByRole('textbox', { name: 'Fullname' }),
    usernameInput: page.getByRole('textbox', { name: 'username' }),
    emailInput: page.getByRole('textbox', { name: 'Email' }),
    passwordInput: page.getByRole('textbox', { name: 'Password', exact: true }),
    cfPasswordInput: page.getByRole('textbox', { name: 'Confirm Password' }),
    signinLink: page.getByRole('link', { name: 'Sign in now.' }),
    createAccountBtn: page.getByRole('button', { name: 'Create Account' })

})