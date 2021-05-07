import React, { useState, useContext } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import * as theme from "../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
} from "../../components/Index.js";

const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(6).max(50).label("Password"),
  confirmPassword: Yup.string().required().min(6).max(50).oneOf([Yup.ref('password'), null], 'Both passwords must match').label("Confirm Password"),
});

const {height} = Dimensions.get('window');
export default CreateNewPassword = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
 const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

  return (
     <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
       <Block center middle>
            <Block style={{ marginTop: 20 }}>
            <Block center >
              <Image
                source={require("../../assets/icons/logo.png")}
                style={{ height: 100, width: 100 }}
              />
               <Text h3 center style={{ marginTop: 6 }} color={theme.colors.black}>
                   Create new Password              
              </Text>
              <Text center style={{ marginTop: 6, padding:5 }} color={theme.colors.gray}>
                  Your new password must be different from previous used password.</Text>
              </Block>
            </Block>
            <Block flex={2.5} center>
            
              <Block center middle style={{ marginTop: 44 }}>
                <Formik
                  initialValues={{
                    password: "",
                    confirmPassword: "",

                  }}
                  onSubmit={(values) => {
                    setLoading(!loading);
                  }}
                  validationSchema={validationSchema}
                >
                  {({
                    handleChange,
                    touched,
                    setFieldTouched,
                    handleSubmit,
                    values,
                    errors,
                  }) => (
                    <Block>
                       <Input
                        full
                        password
                        label="Password"
                        style={{ marginBottom: 5 }}
                        onChangeText={handleChange("password")}
                        onBlur={() =>{
                         setFieldTouched("password") 
                         setPasswordFocus(false)
                        }}
                        onFocus={()=>{
                          setPasswordFocus(true)
                        }}
                        value={values.password}
                        style={{borderBottomColor:passwordFocus?theme.colors.primary2:(touched.password&&errors.password)?theme.colors.red:theme.colors.solidGray}}
                      />
                      <ErrorMessage
                        error={errors.password}
                        visible={touched.password}
                      />
                      <Input
                        full
                        password
                        label="Confirm Password"
                        style={{ marginBottom: 5 }}
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={() =>{
                         setFieldTouched("confirmPassword") 
                         setConfirmPasswordFocus(false)
                        }}
                        onFocus={()=>setConfirmPasswordFocus(true)}
                        value={values.confirmPassword}
                        style={{borderBottomColor:confirmPasswordFocus?theme.colors.primary2:(touched.confirmPassword&&errors.confirmPassword)?theme.colors.red:theme.colors.solidGray}}
                    />
                      <ErrorMessage
                        error={errors.confirmPassword}
                        visible={touched.confirmPassword}
                      />
                      {
                      !errors.confirmPassword &&
                      !errors.password ?(
                        <Button
                          full
                          style={{
                            marginTop: 12,
                            marginBottom: 12,
                          }}
                          onPress={handleSubmit}
                        >
                          {loading ? (
                            <ActivityIndicator
                              size="small"
                              color={theme.colors.white}
                            />
                          ) : (
                            <Text button style={{fontSize:18}}>Send</Text>
                          )}
                        </Button>
                      ) : (
                        <Button
                          full
                          style={{
                            marginTop: 12,
                            marginBottom: 12,
                            backgroundColor: theme.colors.gray,
                          }}
                        >
                          <Text button style={{fontSize:18}}>Send</Text>
                        </Button>
                      )}
                    </Block>
                  )}
                </Formik>
              </Block>
            </Block>
          </Block>
      </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
