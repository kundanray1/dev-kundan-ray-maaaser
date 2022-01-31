import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import AddMember from "./AddMember";
import { addMemberStart,addMemberClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.addMember,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		addMember: (values) => dispatch(addMemberStart(values)),
		addMemberClear: () => dispatch(addMemberClear()),

	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(AddMember);
