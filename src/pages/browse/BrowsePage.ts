import { expect, Page } from "@playwright/test";
import { browseLocator } from "./browse.locator"

export default class BrowsePage {
    constructor(public page: Page) { }

    async isBrowsePage(page: Page = this.page) {
        const locator = browseLocator(page)

        await expect(locator.topNavbar.homeBtn).toBeVisible()
        await expect(locator.topNavbar.tvshowBtn).toBeVisible()
        await expect(locator.topNavbar.moviesBtn).toBeVisible()
        await expect(locator.topNavbar.newPopBtn).toBeVisible()
        await expect(locator.topNavbar.myListBtn).toBeVisible()
        await expect(locator.matchedToYou.title).toBeVisible()
        await expect(locator.top10Movie.title).toBeVisible()
    }

    async showMovieInfoHeader(page: Page = this.page) {
        const locator = browseLocator(page)

        await locator.header.moreInfo.click()
        await expect(locator.header.previewModal.image).toBeVisible()
    }
    async watchMoviePreview(page: Page = this.page) {
        const locator = browseLocator(page)

        await locator.header.previewModal.playBtn.click()
        await expect(locator.videoPlayer.player).toBeVisible()
    }

    async watchMovieMatched(page: Page = this.page) {
        const locator = browseLocator(page)

        await locator.matchedToYou.matchedSection.firstMovie.hover()
        await page.waitForTimeout(1000)
        await locator.header.previewModal.image.click()
        await locator.header.previewModal.playBtn.click()
        await expect(locator.videoPlayer.player).toBeVisible()
    }

    async watchMovieTop10(page: Page = this.page) {
        const locator = browseLocator(page)

        await locator.top10Movie.top10MovieSection.firstMovie.hover()
        await page.waitForTimeout(1000)
        await locator.header.previewModal.image.last().click()
        await locator.header.previewModal.playBtn.click()
        await expect(locator.videoPlayer.player).toBeVisible()
    }

}