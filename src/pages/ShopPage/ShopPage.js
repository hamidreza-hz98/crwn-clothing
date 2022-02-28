import React , { useEffect } from "react";
import "./ShopPage.scss";
import { Route } from "react-router-dom";
import { fetchCollectionsStart } from "../../redux/shop/shopActions";
import { connect } from "react-redux";
import CollectionOverviewContainer from "../../components/CollectionOverview/CollectionOverview.container";
import CollectionPageContainer from "../CollectionPage/CollectionPage.container";

const ShopPage =({ fetchCollectionsStart,match })=> {
  
useEffect(()=>{
  fetchCollectionsStart()
},[fetchCollectionsStart])

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
