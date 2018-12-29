import * as types from './types'

export const selectLibrary = libraryId => ({
  type: types.SELECT_LIBRARY,
  payload: libraryId
})
