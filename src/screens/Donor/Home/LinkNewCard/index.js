import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import LinkNewCard from "./LinkNewCard";
import { linkNewCardStart,linkNewCardClear,updateLinkNewCardStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.linkNewCard,
	loginData: (state) => state.login,

});
const mapDispatchToProps = (dispatch) => {
	return {
		linkNewCard: (values) => dispatch(linkNewCardStart(values)),
		linkNewCardClear: () => dispatch(linkNewCardClear()),
		updateLinkNewCard: (values) => dispatch(updateLinkNewCardStart(values)),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LinkNewCard);
