import { Page } from "@playwright/test";

export const browseLocator = (page: Page) => ({
    topNavbar: {
        homeBtn: page.getByRole('link', { name: 'Home' }),
        tvshowBtn: page.getByRole('link', { name: 'TV Shows' }),
        moviesBtn: page.getByRole('link', { name: 'Movies' }),
        newPopBtn: page.getByRole('link', { name: 'New & Popular' }),
        myListBtn: page.getByRole('link', { name: 'My List' })
    },
    header: {
        moreInfo: page.getByRole('button', { name: 'More Info' }),
        previewModal: {
            image: page.getByRole('img', { name: 'movie-preview' }),
            playBtn: page.locator('header div a').last()
        }
    },
    matchedToYou: {
        title: page.getByRole('heading', { name: 'Matched to You' }),
        matchedSection: {
            firstMovie: page.locator("main > div:nth-child(2) section:nth-child(1)> div> div:nth-child(1)> div:nth-child(1)")
        }
    },
    top10Movie: {
        title: page.getByRole('heading', { name: 'Top 10 movies in Thailand' }),
        top10MovieSection: {
            firstMovie: page.locator("main > div:nth-child(2) section:nth-child(2)> div> div:nth-child(1)> div:nth-child(1)")
        }
    },
    videoPlayer: {
        player: page.locator('video'),
    }

})