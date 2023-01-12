import { 
    NAV_ITEM_TYPE_TITLE, 
    NAV_ITEM_TYPE_COLLAPSE, 
    NAV_ITEM_TYPE_ITEM 
} from 'constants/navigation.constant'

const navigationConfig = [
   /*  {
        key: 'home',
		path: '/home',
		title: 'Home',
		translateKey: 'nav.home',
		icon: 'home',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    }, */
	{
        key: 'listMenu',
		path: '',
		title: 'List',
		translateKey: 'nav.listMenu.listMenu',
		icon: 'collapseMenu',
		type: NAV_ITEM_TYPE_COLLAPSE,
		authority: [],
        subMenu: [
           
            {
                key: 'listMenu.view',
                path: '/list',
                title: 'Lists',
                translateKey: 'nav.listMenu.view',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
			{
                key: 'listMenu.add',
                path: '/list/add',
                title: 'Add List',
                translateKey: 'nav.listMenu.add',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
        ]
    },
	{
        key: 'reports',
		path: '/reports',
		title: 'reports',
		translateKey: 'nav.reports',
		icon: 'reports',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
	{
        key: 'search',
		path: '/search',
		title: 'search',
		translateKey: 'nav.search',
		icon: 'search',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
	
	
	{
        key: 'admin',
		path: '/admin',
		title: 'Admin',
		translateKey: 'nav.admin',
		icon: 'admin',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
	{
        key: 'users',
		path: '/users',
		title: 'users',
		translateKey: 'nav.users',
		icon: 'users',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
	
	{
        key: 'sale',
		path: '/sale',
		title: 'Sale',
		translateKey: 'nav.sale',
		icon: 'sale',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
	{
        key: 'collection',
		path: '/collection',
		title: 'collection',
		translateKey: 'nav.collection',
		icon: 'collection',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
	
    /** Example purpose only, please remove */
    /* {
        key: 'singleMenuItem',
		path: '/single-menu-view',
		title: 'Collection',
		translateKey: 'nav.singleMenuItem',
		icon: 'singleMenu',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
    {
        key: 'listMenu',
		path: '',
		title: 'List',
		translateKey: 'nav.listMenu.listMenu',
		icon: 'listMenu',
		type: NAV_ITEM_TYPE_COLLAPSE,
		authority: [],
        subMenu: [
            {
                key: 'listMenu.item1',
                path: '/collapse-menu-item-view-1',
                title: 'Add List',
                translateKey: 'nav.listMenu.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'listMenu.item2',
                path: '/collapse-menu-item-view-2',
                title: 'Lists',
                translateKey: 'nav.listMenu.item2',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
        ]
    },
    {
		key: 'groupMenu',
		path: '',
		title: 'Group Menu',
		translateKey: 'nav.groupMenu.groupMenu',
		icon: '',
		type: NAV_ITEM_TYPE_TITLE,
		authority: [],
		subMenu: [
            {
                key: 'groupMenu.single',
                path: '/group-single-menu-item-view',
                title: 'Group single menu item',
                translateKey: 'nav.groupMenu.single',
                icon: 'groupSingleMenu',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
			{
				key: 'groupMenu.collapse',
				path: '',
				title: 'Group collapse menu',
				translateKey: 'nav.groupMenu.collapse.collapse',
				icon: 'grouplistMenu',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [],
				subMenu: [
					{
						key: 'groupMenu.collapse.item1',
						path: '/group-collapse-menu-item-view-1',
						title: 'Menu item 1',
						translateKey: 'nav.groupMenu.collapse.item1',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [],
						subMenu: []
					},
                    {
						key: 'groupMenu.collapse.item2',
						path: '/group-collapse-menu-item-view-2',
						title: 'Menu item 2',
						translateKey: 'nav.groupMenu.collapse.item2',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [],
						subMenu: []
					},
                ]
            }
        ]
    } */
]

export default navigationConfig