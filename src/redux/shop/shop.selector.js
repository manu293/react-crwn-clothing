// imports
import { createSelector } from 'reselect';

// local imports

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections);

export const selectCollectionsForPreview = createSelector([selectCollections], collections =>
  Object.keys(collections).map(key => collections[key])
);

export const selectCollection = connectionURLParams =>
  createSelector([selectCollections], collections => collections[connectionURLParams]);
