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
  emailOrPhone: Yup.string().required().label("Email address / Phone Number"),
});

const {height} = Dimensions.get('window');
export default ForgotPassword = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [emailOrPhoneFocus, setEmailOrPhoneFocus] = useState(false);

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
                    Forgot Password?                    
              </Text>
              <Text center style={{ marginTop: 6, padding:5 }} color={theme.colors.gray}>
                   Enter your email address or phone number and we’ll send you instructions on how to change your password.                
              </Text>
              </Block>
            </Block>
            <Block flex={2.5} center>
            
              <Block center middle style={{ marginTop: 44 }}>
                <Formik
                  initialValues={{
                    emailOrPhone: "",
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
                        label="Email address / Phone Number"
                        style={{ marginBottom: 5 }}
                        onChangeText={handleChange("emailOrPhone")}
                        onBlur={() =>{
                         setFieldTouched("emailOrPhone") 
                         setEmailOrPhoneFocus(false)
                        }}
                        onFocus={()=>setEmailOrPhoneFocus(true)}
                        value={values.emailOrPhone}
                        style={{borderBottomColor:emailOrPhoneFocus?theme.colors.primary2:(touched.emailOrPhone && errors.emailOrPhone)?theme.colors.red:theme.colors.solidGray}}
                      />
                      <ErrorMessage
                        error={errors.emailOrPhone}
                        visible={touched.emailOrPhone}
                      />
                     
                      {
                      !errors.emailOrPhone ? (
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
