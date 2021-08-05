import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Members from "./Members";
import { membersStart,permissionsAssignStart,permissionsAssignClear } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.members,
	loginData: (state) => state.login,
	addMemberData: (state) => state.addMember,
});
const mapDispatchToProps = (dispatch) => {
	return {
		members: (values) => dispatch(membersStart(values)),
		permissionsAssign: (values) => dispatch(permissionsAssignStart(values)),
		permissionsAssignClear: () => dispatch(permissionsAssignClear()),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Members);
