import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CardLoadFund from "./CardLoadFund";
import { cardLoadFundStart,cardLoadFundClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.cardLoadFund,
});
const mapDispatchToProps = (dispatch) => {
	return {
		cardLoadFundStart: (values) => dispatch(cardLoadFundStart(values)),
		cardLoadFundClear: () => dispatch(cardLoadFundClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CardLoadFund);
