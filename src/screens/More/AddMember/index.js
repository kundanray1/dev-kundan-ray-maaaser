import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import AddMember from "./AddMember";
import { addMemberStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.addMember,
});
const mapDispatchToProps = (dispatch) => {
	return {
		addMember: (values) => dispatch(addMemberStart(values)),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(AddMember);
