import React, { useState, useEffect, useRef } from "react";
import {
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    TextInput,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
    Block,
    Text,
    Button,
    CustomActivityIndicator,
    ErrorMessage,
} from "../../../../components/Index.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { StartACampaignValidationSchema } from "../../../../utility/ValidationSchema.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import CategoryType from "../../../Campaigns/StartACampaign/CategoryType";
import CountryCode from "../../../Campaigns/StartACampaign/CountryCode";
import StartACampaignOneIconComponent from "../../../../assets/icons/startACampaignOneIconComponent";
import AddImageIconComponent from "../../../../assets/icons/addImageIconComponent";
import CommunityType from "./CommuityType";
import BeneficiersList from "../../../Campaigns/StartACampaign/BeneficiersList";
import { Seperator } from "../../../../utility/styledComponents.js";

const WIDTH = Dimensions.get("window").width;

const StartACommunity = ({
    data,
    navigation,
    loginData,

}) => {
    console.log("data", data);

    const [titleFocus, setTitleFocus] = useState();
    const [raisingMoneyType, setRaisingMoneyType] = useState("");
    const [raisingMoneyTypeError, setRaisingMoneyTypeError] = useState(false);
    const [categoryType, setCategoryType] = useState("");
    const [categoryTypeError, setCategoryTypeError] = useState(false);
    const [countryName, setCountryName] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [countryCodeError, setCountryCodeError] = useState(false);
    const [allowSubCampaigns, setAllowSubCampaigns] = useState(true);
    const [targetAmount, setTargetAmount] = useState("");
    const [image, setImage] = useState("");

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            //   imageUpload(result.uri);
            setImage(result.uri);
            //   setImageError(false)
        }
    };
    return (
        <KeyboardAwareScrollView
            style={{ marginVertical: 10 }}
            showsVerticalScrollIndicator={false}
        >
            {false ? (
                <CustomActivityIndicator
                    isLoading={false}
                    label="Requesting..."
                />
            ) : (
                <Block style={{ paddingHorizontal: 16 }}>
                    {/* <Block
            center
            style={{
              borderBottomWidth: 1,
              borderColor: theme.colors.gray2,
              paddingVertical: 10,
            }}
          >
            <StartACampaignOneIconComponent />
          </Block> */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            flex: 0,
                            minWidth: "40%",
                            alignSelf: 'center',
                            margin: 20,
                            borderColor: theme.colors.gray2,
                            padding: image ? 0 : 10,
                            alignItems: "center",
                            borderStyle: "solid",
                            borderWidth: image ? 0 : 1,
                            borderRadius: image ? 0 : 10,
                            paddingVertical: image ? 0 : 50,

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
                                {/* <AddImageIconComponent /> */}
                                <Text
                                    style={{
                                        fontSize: 14,
                                        marginTop: 0,
                                        fontWeight: "700",
                                        color: theme.colors.primary2,
                                    }}
                                >
                                    Browse Image
                                </Text>
                            </>
                        )}
                    </TouchableOpacity>
                    <Seperator />
                    <Formik
                        initialValues={{
                            title: "",
                            desc:"",
                            tags:"",
                            targetAmount: "",
                        }}
                        onSubmit={(values) => {
                            onSubmitStartACampaign(values);
                        }}
                        validationSchema={StartACampaignValidationSchema}
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
                                    label="Community Name"
                                    focus={titleFocus}
                                    onChangeText={handleChange("title")}
                                    onBlur={() => {
                                        setFieldTouched("title");
                                        setTitleFocus(false);
                                    }}
                                    onFocus={() => setTitleFocus(true)}
                                    value={values.title}
                                    style={{
                                        borderBottomColor: titleFocus
                                            ? theme.colors.primary2
                                            : touched.title && errors.title
                                                ? theme.colors.red
                                                : theme.colors.solidGray,
                                    }}
                                />
                                <ErrorMessage error={errors.title} visible={touched.title} />
                                <Seperator />

                                <Input
                                    label="Descriptions"
                                    focus={titleFocus}
                                    onChangeText={handleChange("desc")}
                                    onBlur={() => {
                                        setFieldTouched("desc");
                                         setTitleFocus(false);
                                    }}
                                    onFocus={() => setTitleFocus(false)}
                                    value={values.desc}
                                    style={{
                                        borderBottomColor: titleFocus
                                            ? theme.colors.primary2
                                            : touched.title && errors.title
                                                ? theme.colors.red
                                                : theme.colors.solidGray,
                                    }}
                                />
                                <ErrorMessage error={errors.desc} visible={touched.desc} />
                                <Seperator />

                                <CommunityType
                                    CommunityType={raisingMoneyType}
                                    setCommunityType={setRaisingMoneyType}
                                    setRaisingMoneyCommunityTypeError={setRaisingMoneyTypeError}
                                    disabled={false}
                                />
                                <ErrorMessage
                                    error={"Community type is a required field"}
                                    visible={raisingMoneyTypeError}
                                />



                                <Seperator />

                                <Input
                                    label="Tags" 
                                    focus={titleFocus}
                                    onChangeText={handleChange("tags")}
                                    onBlur={() => {
                                        setFieldTouched("tags");
                                        setTitleFocus(false);
                                    }}
                                    onFocus={() => setTitleFocus(true)}
                                    value={values.tags}
                                    style={{
                                        borderBottomColor: titleFocus
                                            ? theme.colors.primary2
                                            : touched.title && errors.title
                                                ? theme.colors.red
                                                : theme.colors.solidGray,
                                    }}
                                /> 
                                <ErrorMessage error={errors.title} visible={touched.title} />

                                <Seperator />
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{
                                        flex: 0,
                                        alignItems: "center",
                                        borderStyle: "dashed",
                                        borderWidth: image ? 0 : 1,
                                        borderRadius: image ? 0 : 1,
                                        paddingVertical: image ? 0 : 40,
                                        borderColor: image ? null : theme.colors.gray1
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

                                <Seperator />



                                {!errors.title || !errors.targetAmount ? (
                                    <Button
                                        style={{
                                            marginTop: 12,
                                            marginBottom: 12,
                                        }}
                                        onPress={handleSubmit}
                                    >
                                        {false ? (
                                            <>
                                                <CustomActivityIndicator
                                                    label="Requesting..."
                                                    isLoading={false}
                                                />
                                                <Text button style={{ fontSize: 18 }}>
                                                    Proceed
                                                </Text>
                                            </>
                                        ) : (
                                            <Text button style={{ fontSize: 18 }}>
                                                Proceed
                                            </Text>
                                        )}
                                    </Button>
                                ) : (
                                    <Button
                                        style={{
                                            marginTop: 12,
                                            marginBottom: 12,
                                        }}
                                    >
                                        <Text button style={{ fontSize: 18 }}>
                                            Proceed
                                        </Text>
                                    </Button>
                                )}
                            </Block>
                        )}
                    </Formik>
                </Block>
            )}
        </KeyboardAwareScrollView>
    );
};

