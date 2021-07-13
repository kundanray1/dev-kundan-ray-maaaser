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

const HEIGHT = Dimensions.get("window").height;

const CampaignDetails = ({ data,navigation, loginData,campaignDetails,campaignId }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    campaignDetails(campaignId);
    setRefreshing(false);
  });

  useEffect(() => {
    campaignDetails(campaignId);
  }, [campaignId]);
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
                source={{ uri: data.campaignDetails.campaign.thumbnailurl }}
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
            <Block row style={{flex:0}}>
            <Block style={{flex:2}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                textTransform: "capitalize",

                }}
                color="#3B414B"
              >
                {data.campaignDetails.campaign.title}
              </Text>
              </Block>
              <TouchableOpacity onPress={()=>navigation.navigate("Campaign QR Code")} activeOpacity={0.8} style={{flex:1.5,alignItems:"flex-end"}}>
              <Text
                style={{
                  fontSize: 16,
                  marginTop:2,
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
                {data.campaignDetails.campaign.countrycode}
              </Text>
            </Block>
              <PercentageBar
                height={6}
                backgroundColor={"grey"}
                completedColor={theme.colors.primary2}
                percentage={(data.campaignDetails.campaign.collectedamount*100)/data.campaignDetails.campaign.targetamount}
              />
              <Block row style={{ flex: 0 }}>
                <NumberFormat
                  value={data.campaignDetails.campaign.collectedamount / 100}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  renderText={(formattedValue) => (
                    <Text
                      color={theme.colors.primary2}
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        textTransform: "capitalize",
                      }}
                    >
                      {formattedValue}
                    </Text>
                  )}
                />

                <NumberFormat
                  value={data.campaignDetails.campaign.targetamount / 100}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  renderText={(formattedValue) => (
                    <Text
                      color="#5F6062"
                      style={{ fontSize: 14, fontWeight: "700" }}
                    >
                      {" "}
                      raised from {formattedValue}
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
                    {data.campaignDetails.campaign.campaignstarter.profilepic ==
                    "" ? (
                      <UserIconComponent height={30} width={30} />
                    ) : (
                      <Image
                        source={{
                          uri:
                            data.campaignDetails.campaign.campaignstarter
                              .profilepic,
                        }}
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
                      {data.campaignDetails.campaign.campaignstarter.account.fullname.substring(
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
                      style={{ fontSize: 16, marginLeft: 40, color: "#5F6062" }}
                      numberOfLines={1}
                    >
                      Organizer
                    </Text>
                  </Block>
                </Block>

                <Block>
                  <Block row center style={{ flex: 0, overflow: "hidden" }}>
                    <BeneficiaryIconComponent style={{ marginRight: 8 }} />

                    {data.campaignDetails.campaign.campaignbeneficiary
                      .profilepic == "" ? (
                      <UserIconComponent height={30} width={30} />
                    ) : (
                      <Image
                        source={{
                          uri:
                            data.campaignDetails.campaign.campaignbeneficiary
                              .profilepic,
                        }}
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
                      {data.campaignDetails.campaign.campaignbeneficiary.account.fullname.substring(
                        0,
                        10
                      ) + "..."}
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
                      value={data.campaignDetails.campaign.targetamount / 100}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      renderText={(formattedValue) => (
                        <Text
                          color="#5F6062"
                          style={{
                            fontSize: 18,
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
                      color="#5F6062"
                      style={{
                        fontSize: 18,
                        fontWeight: "700",
                        textTransform: "capitalize",
                        marginLeft: 10,
                      }}
                    >
                      {data.campaignDetails.campaign.category}
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
                        color="#5F6062"
                        style={{
                          fontSize: 18,
                          fontWeight: "700",
                          textTransform: "capitalize",
                          marginLeft: 10,
                        }}
                      >
                        {moment(data.campaignDetails.campaign.createdat).format(
                          "DD MMM YYYY"
                        )}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
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
                numberOfLines={10}
              >
                {data.campaignDetails.campaign.description.replace( /(<([^>]+)>)/ig, '')}
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

          {data.campaignDetails.campaign.campaignstarter.account.accountid !==
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
              <Button onPress={()=>navigation.navigate("Campaign Donate Now",{refId: data.campaignDetails.campaign.campaignid,receiverName:data.campaignDetails.campaign.campaignbeneficiary.account.fullname})}>
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

export default CampaignDetails;
