import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../CollectionPreview/CollectionPreview";
import {selectShopCollectionsForOverview } from "../../redux/shop/shopSelectors";

import "./CollectionOverview.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForOverview,
});

export default connect(mapStateToProps)(CollectionOverview);
