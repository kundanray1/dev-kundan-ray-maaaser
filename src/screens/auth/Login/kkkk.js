const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (userData, props) => {
            if (
                Helpers.checkValidityEmail(userData.email) ||
                Helpers.checkValidityPhone(userData.email)
            ) {
                if (Helpers.checkValidityPassword(userData.password)) {
                    dispatch(loginRequestMade(true));

                    LoginAPI.onLogin(userData, (response, error) => {
                        if (response) {
                            console.log("ressss", response);

                            dispatch(loginRequestMade(false));

                            LocalDb.setSession(response, (err) => {
                                if (err === false) {
                                    LoginAPI.resetToken();

                                    if (
                                        response &&
                                        response.loginResponse &&
                                        response.loginResponse.loginUser &&
                                        response.loginResponse.loginUser.user
                                    ) {
                                        if (
                                            response.loginResponse.loginUser
                                                .user.isFirstLogin &&
                                            response.loginResponse.loginUser
                                                .user.isFirstLogin === true
                                        ) {
                                            props.history.push(
                                                "/reset/password"
                                            );
                                        } else {
                                            props.history.push("/dashboard");
                                        }
                                    } else if (
                                        response &&
                                        response.loginResponse &&
                                        response.loginResponse.loginUser &&
                                        response.loginResponse.loginUser
                                            .corporate
                                    ) {
                                        if (
                                            response.loginResponse.loginUser
                                                .corporate.isFirstLogin &&
                                            response.loginResponse.loginUser
                                                .corporate.isFirstLogin === true
                                        ) {
                                            console.log("hereeee");

                                            props.history.push(
                                                "/reset/password"
                                            );
                                        } else {
                                            console.log("out");

                                            props.history.push("/dashboard");
                                        }
                                    } else if (
                                        response &&
                                        response.loginResponse &&
                                        response.loginResponse.loginUser &&
                                        response.loginResponse.loginUser.client
                                    ) {
                                        if (
                                            response.loginResponse.loginUser
                                                .client.isFirstLogin &&
                                            response.loginResponse.loginUser
                                                .client.isFirstLogin === true
                                        ) {
                                            console.log("hereeee");

                                            props.history.push(
                                                "/reset/password"
                                            );
                                        } else {
                                            console.log("out");

                                            props.history.push("/dashboard");
                                        }
                                    } else if (
                                        response &&
                                        response.loginResponse &&
                                        response.loginResponse.loginUser &&
                                        response.loginResponse.loginUser.contact
                                    ) {
                                        if (
                                            response.loginResponse.loginUser
                                                .contact.isFirstLogin &&
                                            response.loginResponse.loginUser
                                                .contact.isFirstLogin === true
                                        ) {
                                            console.log("hereeee");

                                            props.history.push(
                                                "/reset/password"
                                            );
                                        } else {
                                            console.log("out");

                                            props.history.push("/dashboard");
                                        }
                                    } else if (
                                        response &&
                                        response.loginResponse &&
                                        response.loginResponse.loginUser &&
                                        response.loginResponse.loginUser.company
                                    ) {
                                        if (
                                            response.loginResponse.loginUser
                                                .company.isFirstLogin &&
                                            response.loginResponse.loginUser
                                                .company.isFirstLogin === true
                                        ) {
                                            console.log("hereeee");

                                            props.history.push(
                                                "/reset/password"
                                            );
                                        } else {
                                            console.log("out");

                                            props.history.push("/dashboard");
                                        }
                                    }

                                    dispatch(
                                        loginSuccess(response.loginResponse)
                                    );

                                    console.log("res", response.loginResponse);
                                } else {
                                    dispatch(loginFailure(error, "rest"));
                                }
                            });
                        } else {
                            if (error.msg) {
                                dispatch(loginFailure(error.msg, "rest"));
                            } else {
                                dispatch(loginFailure(error, "rest"));
                            }
                        }
                    });
                } else {
                    dispatch(
                        loginFailure("Invalid password format.", "password")
                    );
                }
            } else {
                dispatch(
                    loginFailure("Invalid email address format.", "email")
                );
            }
        },

        handleChange: (id, value) => dispatch(handleChangeLogin(id, value)),

        handleSnackBarClose: () => dispatch(closeSnackBar(true)),
    };
};
