import { actionFactory } from 'factories';

export const RESTORE_APP = 'global/RESTORE_APP';
export const restoreAppState = actionFactory(RESTORE_APP, null);
