import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Members from "./Members";
import { membersStart,permissionsAssignStart } from "./actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.members,
	loginData: (state) => state.login,
	
});
const mapDispatchToProps = (dispatch) => {
	return {
		members: (values) => dispatch(membersStart(values)),
		permissionsAssign: (values) => dispatch(permissionsAssignStart(values)),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Members);
