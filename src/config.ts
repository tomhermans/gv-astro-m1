import type{ NavItems, BaseHeadAttrs } from './types'
export const SITE_DATA = {
  title: 'My Starter'
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
    blog: {
        path: '/blog',
        title: 'blog'
    },
    
}

export type SiteNavItem =  keyof typeof NAV_ITEMS

export const SITE = {
  title: 'Tom Hermans',
  description: 'A starter for a static site with typescript',
  hue: 0,
  saturation: 50,
  lightness: 50,
}