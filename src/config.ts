import type{ NavItems, BaseHeadAttrs } from './types'
export const SITE_DATA = {
  title: 'Tom Hermans Starter'
}
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
  title: 'Tom Hermans Starter',
  description: 'A starter for a static site with typescript',
  hue: 0,
  saturation: 50,
  lightness: 50,
}