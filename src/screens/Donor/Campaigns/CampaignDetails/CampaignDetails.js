import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  RefreshControl,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Empty,
  CampaignCard,
  Text,
  FloatingButton,
} from "../../../../components/Index.js";
import PercentageBar from "../../../../components/PercentageBar.js";
import API from "./../../../../api/API";
import AddIconComponent from "./../../../../assets/icons/addIconComponent";
import { Dummy } from "./Dummy";
import NumberFormat from 'react-number-format';
import moment from 'moment';

import ShareCampaignIconComponent from "./../../../../assets/icons/ShareCampaignIconComponent.js";
import UserIconComponent from "./../../../../assets/icons/userIconComponent";

import TargetAmountIconComponent from "./../../../../assets/icons/TargetAmountIconComponent";
import TimeRemainingIconComponent from "./../../../../assets/icons/TimeRemainingIconComponent";
import BeneficiaryIconComponent from "./../../../../assets/icons/BeneficiaryIconComponent";
import TagsIconComponent from "./../../../../assets/icons/TagsIconComponent";

const HEIGHT = Dimensions.get("window").height;

const CampaignDetails = ({ navigation, data, campaignDetails,route }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    campaignDetails(API.user().account.accountid);
    setRefreshing(false);
  });

  const {campaignDetailsData}=route.params
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ paddingBottom: 100 }}>
        <Block style={{ flex: 0 }}>
          <ImageBackground
            style={{
              height: HEIGHT / 4,
              width: "100%",
              alignItems: "flex-end",
              overflow: "hidden",
            }}
            source={{ uri: "https://storage.googleapis.com/maaser_resources/7b6029f28c154583af0adc5f3c5f74f9.jpg" }}
          >
            <Block
              row
              style={{
                flex: 0,
                paddingVertical: 4,
              }}
            >
              <TouchableOpacity activeOpacity={0.8}>
                <ShareCampaignIconComponent
                  style={{ marginRight: 10, marginTop: 10 }}
                />
              </TouchableOpacity>
            </Block>
          </ImageBackground>
        </Block>
        <Block
          style={{
            flex: 0,
            borderColor: theme.colors.gray2,
            paddingVertical: 12,
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
            }}
            color="#3B414B"
          >
           {campaignDetailsData.title}
          </Text>
        
           <PercentageBar
            height={6}
            backgroundColor={'grey'}
            completedColor={theme.colors.primary2}
            percentage={`${(campaignDetailsData.collectedamount*100)/campaignDetailsData.targetAmount}%`}
          />
          <Block row style={{flex:0}}>
        <NumberFormat
                    value={campaignDetailsData.collectedamount/100}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    renderText={formattedValue => <Text   color={theme.colors.primary2} style={{ fontSize: 14, fontWeight: "700",textTransform: "capitalize",}}>{formattedValue}</Text>} 
                    />

                    <NumberFormat
                    value={campaignDetailsData.targetamount/100}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    renderText={formattedValue => <Text   color="#5F6062" style={{ fontSize: 14, fontWeight: "700"}}>{" "}raised from {formattedValue}</Text>} 
                    />
        </Block>

        </Block>

        <Block
          style={{
            flex: 0,
            paddingHorizontal: 16,
          }}
        >
          <Block
            row
            style={{
              flex: 0,
              borderBottomWidth: 1,
              paddingVertical: 12,
              borderColor: theme.colors.gray2,
            }}
          >
            <Block>
              <Block row center style={{ flex: 0 }}>
                {campaignDetailsData.campaignstarter.profilepic == "" ? (
                  <UserIconComponent height={30} width={30} />
                ) : (
                  <Image
                    source={{ uri: "https://storage.googleapis.com/maaser_resources/7b6029f28c154583af0adc5f3c5f74f9.jpg" }}
                    style={{ height: 30, width: 30, borderRadius: 30 }}
                  />
                )}

                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "700",
                    textTransform: "capitalize",
                    marginLeft: 10,
                  }}
                >
                  {campaignDetailsData.campaignstarter.account.fullname.substring(0, 14) + "..."}
                </Text>
              </Block>

              <Block
                style={{
                  flex: 0,
                }}
              >
                <Text
                  style={{ fontSize: 16, marginLeft: 40, color: "#5F6062" }}
                  numberOfLines={1}
                >
                  Organizer
                </Text>
              </Block>
            </Block>

            <Block>
              <Block row center style={{ flex: 0, overflow: "hidden" }}>
                <BeneficiaryIconComponent style={{marginRight:8}}/>

                {campaignDetailsData.campaignbeneficiary.profilepic == "" ? (
                  <UserIconComponent height={30} width={30}  />
                ) : (
                  <Image
                    source={{ uri: campaignDetailsData.campaignbeneficiary.profilepic }}
                    style={{ height: 30, width: 30, borderRadius: 30 }}
                  />
                )}


                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "700",
                    textTransform: "capitalize",
                    marginLeft: 6,
                  }}
                >
                  {campaignDetailsData.campaignbeneficiary.account.fullname.substring(0, 10) + "..."}
                </Text>
              </Block>

              <Block
                style={{
                  flex: 0,
                }}
              >
                <Text
                  style={{ fontSize: 16, marginLeft: 74, color: "#5F6062" }}
                >
                  Beneficiary
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>

        <Block
          row
          style={[
            {
              flex: 0,
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderColor: theme.colors.gray2,
            },
          ]}
        >
          <Block>
            <Block row style={{ flex: 0, overflow: "hidden" }}>
              <TargetAmountIconComponent height={38} width={38} />
              <Block column>
               <NumberFormat
                    value={campaignDetailsData.targetamount/100}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    renderText={formattedValue => <Text   color="#5F6062" style={{fontSize: 18,
                    fontWeight: "700",
                    textTransform: "capitalize",
                    marginLeft: 6}}>{" "}{formattedValue}</Text>} 
                    />
               
                <Text
                  style={{ fontSize: 16, marginLeft: 10, color: "#5F6062" }}
                >
                  Target Amount
                </Text>
              </Block>
            </Block>
          </Block>

          <Block>
            <Block row style={{ flex: 0, overflow: "hidden" }}>
              <TagsIconComponent height={38} width={38} />
              <Block column>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "700",
                    textTransform: "capitalize",
                    marginLeft: 10,
                  }}
                >
                  {campaignDetailsData.category}
                </Text>
                <Text
                  style={{ fontSize: 16, marginLeft: 10, color: "#5F6062" }}
                >
                  Tags
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>

        <Block
          row
          style={{
            flex: 0,
            paddingHorizontal: 16,
          }}
        >
          <Block
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderColor: theme.colors.gray2,
              paddingBottom: 12,
            }}
          >
            <Block>
              <Block row style={{ flex: 0, overflow: "hidden" }}>
                <TimeRemainingIconComponent height={38} width={38} />
                <Block column>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "700",
                      textTransform: "capitalize",
                      marginLeft: 10,
                    }}
                  >
                  {moment(campaignDetailsData.createdat).format("DD MMM YYYY")}
                  </Text>
                  <Text
                    style={{ fontSize: 16, marginLeft: 10, color: "#5F6062" }}
                  >
                    Created date
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block
          style={{ paddingHorizontal: 16, paddingTop: 10, paddingBottom: 80 }}
        >
          <Text style={{ fontSize: 16, color: "#5F6062" }} numberOfLines={10}>
            {campaignDetailsData.description}
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ flex: 0, alignItems: "flex-end" }}
          >
            <Text
              style={{
                fontSize: 16,
                color: theme.colors.primary2,
                fontWeight: "700",
              }}
            >
              View More
            </Text>
          </TouchableOpacity>
        </Block>
      </ScrollView>
      <Block
        style={{
          paddingHorizontal: 18,
          backgroundColor: "white",
          justifyContent: "flex-end",
          bottom: 0,
          paddingVertical: 10,
          position: "absolute",
          width: "100%",
        }}
      >
        <Button>
          <Text button style={{ fontSize: 18 }}>
            Donate Now
          </Text>
        </Button>
      </Block>
    </SafeAreaView>
  );
};

export default CampaignDetails;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    backgroundColor: "#F0FBFF",
    color: theme.colors.solidGray,
    paddingHorizontal: 14,
    borderRadius: 40,
  },
  amountSection: {
    flex: 1,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#F0FBFF",
  },
});
