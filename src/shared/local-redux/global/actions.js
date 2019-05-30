import { actionFactory } from 'factories';

export const RESET_GLOBAL = 'RESET_GLOBAL';
export const restoreAppState = () => actionFactory(RESET_GLOBAL, null);

export const SET_PAGE_TITLE = 'SET_PAGE_TITLE';
export const setPageTitle = title => actionFactory(SET_PAGE_TITLE, { title });
