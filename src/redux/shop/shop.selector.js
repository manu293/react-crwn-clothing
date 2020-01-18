// imports
import { createSelector } from 'reselect';

// local imports

const selectShop = state => state.shop;

const selectCollections = createSelector([selectShop], shop => shop.collections);

export default selectCollections;
