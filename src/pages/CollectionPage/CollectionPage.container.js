import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPage from "./CollectionPage";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import { compose } from "redux";
import { selectISCollectionLoading } from "../../redux/shop/shopSelectors";

const mapStateToProps=createStructuredSelector({
    isLoading:(state)=>!selectISCollectionLoading(state)
})

const CollectionPageContainer=compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer