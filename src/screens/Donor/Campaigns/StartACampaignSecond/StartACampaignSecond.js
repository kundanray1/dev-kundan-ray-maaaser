import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  View,
  Image,
  Dimensions,
  TextInput,
  ImageBackground,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
  Button,
  CustomActivityIndicator,
} from "../../../../components/Index.js";
import moment from "moment";
import * as ImagePicker from "expo-image-picker";
import PaymentProto from "./../../../../protos/payment_pb";
import { Formik } from "formik";
import { WithdrawFundValidationSchema } from "./../../../../utility/ValidationSchema.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StartACampaignOneIconComponent from "./../../../../assets/icons/startACampaignOneIconComponent";
import AddImageIconComponent from "./../../../../assets/icons/addImageIconComponent";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const StartACampaignSecond = ({
  data,
  startACampaignStart,
  startACampaignClear,
  navigation,
}) => {
  const [image, setImage] = useState(null);

  //select image function
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      // imageUpload(result.uri);
    }
  };
  const onSubmitStartACampaignSecondLoadFund = () => {};

  useEffect(() => {
    if (data.startACampaign !== null) {
      if (data.startACampaign.success) {
        startACampaignClear();
      }
    }
  }, [data.startACampaign]);

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={{ paddingHorizontal: 16 }}>
        <Block
          center
          style={{
            borderBottomWidth: 1,
            borderColor: theme.colors.gray2,
            paddingVertical: 10,
          }}
        >
          <StartACampaignOneIconComponent />
        </Block>
        <Text
          center
          style={{
            fontSize: 20,
            paddingVertical: 20,
            fontWeight: "700",
            color: "#5F6062",
          }}
        >
          Upload a cover photo or video
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flex: 0,
            alignItems: "center",
            borderStyle: "dashed",
            borderWidth: image ? 0 : 1,
            borderRadius: image ? 0 : 1,
            paddingVertical: image ? 0 : 40,
          }}
          onPress={pickImage}
        >
          {image ? (
            <ImageBackground
              style={{
                height: HEIGHT / 3,
                width: "100%",
                justifyContent: "flex-end",
              }}
              source={{ uri: image }}
            >
              <Block
                style={{
                  flex: 0,
                  backgroundColor: "rgba(52, 52, 52, 0.6)",
                  paddingVertical: 4,
                }}
              >
                <Text
                  center
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  Change Picture
                </Text>
              </Block>
            </ImageBackground>
          ) : (
            <>
              <AddImageIconComponent />
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 10,
                  fontWeight: "700",
                  color: "#5F6062",
                }}
              >
                Click to upload
              </Text>
            </>
          )}
        </TouchableOpacity>
        <Block style={{ paddingVertical: 30,borderBottomWidth:1,borderColor:theme.colors.gray2 }}>
          {image == "" ? (
            <Button disabled={true}>
              <Text button style={{ fontSize: 18 }}>
                Proceed
              </Text>
            </Button>
          ) : (
            <Button
              
              onPress={() => navigation.navigate("Start a campaign third")}
            >
              <Text button style={{ fontSize: 18 }}>
                Proceed
              </Text>
            </Button>
          )}
        </Block>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{paddingVertical:24}}
          onPress={() => navigation.navigate("Start a campaign")}
        >
          <Text
          center
            color={theme.colors.primary2}
            style={{ fontSize: 16, fontWeight: "700" }}
          >
            Go Back
          </Text>
        </TouchableOpacity>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default StartACampaignSecond;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modal: {
    borderRadius: 10,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    paddingVertical: 30,
  },
  input: {
    fontSize: 20,
    fontWeight: "700",
    backgroundColor: "#E9F9FF",
    color: "#0DB952",
    paddingHorizontal: 4,
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#E9F9FF",
  },
});
