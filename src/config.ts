import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    about: {
        path: '/about',
        title: 'about'
    },
    index2: {
        path: '/index2',
        title: 'index2'
    },
    index3: {
        path: '/index3',
        title: 'index3'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    podcast: {
        path: '/podcast',
        title: 'podcast'
    }
}

export type SiteNavItem =  keyof typeof NAV_ITEMS

export const SITE = {

}