import { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import AddBeneficiary from "./AddBeneficiary";
import { addBeneficiaryStart,addBeneficiaryClear } from "./actions";
import { receiversStart } from "./../../Donor/Home/Receivers/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.addBeneficiary,
	loginData: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
		addBeneficiary: (values) => dispatch(addBeneficiaryStart(values)),
		addBeneficiaryClear: () => dispatch(addBeneficiaryClear()),
		receiversStart: () => dispatch(receiversStart()),
	}
}



const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(AddBeneficiary);
