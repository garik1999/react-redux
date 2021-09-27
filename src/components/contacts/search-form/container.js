import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import { updateFormState, deleteState } from "../../../store/contactState/actions";

const mapStateToProps = (state) => {
	return {
		fullName: state.contactState.fullName,
		gender: state.contactState.gender,
		nat: state.contactState.nat,
		creator: state.contactState.creator,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchPage: (fullName, gender, nat, creator) =>
			dispatch(updateFormState(fullName, gender, nat, creator)),
		dispatchDeletePage: () => dispatch(deleteState()),
	};
};

const SearchForm = compose(connect(mapStateToProps, mapDispatchToProps))(View);

export { SearchForm };
