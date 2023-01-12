import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [
    ...authRoute
]

export const protectedRoutes = [
    /* {
        key: 'home',
        path: '/home',
        component: React.lazy(() => import('views/Home')),
        authority: [],
    }, */
    {
        key: 'list',
        path: '/list',
        component: React.lazy(() => import('views/List/Index')),
        authority: [],
    },
    {
        key: 'list.add',
        path: '/list/add',
        component: React.lazy(() => import('views/List/AddList')),
        authority: [],
    },

    {
        key: 'admin',
        path: '/admin',
        component: React.lazy(() => import('views/Admin/Index')),
        authority: [],
    },
    {
        key: 'reports',
        path: '/reports',
        component: React.lazy(() => import('views/Reports/Index')),
        authority: [],
    },
    {
        key: 'sale',
        path: '/sale',
        component: React.lazy(() => import('views/Sale/Index')),
        authority: [],
    },
    {
        key: 'users',
        path: '/users',
        component: React.lazy(() => import('views/Users/Index')),
        authority: [],
    },
    {
        key: 'collection',
        path: '/collection',
        component: React.lazy(() => import('views/Collection/Index')),
        authority: [],
    },
    {
        key: 'search',
        path: '/search',
        component: React.lazy(() => import('views/Search/Index')),
        authority: [],
    },
    /** Example purpose only, please remove */
    {
        key: 'singleMenuItem',
        path: '/single-menu-view',
        component: React.lazy(() => import('views/demo/SingleMenuView')),
        authority: [],
    },
    {
        key: 'collapseMenu.item1',
        path: '/collapse-menu-item-view-1',
        component: React.lazy(() => import('views/demo/CollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'collapseMenu.item2',
        path: '/collapse-menu-item-view-2',
        component: React.lazy(() => import('views/demo/CollapseMenuItemView2')),
        authority: [],
    },
    {
        key: 'groupMenu.single',
        path: '/group-single-menu-item-view',
        component: React.lazy(() => import('views/demo/GroupSingleMenuItemView')),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: React.lazy(() => import('views/demo/GroupCollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: React.lazy(() => import('views/demo/GroupCollapseMenuItemView2')),
        authority: [],
    },
]