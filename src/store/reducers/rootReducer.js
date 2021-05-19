import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { createNewPasswordReducer } from "./../../screens/auth/CreateNewPassword/reducer";
import { forgotPasswordReducer } from "./../../screens/auth/ForgotPassword/reducer";
import { loginReducer } from "./../../screens/auth/Login/reducer";
import { signUpReducer } from "./../../screens/auth/SignUp/reducer";
import { verificationReducer } from "./../../screens/auth/Verification/reducer";
import { welcomeReducer } from "./../../screens/auth/Welcome/reducer";

// add all the reducer, abd lets use this format of combineReducers so you can add more later if you need to.
const rootReducer = combineReducers({
	createNewPassword: createNewPasswordReducer,
	forgotPassword: forgotPasswordReducer,
	verification: verificationReducer,
	welcome: welcomeReducer,
	login: loginReducer,
	signUp: signUpReducer,
	posts: postsReducer,
});

export default rootReducer;
