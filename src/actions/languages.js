// @flow
import { CHANGE_LANGUAGE } from './types';

export const changeLanguage = (payload: string) => ({
  type: CHANGE_LANGUAGE,
  payload
});