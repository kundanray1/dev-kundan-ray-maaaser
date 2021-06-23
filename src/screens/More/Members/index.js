import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Members from "./Members";
import { membersStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.members,
});
const mapDispatchToProps = (dispatch) => {
	return {
		members: (values) => dispatch(membersStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Members);
