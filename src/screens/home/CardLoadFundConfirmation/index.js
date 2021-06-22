import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CardLoadFundConfirmation from "./CardLoadFundConfirmation";
import { cardLoadFundConfirmationStart,cardLoadFundConfirmationClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.cardLoadFundConfirmation,
});
const mapDispatchToProps = (dispatch) => {
	return {
		cardLoadFundConfirmationStart: (values) => dispatch(cardLoadFundConfirmationStart(values)),
		cardLoadFundConfirmationClear: () => dispatch(cardLoadFundConfirmationClear()),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CardLoadFundConfirmation);
