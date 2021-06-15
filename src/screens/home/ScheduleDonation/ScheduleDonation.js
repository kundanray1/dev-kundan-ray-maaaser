import React, { useState,useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  SafeAreaView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  Dimensions,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Formik } from "formik";
import { ScheduleDonationValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "./../../../constants/theme.js";
import {
  Button,
  Block,
  Text,
  Input,
  ErrorMessage,
} from "./../../../components/Index.js";
import MonthPicker from "./MonthPicker";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const ScheduleDonation = ({ navigation, data, login }) => {
  const [receiverNameFocus, setReceiverNameFocus] = useState();
  const [amountFocus, setAmountFocus] = useState();
  const [month, setMonth] = useState();
  const [monthModalVisible, setMonthModalVisible] = useState(false);
  const [layoutPosition, setLayoutPosition] = useState();
  //set all the required proto for updating and submitting
  const onSubmitLogin = (values) => {
    console.log(values);
    console.log(month);
  };
  // let Marker = React.createRef();

  // console.log(layoutPosition);
  // useEffect(() => {
  //   Marker.measure((x, y, width, height) => {
  //     console.log(
  //       "++++++ measureInWindow " + width + " " + height + " " + x + " " + y
  //     );
  //   });
  // }, []);

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
        <Formik
          initialValues={{
            receiverName: "",
            amount: "",
          }}
          onSubmit={(values) => {
            onSubmitLogin(values);
          }}
          validationSchema={ScheduleDonationValidationSchema}
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
                label="Receiver’s Name"
                focus={receiverNameFocus}
                onChangeText={handleChange("receiverName")}
                onBlur={() => {
                  setFieldTouched("receiverName");
                  setReceiverNameFocus(false);
                }}
                onFocus={() => setReceiverNameFocus(true)}
                value={values.receiverName}
                style={{
                  borderBottomColor: receiverNameFocus
                    ? theme.colors.primary2
                    : touched.receiverName && errors.receiverName
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage
                error={errors.receiverName}
                visible={touched.receiverName}
              />
              {/*<MonthPicker month={month} setMonth={setMonth} setLayoutPosition={setLayoutPosition}/>*/}

              <Input
                label="Amount"
                focus={amountFocus}
                onChangeText={handleChange("amount")}
                onBlur={() => {
                  setFieldTouched("amount");
                  setAmountFocus(false);
                }}
                number
                onFocus={() => setAmountFocus(true)}
                value={values.amount}
                style={{
                  borderBottomColor: amountFocus
                    ? theme.colors.primary2
                    : touched.amount && errors.amount
                    ? theme.colors.red
                    : theme.colors.solidGray,
                }}
              />
              <ErrorMessage error={errors.amount} visible={touched.amount} />
              <Block style={{ flex: 0, paddingVertical: 20 }}>
                {!errors.receiverName && !errors.amount ? (
                  <Button onPress={handleSubmit}>
                    {data.isLoading ? (
                      <ActivityIndicator
                        size="small"
                        color={theme.colors.white}
                      />
                    ) : (
                      <Text button style={{ fontSize: 18 }}>
                        Donate
                      </Text>
                    )}
                  </Button>
                ) : (
                  <Button>
                    <Text button style={{ fontSize: 18 }}>
                      Donate
                    </Text>
                  </Button>
                )}
              </Block>
            </Block>
          )}
        </Formik>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default ScheduleDonation;
