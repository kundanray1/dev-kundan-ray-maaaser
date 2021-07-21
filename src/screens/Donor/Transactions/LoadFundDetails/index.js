import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import LoadFundDetails from "./LoadFundDetails";
import { loadFundDetailsStart,loadFundDetailsClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.loadFundDetails,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		loadFundDetailsStart: (values) => dispatch(loadFundDetailsStart(values)),
		loadFundDetailsClear: () => dispatch(loadFundDetailsClear()),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LoadFundDetails);
