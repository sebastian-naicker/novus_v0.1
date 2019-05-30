import { actionFactory } from 'factories';

export const RESTORE_APP = 'RESTORE_APP';
export const restoreAppState = actionFactory(RESTORE_APP, null);

export const SET_PAGE_TITLE = 'SET_PAGE_TITLE';
export const setPageTitle = title => actionFactory(SET_PAGE_TITLE, { title });
