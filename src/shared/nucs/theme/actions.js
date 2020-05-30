import { actionFactory } from '@shared/factories';

const SET_THEME_MODE = 'SET_THEME_MODE'
export const setThemeMode = (payload) => actionFactory(SET_THEME_MODE, payload)
