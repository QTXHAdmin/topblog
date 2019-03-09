import * as constants from './constants';

export const handleover = () => ({
  type: constants.LIST_BLOCK,
  value:true
});
export const handleleave = () => ({
  type: constants.LIST_NONE,
  value:false
});
