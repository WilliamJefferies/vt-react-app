import { createSelector } from 'reselect';

export const getBreakDownName = state => state.breakdown.name
export const getBreakDownArr = state => state.breakdown.data
export const getBreakDownOpts = state => state.breakdown.opts