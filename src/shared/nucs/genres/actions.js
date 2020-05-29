import { actionFactory } from '@shared/factories';

const GET_GENRES = 'GET_GENRES'
export const getGenres = (payload) => actionFactory(GET_GENRES, payload)

const GET_GENRES_ERROR = 'GET_GENRES_ERROR'
export const getGenresError = (payload) => actionFactory(GET_GENRES_ERROR, payload)
