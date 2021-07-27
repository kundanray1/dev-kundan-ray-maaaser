import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  RefreshControl,
  Modal,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
  Empty,
  DonationsDetail,
  Button,
  ErrorMessage,
  FloatingButton,
  ReceiversDetail,
  CustomActivityIndicator,
  NeedHelpFirstCard,
} from "../../../../components/Index.js";
import API from "./../../../../api/API";
import DonateIconComponent from "./../../../../assets/icons/DonateIconComponent";
import UserIconComponent from "./../../../../assets/icons/userIconComponent";
import NumberFormat from "react-number-format";
import { Formik } from "formik";
import { ManualValidationSchema } from "./../../../../utility/ValidationSchema.js";
import PaymentProto from "./../../../../protos/payment_pb";
import TickIconComponent from "./../../../../assets/icons/tickIconComponent.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
const DonorReceiver = ({
  navigation,
  data,
  loginData,
  profileData,
  profile,
  donationsMadeData,
  upcomingDonationsData,
  receiversData,
  balance,
  upcomingDonations,
  donationsMade,
  receivers,
  donorReceiverDonateConfirmation,
  donorReceiverDonateConfirmationClear,
  allCampaignsData,
  allCampaigns,
  campaignId,
  campaignsData,
  campaigns,
  ACHLoadFundConfirmationData,
  cardLoadFundConfirmationData,
  linkScheduleDonationData,
  manualDonateConfirmationData
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [accountData, setAccountData] = useState();
  const [amountFocus, setAmountFocus] = useState();
  const [remarksFocus, setRemarksFocus] = useState();
  const [donateModalVisible, setDonateModalVisible] = useState(false);
  const [confirmationMessageVisible, setConfirmationMessageVisible] = useState(
    false
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    balance(loginData.user.account.accountid);
    upcomingDonations(loginData.user.account.accountid);
    donationsMade(loginData.user.account.accountid);
    allCampaigns();
    campaigns(),
    receivers();
    setRefreshing(false);
  });

  useEffect(() => {
    profile(loginData.user.account.accountid);
    upcomingDonations(loginData.user.account.accountid);
    balance(loginData.user.account.accountid);
    donationsMade(loginData.user.account.accountid);
    allCampaigns();
    campaigns();
    receivers();
  }, [
    data.balance,
    data.donorReceiverDonateConfirmation,
    ACHLoadFundConfirmationData.ACHLoadFundConfirmation,
    cardLoadFundConfirmationData.cardLoadFundConfirmation,
    linkScheduleDonationData.linkScheduleDonation,
    manualDonateConfirmationData.manualDonateConfirmation
  ]);

  useEffect(() => {
    if (data.donorReceiverDonateConfirmation !== null) {
      if (data.donorReceiverDonateConfirmation.success) {
        setDonateModalVisible(false);
        setConfirmationMessageVisible(true);
        donorReceiverDonateConfirmationClear()
      }
    }
  }, [
    data.donorReceiverDonateConfirmation,
    ACHLoadFundConfirmationData.ACHLoadFundConfirmationData,
    cardLoadFundConfirmationData.cardLoadFundConfirmation,
    manualDonateConfirmationData.manualDonateConfirmation
  ]);

  const onSubmitDonateConfirmation = (values) => {
    const donationProto = new PaymentProto.Transaction();
    donationProto.setDonoraccountid(loginData.user.account.accountid);
    donationProto.setReceiveraccountid(accountData.account.accountid);
    donationProto.setAmount(values.amount * 100);
    donationProto.setRemark(values.remarks);
    donationProto.setTransactionmedium(
      PaymentProto.TransactionMedium.INTERNAL_MEDIUM
    );
    donationProto.setTransactiontype(PaymentProto.TransactionType.DONATE_FUND);
    donationProto.setTransactionstatus(
      PaymentProto.TransactionStatus.TRANSACTION_APPROVED
    );
    donorReceiverDonateConfirmation(donationProto);
    setDonateModalVisible(false);
  };

  const ConfirmationMessage = () => (
    <SafeAreaView>
      <Modal
        visible={confirmationMessageVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() => setConfirmationMessageVisible(false)}
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 40 }]}>
            <Text center style={{ fontSize: 18, fontWeight: "700" }}>
              Donation Successful!
            </Text>
            <View style={{ paddingVertical: 25, alignItems: "center" }}>
              <TickIconComponent />
            </View>
            <View style={{ paddingHorizontal: 16 }}>
              <Button  onPress={() => setConfirmationMessageVisible(false)}>
                <Text button style={{ fontSize: 18 }}>
                  OK
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );

  const DonateModal = () => (
    <SafeAreaView>
      <Modal
        visible={donateModalVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() => setDonateModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() => setDonateModalVisible(false)}
        >
          <TouchableWithoutFeedback>
            <View style={[styles.modal, { width: WIDTH - 40 }]}>
              <Formik
                initialValues={{
                  amount: "",
                  remarks: " ",
                }}
                onSubmit={(values) => {
                  onSubmitDonateConfirmation(values);
                }}
                validationSchema={ManualValidationSchema}
              >
                {({
                  handleChange,
                  touched,
                  setFieldTouched,
                  handleSubmit,
                  values,
                  errors,
                }) => (
                  <>
                    <Input
                      label="Receiver Name"
                      autoCapitalize="words"
                      value={accountData.account.fullname}
                      editable={false}
                    />

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
                    <ErrorMessage
                      error={errors.amount}
                      visible={touched.amount}
                    />
                    <Input
                      label="Remarks"
                      autoCapitalize="sentences"
                      focus={remarksFocus}
                      onChangeText={handleChange("remarks")}
                      onBlur={() => {
                        setFieldTouched("remarks");
                        setRemarksFocus(false);
                      }}
                      onFocus={() => setRemarksFocus(true)}
                      value={values.remarks}
                      style={{
                        borderBottomColor: remarksFocus
                          ? theme.colors.primary2
                          : touched.remarks && errors.remarks
                          ? theme.colors.red
                          : theme.colors.solidGray,
                      }}
                    />
                    <ErrorMessage
                      error={errors.remarks}
                      visible={touched.remarks}
                    />
                    <Block style={{ flex: 0, paddingVertical: 10 }}>
                      {!errors.receiverName && !errors.amount ? (
                        <Button onPress={handleSubmit}>
                          {data.isLoading ? (
                            <>
                              <CustomActivityIndicator
                                label="Requesting..."
                                isLoading={
                                  data.isLoading
                                }
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
                        <Button>
                          <Text button style={{ fontSize: 18 }}>
                            Proceed
                          </Text>
                        </Button>
                      )}
                    </Block>
                  </>
                )}
              </Formik>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );

  const renderUpcomingDonations = () => {
    return upcomingDonationsData.upcomingDonations
      .slice(0, 2)
      .map((item, index) => {
        return (
          <DonationsDetail
            key={index}
            profilePic={item.clientList[1].profilepic}
            name={item.clientList[1].account.fullname}
            amount={item.amount}
            date={item.createdat}
            textColor={theme.colors.black}
          />
        );
      });
  };

  const renderDonationsMade = () => {
    return donationsMadeData.donationsMade
      .filter((transaction) => {
        return transaction.transactiontype == 2;
      })
      .slice(0, 2)
      .map((item, index) => {
        return item.clientList[1] != undefined ? (
          <DonationsDetail
            key={index}
            profilePic={item.clientList[1].profilepic}
            name={item.clientList[1].account.fullname}
            amount={item.amount}
            date={item.createdat}
            textColor={theme.colors.black}
          />
        ) : (
          <Block style={{ paddingHorizontal: 18 }} />
        );
      });
  };

  const renderReceivers = () => {
    return receiversData.receivers.clientsList
      .slice(0, 2)
      .map((item, index) => {
        return (
          <ReceiversDetail
            key={index}
            profilePic={item.profilepic}
            name={item.account.fullname}
            clientType={item.clienttype}
            onPress={() => {
              setDonateModalVisible(!donateModalVisible);
              setAccountData(item);
            }}
          />
        );
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ||
      upcomingDonationsData.isLoading ||
      donationsMadeData.isLoading ||
      receiversData.isLoading ||
      profileData.isLoading ||
      campaignsData.isLoading ||
      allCampaignsData.isLoading ? (
        <Block center middle>
          <ActivityIndicator size="large" color={theme.colors.primary2} />
        </Block>
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl
              colors={[theme.colors.primary2]}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <Block>
            <ImageBackground
              style={{
                height: "95%",
                width: "100%",
              }}
              imageStyle={{
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              source={require("../../../../assets/images/backgroundColor.png")}
            >
              <Block
                style={{
                  paddingHorizontal: 16,
                  flex: 0,
                  marginTop: HEIGHT / 10,
                }}
              >
                <Block
                  row
                  style={{
                    flex: 0,
                    paddingHorizontal: 20,
                    paddingTop:22,
                    paddingBottom:18,
                    borderRadius: 4,
                    shadowRadius: 4,
                    elevation: 4,
                    backgroundColor: theme.colors.white,
                  }}
                >
                <Block style={{
                      flex: 1,
                    }}>
                  {profileData.profile.profilepic == "" ? (
                    <UserIconComponent height={"65%"} width={"75%"} />
                  ) : (
                    <Image
                      source={{ uri: profileData.profile.profilepic }}
                      style={{ height: "65%", width: "75%", borderRadius: 30 }}
                    />
                  )}
                </Block>
                  <Block
                    style={{
                      flex: 3,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "700",
                        textTransform: "capitalize",
                        color: theme.colors.solidGray,
                        marginBottom:6
                      }}
                    >
                      Hi, {profileData.profile.account.fullname.split(" ")[0]}!
                    </Text>
                    <Button
                      style={{ height: 26, width: 80 }}
                      onPress={() => navigation.navigate("Load Fund")}
                    >
                      <Text
                        color={theme.colors.white}
                        style={{ fontSize: 14, fontWeight: "700" }}
                      >
                        Load Fund
                      </Text>
                    </Button>
                  </Block>

                  <Block
                    style={{
                      flex: 2.5,
                      marginTop:4
                    }}
                  >
                    <Text
                      center
                      color={theme.colors.solidGray}
                      style={{ fontSize: 16,marginBottom:6 }}
                    >
                      Balance
                    </Text>

                    <NumberFormat
                      value={data.balance / 100}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      renderText={(formattedValue) => (
                        <Text
                          center
                          style={{
                            fontSize: 16,
                            fontWeight: "700",
                            color: theme.colors.solidGray,
                          }}
                        >
                          {formattedValue}
                        </Text>
                      )}
                    />
                  </Block>
                </Block>
              </Block>
            </ImageBackground>
          </Block>

          {allCampaignsData.allCampaigns.campaignsList.length != 0 &&
          <Block style={{ paddingHorizontal: 20, paddingTop: 10 }}>
            <Block row style={{ flex: 0.2, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 16, fontWeight: "700",textTransform:"capitalize" }}>
                Need to help first
              </Text>
              <Text
                onPress={() => navigation.navigate("All Campaigns")}
                style={{ fontSize: 15, fontWeight: "500" }}
                color={theme.colors.solidGray}
              >
                View All
              </Text>
            </Block>
            <Block
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: theme.colors.gray2,
                paddingTop: 10,
              }}
            >
              <FlatList
                data={allCampaignsData.allCampaigns.campaignsList.slice(0.6)}
                refreshControl={
                  <RefreshControl
                    colors={[theme.colors.primary2]}
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
                nestedScrollEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => {
                  return item.campaignid.toString();
                }}
                ItemSeparatorComponent={() => (
                  <Block style={{ marginTop: 2 }} />
                )}
                ListEmptyComponent={() => (
                  <Empty
                    iconName="transactions"
                    dashboard={0}
                    title="You don't have any data."
                  />
                )}
                renderItem={(post) =>
                  post.item.campaignstarter.account.accountid !==
                    loginData.user.account.accountid && (
                    <NeedHelpFirstCard
                      image={post.item.thumbnailurl}
                      label={post.item.title}
                      collectedAmount={post.item.collectedamount}
                      targetAmount={post.item.targetamount}
                      countryCode={post.item.countrycode}
                      onPress={() => {
                        campaignId(post.item.campaignid);
                        navigation.navigate("Campaign Details");
                      }}
                    />
                  )
                }
              />
            </Block>
          </Block>
        }

          {(upcomingDonationsData.upcomingDonations.length != 0) && (
          <Block style={{ paddingHorizontal: 20, paddingTop: 10 }}>
            <Block row style={{ flex: 0.2, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                Upcoming Donations
              </Text>
              <Text
                onPress={() => navigation.navigate("Upcoming Donations")}
                style={{ fontSize: 15, fontWeight: "500" }}
                color={theme.colors.solidGray}
              >
                View All
              </Text>
            </Block>
            <Block style={{ flex: 1,marginTop:8 }}>{renderUpcomingDonations()}</Block>
          </Block>
           )}

            {(donationsMadeData.donationsMade.length != 0) && (

          <Block style={{ paddingHorizontal: 20,marginTop:10 }}>
            <Block row style={{ flex: 0.2, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                Donations Made
              </Text>
              <Text
                onPress={() => navigation.navigate("Donations Made")}
                style={{ fontSize: 15, fontWeight: "500" }}
                color={theme.colors.solidGray}
              >
                View All
              </Text>
            </Block>
              <Block style={{ flex: 1,marginTop:8 }}>{renderDonationsMade()}</Block>
          </Block>
            )}

             {(receiversData.receivers.length != 0) && (
          <Block style={{ paddingHorizontal: 20, paddingBottom: 80,marginTop:10 }}>
            <Block row style={{ flex: 0.2, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>Receivers</Text>
              <Text
                onPress={() => navigation.navigate("Receivers")}
                style={{ fontSize: 15, fontWeight: "500" }}
                color={theme.colors.solidGray}
              >
                View All
              </Text>
            </Block>
              <Block style={{ flex: 1,marginTop:8 }}>{renderReceivers()}</Block>
             </Block>
            )}
        </ScrollView>
      )}
      {DonateModal()}
      {ConfirmationMessage()}
      <FloatingButton
        onPress={() => navigation.navigate("Donate")}
        iconComponent={<DonateIconComponent />}
      />
    </SafeAreaView>
  );
};

export default DonorReceiver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modal: {
    borderRadius: 4,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
});
