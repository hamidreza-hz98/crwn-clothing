import { createSelector } from "reselect";


const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectionsForOverview=createSelector(
  [selectShopCollections],
  (collections)=> collections ? Object.keys(collections).map(key=>collections[key]):[]
)

export const selectCollection =(collectionUrlParam)=>createSelector(
  [selectShopCollections],
  (collections)=> collections? collections[collectionUrlParam]:null
)

export const selectISCollectionFetching=createSelector(
  [selectShop],
  shop=>shop.isFetching
)

export const selectISCollectionLoading=createSelector(
  [selectShop],
  shop=> !!shop.collections
)