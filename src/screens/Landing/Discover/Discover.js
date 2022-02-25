import React, { useState, useEffect } from "react";
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    RefreshControl,
    Dimensions,
    ImageBackground,
    View,
    Image
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
    Block,
    Text,
    Button,
} from "./../../../components/Index";
import LikeComponent from "./../../../assets/icons/LikeComponent";
import CommentComponent from "./../../../assets/icons/CommentComponent";
import ShareComponent from "./../../../assets/icons/ShareComponent";
import Ellipse from "../../../assets/images/Ellipse.png";

import NeedHelpFirstCard from "../../../components/NeedHelpFirstCard.js";
import { CardText, CardTitle, ColCard, Container, RowCard, RowNoPadding, SectionSeperator, Seperator } from "./../../../utility/styledComponents.js";
import { ScrollView } from "react-native-gesture-handler";


const HEIGHT = Dimensions.get("window").height
const Discover = ({ navigation, header, body, floating }) => {


    return (
        <SafeAreaView style={{ flex: 1 }}>
            {false ? (
                <ActivityIndicator size="large" color={theme.colors.primary2} style={{ marginTop: 30 }} />
            ) : (
                <View style={{ flexDirection: 'column', flex: 1, marginTop: HEIGHT / 20, justifyContent: 'flex-start' }}>

                    <View style={{ flex: 0.3, backgroundColor: theme.colors.disabledBackground, justifyContent: 'center' }}>
                        <Text bold center style={{ lineHeight: 30, fontSize: 20 }}>
                            Browse Campaigns
                        </Text>
                        <Text h4 center color={theme.colors.gray}>
                            Make a difference by making a donation.
                        </Text>
                        <Seperator />
                        <View style={{ width: "50%", alignSelf: 'center' }}>
                            <Button onPress={() => navigation.navigate('Welcome')}>
                                <Text button style={{ fontSize: 18 }}>
                                    Register
                                </Text>
                            </Button>
                        </View>
                    </View>


                    <ScrollView style={{flex:1}}>
                        <View stye={{ flexDirection: 'column' }}>
                            <SectionSeperator />
                            <Text h4 weight="600"  size={18} color={theme.colors.gray} center>
                                Campaigns
                            </Text>
                            <Seperator />

                        </View>
                   
                        <Block style={{margin:30,elevation:2,borderRadius:2,padding:10}}>
                        <NeedHelpFirstCard
                            image={"https://storage.googleapis.com/maaser_resources/4d69340daad24dffa4eca97152c9cf69.jpg"}
                            label={'Help hungry children'}
                            collectedAmount={'40'}
                            targetAmount={'150'}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ..."
                            onPress={() => {
                                console.log('post opened')
                            }}
                        />
                 
                        <View style={{  padding: 15,borderTopWidth:2,borderTopColor:theme.colors.gray3 }}>
                          <View style={{flexDirection: 'row',}}>
                            <Image source={Ellipse} style={{ borderRadius: 30 }} />
                            <Block>
                                <CardTitle>
                                    Anish Maharjan
                                </CardTitle>
                                <Text>
                                    Donor
                                </Text>
                                </Block>
                                </View>
                        </View>
                        </Block>
                    </ScrollView>

                </View>




            )}

        </SafeAreaView>
    );
};

export default Discover;

















