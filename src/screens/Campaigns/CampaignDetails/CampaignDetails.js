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
  Share,
  BackHandler,
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
import EditIconComponent from "./../../../assets/icons/EditIconComponent.js";
import CampaignEditIconComponent from "./../../../assets/icons/campaignEditIconComponent.js";
import getCountryISO2 from "country-iso-3-to-2";
import country from "../../../constants/country.json";
import RenderHtml from "react-native-render-html";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const CampaignDetails = ({
  data,
  navigation,
  loginData,
  campaignDetails,
  campaignId,
  startACampaignThirdUpdateData,
  campaignDonateNowConfirmationData,
  campaignDetailsURLStart,
  route,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    campaignDetails(campaignId);
    setRefreshing(false);
  });
  useEffect(() => {
    campaignDetails(campaignId);
    campaignDetailsURLStart(campaignId);
  }, [
    campaignId,
    startACampaignThirdUpdateData.startACampaignThirdUpdate,
    campaignDonateNowConfirmationData.campaignDonateNowConfirmation,
  ]);

  const a = "https://i.imgur.com/qMUWuXV.jpg"; //your url
  const b = ["jpeg", "jpg", "png", "gif", "raw"]; //format img
  const c = a.split("."); // ["https://i", "imgur", "com/qMUWuXV", "jpg"]

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: data.campaignDetailsURL.campaignurl,
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
      {data.isLoading || data.campaignDetailsURLLoading ? (
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
            {data.campaignDetails.campaign.thumbnailurl.includes(
              c[c.length - 1]
            ) ? (
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
                    {route.params != undefined && (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() =>
                          navigation.navigate(
                            "Start a campaign second update",
                            {
                              campaignDetails: data.campaignDetails,
                            }
                          )
                        }
                      >
                        <CampaignEditIconComponent
                          style={{ marginTop: 10, marginRight: 10 }}
                        />
                      </TouchableOpacity>
                    )}
                    <TouchableOpacity activeOpacity={0.8} onPress={onShare}>
                      <ShareCampaignIconComponent
                        style={{ marginTop: 10, marginRight: 10 }}
                      />
                    </TouchableOpacity>
                  </Block>
                </ImageBackground>
              </Block>
            ) : (
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
                    {route.params != undefined && (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() =>
                          navigation.navigate(
                            "Start a campaign second update",
                            {
                              campaignDetails: data.campaignDetails,
                            }
                          )
                        }
                      >
                        <CampaignEditIconComponent
                          style={{ marginTop: 10, marginRight: 10 }}
                        />
                      </TouchableOpacity>
                    )}
                    <TouchableOpacity activeOpacity={0.8} onPress={onShare}>
                      <ShareCampaignIconComponent
                        style={{ marginTop: 10, marginRight: 10 }}
                      />
                    </TouchableOpacity>
                  </Block>
                </ImageBackground>
              </Block>
            )}

            <Block
              style={{
                flex: 0,
                borderColor: theme.colors.gray2,
                paddingVertical: 12,
                paddingHorizontal: 16,
              }}
            >
              <Block row style={{ flex: 0 }}>
                <Block row style={{ flex: 2 }}>
                  <Block style={{ flex: 4 }}>
                    <Text
                      color="#3B414B"
                      style={{
                        fontSize: 18,
                        fontWeight: "700",
                        textTransform: "capitalize",
                        width: WIDTH - 180,
                      }}
                      numberOfLines={1}
                    >
                      {data.campaignDetails.campaign.title}
                    </Text>
                  </Block>
                  {route.params != undefined && (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{ flex: 0.5, padding: 8 }}
                      onPress={() =>
                        navigation.navigate("Start a campaign update", {
                          campaignDetails: data.campaignDetails,
                          title: "title",
                          targetamount: "",
                          country: "",
                          beneficiarytype: "",
                          beneficierslist: "",
                          category: "",
                        })
                      }
                    >
                      <EditIconComponent />
                    </TouchableOpacity>
                  )}
                </Block>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Campaign QR Code", {
                      campaignurl: data.campaignDetailsURL.campaignurl,
                      refId: campaignId,
                      receiverName:
                        data.campaignDetails.campaign.campaignbeneficiary
                          .account.fullname,
                    })
                  }
                  activeOpacity={0.8}
                  style={{ flex: 1.5, alignItems: "flex-end" }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      marginTop: 4,
                      fontWeight: "700",
                    }}
                    color={theme.colors.primary2}
                  >
                    Generate QR Code
                  </Text>
                </TouchableOpacity>
              </Block>
              <Block row style={{ flex: 0, marginTop: 6 }}>
                <PinLocationIconComponent />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    marginLeft: 8,
                  }}
                  color={theme.colors.solidGray}
                >
                  {
                    country.find(
                      (item) =>
                        item.code ==
                        getCountryISO2(
                          data.campaignDetails.campaign.countrycode
                        )
                    ).name
                  }
                </Text>
                {route.params != undefined && (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ paddingHorizontal: 14, paddingVertical: 4 }}
                    onPress={() =>
                      navigation.navigate("Start a campaign update", {
                        campaignDetails: data.campaignDetails,
                        title: "",
                        targetamount: "",
                        country: "country",
                        beneficiarytype: "",
                        beneficierslist: "",
                        category: "",
                      })
                    }
                  >
                    <EditIconComponent />
                  </TouchableOpacity>
                )}
              </Block>
              <PercentageBar
                height={6}
                backgroundColor={"grey"}
                completedColor={theme.colors.primary2}
                percentage={
                  (data.campaignDetails.campaign.collectedamount * 100) /
                  data.campaignDetails.campaign.targetamount
                }
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
                        fontSize: 13,
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
                      style={{
                        fontSize: 13,
                      }}
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
                        fontSize: 16,
                        fontWeight: "700",
                        textTransform: "capitalize",
                        marginLeft: 10,
                        color: "#5F6062",
                      }}
                    >
                      {data.campaignDetails.campaign.campaignstarter.account.fullname.substring(
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
                        fontSize: 16,
                        fontWeight: "700",
                        textTransform: "capitalize",
                        marginLeft: 6,
                        color: "#5F6062",
                      }}
                    >
                      {data.campaignDetails.campaign.campaignbeneficiary.account.fullname.substring(
                        0,
                        12
                      ) + "..."}
                    </Text>
                  </Block>

                  <Block
                    row
                    style={{
                      flex: 0,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: 74,
                        color: "#5F6062",
                      }}
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
                  <TargetAmountIconComponent
                    height={HEIGHT / 20}
                    width={WIDTH / 10}
                  />
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
                    <Block row style={{ flex: 0 }}>
                      <Text
                        style={{
                          fontSize: 14,
                          marginLeft: 10,
                          color: "#5F6062",
                        }}
                      >
                        Target Amount
                      </Text>
                      {route.params != undefined && (
                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={{ paddingHorizontal: 14, paddingVertical: 4 }}
                          onPress={() =>
                            navigation.navigate("Start a campaign update", {
                              campaignDetails: data.campaignDetails,
                              title: "",
                              targetamount: "targetamount",
                              country: "",
                              beneficiarytype: "",
                              beneficierslist: "",
                              category: "",
                            })
                          }
                        >
                          <EditIconComponent />
                        </TouchableOpacity>
                      )}
                    </Block>
                  </Block>
                </Block>
              </Block>

              <Block>
                <Block row style={{ flex: 0, overflow: "hidden" }}>
                  <TagsIconComponent height={HEIGHT / 20} width={WIDTH / 10} />
                  <Block column>
                    <Text
                      color="#5F6062"
                      style={{
                        fontSize: 16,
                        fontWeight: "700",
                        textTransform: "capitalize",
                        marginLeft: 10,
                        width: WIDTH - 280,
                      }}
                      numberOfLines={1}
                    >
                      {data.campaignDetails.campaign.category}
                    </Text>
                    <Block row style={{ flex: 0 }}>
                      <Text
                        style={{
                          fontSize: 14,
                          marginLeft: 10,
                          color: "#5F6062",
                        }}
                      >
                        Tags
                      </Text>
                      {route.params != undefined && (
                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={{ paddingHorizontal: 14, paddingVertical: 4 }}
                          onPress={() =>
                            navigation.navigate("Start a campaign update", {
                              campaignDetails: data.campaignDetails,
                              title: "",
                              targetamount: "",
                              country: "",
                              beneficiarytype: "",
                              beneficierslist: "",
                              category: "category",
                            })
                          }
                        >
                          <EditIconComponent />
                        </TouchableOpacity>
                      )}
                    </Block>
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
                    <TimeRemainingIconComponent
                      height={HEIGHT / 20}
                      width={WIDTH / 10}
                    />
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
                        {moment(data.campaignDetails.campaign.createdat).format(
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
              row
              style={{
                paddingHorizontal: 16,
                paddingTop: 10,
              }}
            >
              <RenderHtml
                contentWidth={WIDTH}
                source={{
                  html: `${data.campaignDetails.campaign.description}`,
                }}
              />

              {route.params != undefined && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ paddingHorizontal: 14, paddingVertical: 4 }}
                  onPress={() =>
                    navigation.navigate("Start a campaign third update", {
                      campaignDetails: data.campaignDetails,
                    })
                  }
                >
                  <EditIconComponent />
                </TouchableOpacity>
              )}
            </Block>
            <Block
              row
              style={{
                paddingHorizontal: 16,
                paddingTop: 10,
                paddingBottom: 80,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ flex: 1, alignItems: "flex-end" }}
                onPress={() => setViewMore(!viewMore)}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: theme.colors.primary2,
                    fontWeight: "700",
                  }}
                >
                  {viewMore ? "View less" : "View More"}
                </Text>
              </TouchableOpacity>
            </Block>
          </ScrollView>

          {data.campaignDetails.campaign.campaignstatus == 1 ? (
            data.campaignDetails.campaign.campaignbeneficiary.account
              .accountid ==
            data.campaignDetails.campaign.campaignbeneficiary.account
              .accountid ? (
              data.campaignDetails.campaign.campaignbeneficiary.account
                .accountid == loginData.user.account.accountid ? (
                <Block style={{ flex: 0 }} />
              ) : (
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
                  <Button
                    onPress={() =>
                      navigation.navigate("Campaign Donate Now", {
                        refId: data.campaignDetails.campaign.campaignid,
                        receiverName:
                          data.campaignDetails.campaign.campaignbeneficiary
                            .account.fullname,
                      })
                    }
                  >
                    <Text button style={{ fontSize: 18 }}>
                      Donate Now
                    </Text>
                  </Button>
                </Block>
              )
            ) : (
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
                  <Button
                    onPress={() =>
                      navigation.navigate("Campaign Donate Now", {
                        refId: data.campaignDetails.campaign.campaignid,
                        receiverName:
                          data.campaignDetails.campaign.campaignbeneficiary
                            .account.fullname,
                      })
                    }
                  >
                    <Text button style={{ fontSize: 18 }}>
                      Donate Now
                    </Text>
                  </Button>
                </Block>
            )
          ) : (
            <Block style={{ flex: 0 }} />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default CampaignDetails;
