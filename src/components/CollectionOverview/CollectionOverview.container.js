import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectISCollectionFetching } from "../../redux/shop/shopSelectors";
import WithSpinner from "../WithSpinner/WithSpinner";
import CollectionOverview from "./CollectionOverview";
import { compose } from "redux";

const mapStateToProps=createStructuredSelector({
    isLoading:selectISCollectionFetching
})

const CollectionOverviewContainer=compose(
   connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;