import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Card from "./Card";
import { cardStart,cardUpdateStatusStart,cardDeleteStatusStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.card,
	loginData: (state) => state.login,
	linkNewCardData: (state) => state.linkNewCard,
});
const mapDispatchToProps = (dispatch) => {
	return {
		card: () => dispatch(cardStart()),
		cardUpdateStatusStart: (values) => dispatch(cardUpdateStatusStart(values)),
		cardDeleteStatusStart: (values) => dispatch(cardDeleteStatusStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Card);