export default StartACommunity;

const styles = StyleSheet.create({
    amountSection: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E9F9FF",
        paddingHorizontal: 10,
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        fontWeight: "700",
        marginLeft: 10,
        fontSize: 22,
        color: "#0DB952",
        backgroundColor: "#E9F9FF",
    },
    container: {
        flex: 1,
        alignItems: "center",
    },
    modal: {
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 4,
        borderColor: theme.colors.gray,
        backgroundColor: theme.colors.white,
        borderRadius: 3,
        paddingTop: 2,
    },
    option: {
        alignItems: "flex-start",
    },
    customPicker: {
        height: 28,
        flexDirection: "row",
        paddingTop: 6,
        justifyContent: "space-between",
        borderColor: theme.colors.solidGray,
        alignItems: "center",
        borderBottomWidth: 1,
        paddingVertical: 6,
    },
    vwClear: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    textInput: {
        flex: 1,
        fontSize: 16,
    },

    vwSearch: {
        flex: 0.1,
        justifyContent: "center",
    },
    icSearch: {
        height: 20,
        width: 20,
    },
    searchContainer: {
        backgroundColor: theme.colors.white,
        width: "100%",
        height: 35,
        marginBottom: 6,
        flexDirection: "row",
        borderBottomWidth: 1,
        flex: 0,
        borderColor: theme.colors.gray2,
        paddingHorizontal: 10,
        borderRadius: 2,
    },
});
