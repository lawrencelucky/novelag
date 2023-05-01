import icons from '@/icons';

const APP_MENU = [
    {
        icon: icons.dashboardIcon(),
        link: '/',
        name: 'Dashboard',
    },
    {
        icon: icons.userIcon(),
        link: '/profile',
        name: 'Profile',
    },
    {
        icon: icons.activitiesIcon(),
        link: '/activities',
        name: 'Activities',
    },
    {
        icon: icons.walletIcon(),
        link: '/wallet',
        name: 'Wallet',
    },
];

const COMING_SOON_APP_MENU = [
    {
        name: 'Loans',
    },
    {
        name: 'Training',
    },
    {
        name: 'Investment',
    },
];

const USER_ACTIONS = [
    {
        icon: icons.settingsIcon(),
        link: '/settings',
        name: 'Settings',
    },
    {
        icon: icons.notificationIcon(),
        link: '/notifications',
        name: 'Notifications',
    },
];

export const constants = {
    APP_MENU,
    COMING_SOON_APP_MENU,
    USER_ACTIONS,
};
