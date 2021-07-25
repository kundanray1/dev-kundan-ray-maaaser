import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import LoadFundDetails from "./LoadFundDetails";
import { loadFundDetailsStart,loadFundDetailsClear,generateLoadFundReceiptStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.loadFundDetails,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		loadFundDetailsStart: (values) => dispatch(loadFundDetailsStart(values)),
		loadFundDetailsClear: () => dispatch(loadFundDetailsClear()),
		generateLoadFundReceiptStart: (values) => dispatch(generateLoadFundReceiptStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LoadFundDetails);
