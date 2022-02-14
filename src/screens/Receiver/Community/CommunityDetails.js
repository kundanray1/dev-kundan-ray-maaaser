import React, { useState, useEffect, useRef } from "react";
import {
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    TextInput,
    View,
    Image,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
    Block,
    Text,
    Button,
    CustomActivityIndicator,
} from "../../../components/Index.js";
import Wallpaper from "../../../assets/images/Wallpaper.png";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import { CardText, CardTitle, Col, ColCard, Container, RowNoPadding, Seperator } from "../../../utility/styledComponents.js";
import CommunityTab from "./CommunityTab.js";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const CommunityDetails = ({
    data,
    navigation,
    loginData,

}) => {

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
            style={{ marginVertical: 0 }}
            showsVerticalScrollIndicator={false}
        >
            {false ? (
                <CustomActivityIndicator
                    isLoading={false}
                    label="Requesting..."
                />
            ) : (
                <>
                    <View style={{ width: WIDTH, flex: 1 }}>
                        <Image source={Wallpaper} style={{ flex: 1, width: WIDTH, resizeMode: 'cover' }} />
                    </View>
                    <Container>
                        <RowNoPadding style={{ marginBottom: 10 }}>
                            <Image source={Wallpaper} style={{ width: 70, height: 70, position: 'absolute', bottom: 0 ,borderRadius:5}} />
                            <Col style={{ left: 80 }}>
                                <CardTitle>
                                    Black Lives Matter
                                </CardTitle>
                                <CardText>
                                    Black lives communitiy
                                </CardText>
                            </Col>
                            
                        </RowNoPadding>
                       
                                <CardText>
                                Jasmine, Bibek, Sujata & 11K others are in this group 
                                </CardText>
                           
                    </Container>


                    <Container>
                        <Button
                            style={{
                                marginTop: 12,
                                marginBottom: 12,
                            }}
                        >
                            <Text button style={{ fontSize: 18 }}>
                                Join Group
                            </Text>
                        </Button>
                    </Container>
                    <Container>
<CommunityTab/>
                    </Container>
                    <Container>
                        
                    </Container>

                </>
            )}
        </KeyboardAwareScrollView>
    );
};

export default CommunityDetails;

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
