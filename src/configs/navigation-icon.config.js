import React from 'react'
import {
    HiOutlineColorSwatch, 
	HiOutlineDesktopComputer,
    HiOutlineTemplate,
    HiOutlineViewGridAdd,
    HiOutlineHome,
    HiOutlineChartSquareBar,
	HiOutlineUserGroup,
	HiOutlineTrendingUp,
	HiOutlineUserCircle,
	HiOutlineBookOpen,
	HiOutlineCurrencyDollar,
    HiOutlineShieldCheck, 
	HiOutlineChatAlt,
	HiOutlinePaperAirplane,
	HiOutlineChartPie,
	HiOutlineUserAdd,
    HiOutlineLockClosed,
    HiOutlineDocumentDuplicate,
    HiOutlineSearch,
    HiOutlineShoppingBag
} from 'react-icons/hi'

const navigationIcon = {
    home: <HiOutlineHome />,
    users: <HiOutlineUserGroup />,
    reports: <HiOutlineChartPie />,
    sale: <HiOutlineShoppingBag />,
    collection: <HiOutlineBookOpen />,
    admin: <HiOutlineShieldCheck />,
    search: <HiOutlineSearch />,
    singleMenu: <HiOutlineViewGridAdd />,
    collapseMenu: <HiOutlineTemplate />,
    groupSingleMenu: <HiOutlineDesktopComputer />,
    groupCollapseMenu: <HiOutlineColorSwatch />
}

export default navigationIcon