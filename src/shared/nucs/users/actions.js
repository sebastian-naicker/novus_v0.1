import { actionFactory } from '@shared/factories';

const GET_USERS = 'GET_USERS'
export const getUsers = (payload) => actionFactory(GET_USERS, payload)
