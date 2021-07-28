import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Share
} from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Text } from "../../../components/Index.js";
import PercentageBar from "../../../components/PercentageBar.js";
import NumberFormat from "react-number-format";
import moment from "moment";
import ShareCampaignIconComponent from "./../../../assets/icons/ShareCampaignIconComponent.js";
import UserIconComponent from "./../../../assets/icons/userIconComponent";
import TargetAmountIconComponent from "./../../../assets/icons/TargetAmountIconComponent";
import TimeRemainingIconComponent from "./../../../assets/icons/TimeRemainingIconComponent";
import BeneficiaryIconComponent from "./../../../assets/icons/BeneficiaryIconComponent";
import TagsIconComponent from "./../../../assets/icons/TagsIconComponent";
import PinLocationIconComponent from "./../../../assets/icons/PinLocationIconComponent";
import getCountryISO2 from "country-iso-3-to-2";
import country  from "../../../constants/country.json";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const SubCampaignDetails = ({ data,navigation, loginData, subCampaignDetails,subCampaignId,campaignDonateNowConfirmationData }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    subCampaignDetails(subCampaignId);
    setRefreshing(false);
  });
  useEffect(() => {
    subCampaignDetails(subCampaignId);
  }, [subCampaignId,campaignDonateNowConfirmationData.campaignDonateNowConfirmation]);
   const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `https://maaser-api.brilltech.com/sub/campaign/${subCampaignId}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary2} />
      ) : (
        <>
          <ScrollView
            style={{ paddingBottom: 100 }}
            refreshControl={
              <RefreshControl
                colors={[theme.colors.primary2]}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
          >
            <Block style={{ flex: 0 }}>
              <ImageBackground
                style={{
                  height: HEIGHT / 4,
                  width: "100%",
                  alignItems: "flex-end",
                  overflow: "hidden",
                }}
                source={{ uri: data.subCampaignDetails.subcampaign.campaign.thumbnailurl }}
              >
                <Block
                  row
                  style={{
                    flex: 0,
                    paddingVertical: 4,
                  }}
                >
                  <TouchableOpacity activeOpacity={0.8} onPress={onShare}>
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
            <Block row style={{flex:0}}>
            <Block style={{flex:2}}>
              <Text
                  color="#3B414B"
                      style={{
                        fontSize: 18,
                        fontWeight: "700",
                        textTransform: "capitalize",
                       width:WIDTH-180
                      }}
                      numberOfLines={1}
                    >
                {data.subCampaignDetails.subcampaign.campaign.title}
              </Text>
              </Block>
              <TouchableOpacity onPress={()=>navigation.navigate("Sub Campaign QR Code",
                {title:data.subCampaignDetails.subcampaign.campaign.title,subcampaignstarter:data.subCampaignDetails.subcampaign.subcampaignstarter.account.fullname,subcampaignid:subCampaignId})} activeOpacity={0.8} style={{flex:1.5,alignItems:"flex-end"}}>
              <Text
                style={{
                  fontSize: 16,
                  marginTop:4,
                  fontWeight: "700",
                }}
                color={theme.colors.primary2}
              >
                Generate QR Code
              </Text>
              </TouchableOpacity>
            </Block>
            <Block row style={{flex:0,marginTop:6}}>
              <PinLocationIconComponent/>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  marginLeft:8
                }}
                color={theme.colors.solidGray}
              >
                {country.find(item => item.code == getCountryISO2(data.subCampaignDetails.subcampaign.campaign.countrycode)).name}
              </Text>
            </Block>
              <PercentageBar
                height={6}
                backgroundColor={"grey"}
                completedColor={theme.colors.primary2}
                percentage={
                  (data.subCampaignDetails.subcampaign.collectedamount * 100) /
                  data.subCampaignDetails.subcampaign.targetamount
                }
              />
              <Block row style={{ flex: 0 }}>
                <NumberFormat
                  value={data.subCampaignDetails.subcampaign.collectedamount / 100}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  renderText={(formattedValue) => (
                    <Text
                      color={theme.colors.primary2}
                      style={{
                        fontSize: 13,
                        fontWeight: "700",
                      }}
                    >
                      {formattedValue}
                    </Text>
                  )}
                />

                <NumberFormat
                  value={data.subCampaignDetails.subcampaign.targetamount / 100}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  renderText={(formattedValue) => (
                    <Text
                      color="#5F6062"
                      style={{ fontSize: 13}}
                    >
                      {" "}
                      raised of {formattedValue}
                    </Text>
                  )}
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
                    {data.subCampaignDetails.subcampaign.subcampaignstarter.profilepic ==
                    "" ? (
                      <UserIconComponent height={30} width={30} />
                    ) : (
                      <Image
                        source={{
                          uri:
                            data.subCampaignDetails.subcampaign.subcampaignstarter
                              .profilepic,
                        }}
                        style={{ height: 30, width: 30, borderRadius: 30 }}
                      />
                    )}

                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "700",
                        textTransform: "capitalize",
                        marginLeft: 10,
                         color: "#5F6062"
                      }}
                    >
                      {data.subCampaignDetails.subcampaign.subcampaignstarter.account.fullname.substring(
                        0,
                        16
                      ) + "..."}
                    </Text>
                  </Block>

                  <Block
                    style={{
                      flex: 0,
                    }}
                  >
                    <Text
                      style={{ fontSize: 14, marginLeft: 40, color: "#5F6062" }}
                      numberOfLines={1}
                    >
                      Organizer
                    </Text>
                  </Block>
                </Block>

                <Block>
                  <Block row center style={{ flex: 0, overflow: "hidden" }}>
                    <BeneficiaryIconComponent style={{ marginRight: 8 }} />

                    {data.subCampaignDetails.subcampaign.campaign.campaignbeneficiary
                      .profilepic == "" ? (
                      <UserIconComponent height={30} width={30} />
                    ) : (
                      <Image
                        source={{
                          uri:
                            data.subCampaignDetails.subcampaign.campaign.campaignbeneficiary
                              .profilepic,
                        }}
                        style={{ height: 30, width: 30, borderRadius: 30 }}
                      />
                    )}

                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "700",
                        textTransform: "capitalize",
                        marginLeft: 6,
                      }}
                    >
                      {data.subCampaignDetails.subcampaign.campaign.campaignbeneficiary.account.fullname.substring(
                        0,
                        12
                      ) + "..."}
                    </Text>
                  </Block>

                  <Block
                    style={{
                      flex: 0,
                    }}
                  >
                    <Text
                      style={{ fontSize: 14, marginLeft: 74, color: "#5F6062" }}
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
                  <TargetAmountIconComponent height={HEIGHT/20}
                width={WIDTH/10} />
                  <Block column>
                    <NumberFormat
                      value={data.subCampaignDetails.subcampaign.targetamount / 100}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      renderText={(formattedValue) => (
                        <Text
                          color="#5F6062"
                          style={{
                            fontSize: 16,
                            fontWeight: "700",
                            textTransform: "capitalize",
                            marginLeft: 6,
                          }}
                        >
                          {" "}
                          {formattedValue}
                        </Text>
                      )}
                    />

                    <Text
                      style={{ fontSize: 14, marginLeft: 10, color: "#5F6062" }}
                    >
                      Target Amount
                    </Text>
                  </Block>
                </Block>
              </Block>

              <Block>
                <Block row style={{ flex: 0, overflow: "hidden" }}>
                  <TagsIconComponent height={HEIGHT/20}
                width={WIDTH/10} />
                  <Block column>
                    <Text
                      color="#5F6062"
                      style={{
                        fontSize: 16,
                        fontWeight: "700",
                        textTransform: "capitalize",
                        marginLeft: 10,
                      }}
                    >
                      {data.subCampaignDetails.subcampaign.campaign.category}
                    </Text>
                    <Text
                      style={{ fontSize: 14, marginLeft: 10, color: "#5F6062" }}
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
                    <TimeRemainingIconComponent height={HEIGHT/20}
                width={WIDTH/10} />
                    <Block column>
                      <Text
                        color="#5F6062"
                        style={{
                          fontSize: 16,
                          fontWeight: "700",
                          textTransform: "capitalize",
                          marginLeft: 10,
                        }}
                      >
                        {moment(data.subCampaignDetails.subcampaign.campaign.createdat).format(
                          "DD MMM, YYYY"
                        )}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          marginLeft: 10,
                          color: "#5F6062",
                        }}
                      >
                        Created date
                      </Text>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
            <Block
              style={{
                paddingHorizontal: 16,
                paddingTop: 10,
                paddingBottom: 80,
              }}
            >
              <Text
                style={{ fontSize: 16, color: "#5F6062" }}
                numberOfLines={viewMore?100:2}
              >
                {data.subCampaignDetails.subcampaign.campaign.description.replace( /(<([^>]+)>)/ig, '')}
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ flex: 0, alignItems: "flex-end" }}
               onPress={()=>setViewMore(!viewMore)}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: theme.colors.primary2,
                    fontWeight: "700",
                  }}
                >
                  {viewMore?"View less":"View More"}
                </Text>
              </TouchableOpacity>
            </Block>
          </ScrollView>

          {data.subCampaignDetails.subcampaign.subcampaignstarter.account.accountid !==
            loginData.user.account.accountid && (
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
              <Button onPress={()=>navigation.navigate("Sub Campaign Donate Now",{refId: data.subCampaignDetails.subcampaign.subcampaignid,receiverName:data.subCampaignDetails.subcampaign.campaign.campaignbeneficiary.account.fullname})}>
                <Text button style={{ fontSize: 18 }}>
                  Donate Now
                </Text>
              </Button>
            </Block>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default SubCampaignDetails;
