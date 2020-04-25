import { actionFactory } from '@shared/factories';

const SET_USERS = 'SET_USERS'
export const getUsers = (payload) => actionFactory(SET_USERS, payload)
