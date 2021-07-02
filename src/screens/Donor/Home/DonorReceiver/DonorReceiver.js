import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
  Dimensions
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
  CustomActivityIndicator
} from "../../../../components/Index.js";
import API from "./../../../../api/API";
import DonateIconComponent from "./../../../../assets/icons/DonateIconComponent";
import UserIconComponent from "./../../../../assets/icons/userIconComponent";
import LocalDB from "./../../../../api/LocalStorage";
import NumberFormat from 'react-number-format';
import { FontAwesome5 } from "@expo/vector-icons";
import { Formik } from "formik";
import { ManualValidationSchema } from "./../../../../utility/ValidationSchema.js";
import PaymentProto from "./../../../../protos/payment_pb";
import TickIconComponent from "./../../../../assets/icons/tickIconComponent.js";
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
  manualDonateConfirmationStart,
  manualDonateConfirmationClear,
  manualDonateConfirmationData
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [accountData, setAccountData] = useState();
  const [amountFocus, setAmountFocus] = useState();
  const [remarksFocus, setRemarksFocus] = useState();
  const [confirmationSuccessfulVisible, setConfirmationSuccessfulVisible] = useState(false);
  const [confirmationMessageVisible, setConfirmationMessageVisible] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    balance(loginData.user.account.accountid);
    upcomingDonations(loginData.user.account.accountid);
    donationsMade(loginData.user.account.accountid);
    receivers(), 
    setRefreshing(false);
  });
  useEffect(() => {
    if (
      upcomingDonationsData.upcomingDonations == null ||
      donationsMadeData.donationsMade == null ||
      data.donationReceivers == null ||
      receiversData.receivers == null ||
      profileData.profile == null
    ) {
      balance(loginData.user.account.accountid);
      upcomingDonations(loginData.user.account.accountid);
      donationsMade(loginData.user.account.accountid);
      receivers();
      profile(loginData.user.account.accountid)
    }
  }, []);
    useEffect(() => {
    if (manualDonateConfirmationData.manualDonateConfirmation !== null) {
      if (manualDonateConfirmationData.manualDonateConfirmation.success) {
        setConfirmationSuccessfulVisible(false);
        setConfirmationMessageVisible(true);
        manualDonateConfirmationClear();
      }
    }
  }, [manualDonateConfirmationData.manualDonateConfirmation]);

  const onSubmitDonateConfirmation = (values) => {
    const donationProto = new PaymentProto.Transaction();
    donationProto.setDonoraccountid(loginData.user.account.accountid);
    donationProto.setReceiveraccountid(accountData.account.accountid);
    donationProto.setAmount(values.amount*100);
    donationProto.setRemark(values.remarks);
    donationProto.setTransactionmedium(PaymentProto.TransactionMedium.INTERNAL_MEDIUM);
    donationProto.setTransactiontype(PaymentProto.TransactionType.DONATE_FUND);
    donationProto.setTransactionstatus(PaymentProto.TransactionStatus.TRANSACTION_APPROVED);
    manualDonateConfirmationStart(donationProto);
    setConfirmationSuccessfulVisible(false)
  };

  const ConfirmationMessage = () => (
    <SafeAreaView>
      <Modal
        visible={confirmationMessageVisible}
        transparent={true}
        animationType="slide"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setConfirmationMessageVisible(false)
        }
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 45 }]}>
            <Text center style={{ fontSize: 18, fontWeight: "700" }}>
              Donation Successfull!
            </Text>
            <View style={{ paddingVertical: 25, alignItems: "center" }}>
             <TickIconComponent/>
            </View>
            <View style={{ paddingHorizontal: WIDTH-350 }}>
              <Button onPress={() => setConfirmationMessageVisible(false)}>
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
        visible={confirmationSuccessfulVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setConfirmationSuccessfulVisible(!confirmationSuccessfulVisible)
        }
      >
    
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 45 }]}>
            <Formik
          initialValues={{
            amount: "",
            remarks:" "
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
              <ErrorMessage error={errors.amount} visible={touched.amount} />
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
              <ErrorMessage error={errors.remarks} visible={touched.remarks} />
              <Block style={{ flex: 0, paddingVertical: 10 }}>
                {!errors.receiverName && !errors.amount ? (
                  <Button onPress={handleSubmit}>
                    {manualDonateConfirmationData.isLoading ? (
                      <>
                       <CustomActivityIndicator
                      label="Requesting..."
                      isLoading={manualDonateConfirmationData.isLoading}
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
        </View>
      </Modal>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ||
      upcomingDonationsData.isLoading ||
      donationsMadeData.isLoading ||
      receiversData.isLoading ||
      profileData.isLoading ?(
        <Block center middle>
          <ActivityIndicator size="large" color={theme.colors.primary2} />
        </Block>
      ) : (
        <>
          <Block
            style={{
              flex: 0.26,
            }}
          >
            <ImageBackground
              style={{
                height: "90%",
                width: "100%",
                flex: 1,
                justifyContent: "flex-end",
              }}
              imageStyle={{
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              source={require("../../../../assets/images/backgroundColor.png")}
            >
              <Block
                style={{
                  flex: 0.5,
                  paddingHorizontal: 16,
                }}
              >
                <Block
                  row
                  center
                  style={{
                    paddingHorizontal: 20,
                    borderRadius: 4,
                    shadowRadius: 4,
                    elevation: 4,
                    backgroundColor: theme.colors.white,
                  }}
                >
                  {profileData.profile.profilepic == "" ? (
                    <UserIconComponent height={45} width={45}/>
                  ) : (
                    <Image
                      source={{ uri: profileData.profile.profilepic }}
                      style={{ height: 50, width: 50, borderRadius: 30 }}
                    />
                  )}
                  <Block
                    style={{
                      flex: 4,
                      marginLeft: 6,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "700",
                        textTransform: "capitalize",
                        color:theme.colors.solidGray
                      }}
                    >
                      Hi, {profileData.profile.account.fullname.split(" ")[0]}!
                    </Text>
                    <Button
                      style={{ height: 30, width: 100, marginTop: 4 }}
                      onPress={() => navigation.navigate("Load Fund")}
                      // onPress={() =>  API.removeTokens()}
                    >
                      <Text
                        color={theme.colors.white}
                        style={{ fontSize: 16, fontWeight: "700" }}
                      >
                        Load Fund
                      </Text>
                    </Button>
                  </Block>

                  <Block
                    style={{
                      flex: 2,
                    }}
                  >
                    <Text
                      center
                      color={theme.colors.solidGray}
                      style={{ fontSize: 16, fontWeight: "700" }}
                    >
                      Balance
                    </Text>
                 
                       <NumberFormat
                    value={data.balance/100}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    renderText={formattedValue => <Text center style={{ fontSize: 20, fontWeight: "700",color:theme.colors.solidGray }}>{formattedValue}</Text>} 
                  />
                      {/*{data.balance}*/}
               
                  </Block>
                </Block>
              </Block>
            </ImageBackground>
          </Block>

          <Block style={{ flex: 0.74, marginTop: 10 }}>
            <Block style={{ paddingHorizontal: 20, paddingTop: 10 }}>
              <Block row style={{ flex: 0.2, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Upcoming Donations
                </Text>
                <Text
                  onPress={() => navigation.navigate("Upcoming Donations")}
                  style={{ fontSize: 16, fontWeight: "500" }}
                  color={theme.colors.solidGray}
                >
                  View All
                </Text>
              </Block>
              <Block style={{ flex: 1 }}>
                <FlatList
                  data={upcomingDonationsData.upcomingDonations.slice(0, 2)}
                  refreshControl={
                    <RefreshControl
                      colors={[theme.colors.primary2]}
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                  showsVerticalScrollIndicator={true}
                  keyExtractor={(item) => {
                    return item.scheduletransactionid.toString();
                  }}
                  ListEmptyComponent={() => (
                    <Block center style={{ marginTop: 30 }}>
                      <FontAwesome5
                        name="box-open"
                        size={45}
                        color={theme.colors.gray}
                      />
                      <Text
                        color={theme.colors.gray}
                        style={{ fontSize: 16, fontWeight: "700" }}
                      >
                        You don't have any upcoming donations data.
                      </Text>
                    </Block>
                  )}
                  renderItem={(post) => (
                    <DonationsDetail
                      profilePic={post.item.clientList[1].profilepic}
                      name={post.item.clientList[1].account.fullname}
                      amount={post.item.amount}
                      date={post.item.createdat}
                      textColor={theme.colors.black}
                    />
                  )}
                />
              </Block>
            </Block>

            <Block style={{ paddingHorizontal: 20 }}>
              <Block row style={{ flex: 0.2, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Donations Made
                </Text>
                <Text
                  onPress={() => navigation.navigate("Donations Made")}
                  style={{ fontSize: 16, fontWeight: "500" }}
                  color={theme.colors.solidGray}
                >
                  View All
                </Text>
              </Block>
              <Block style={{ flex: 1 }}>
                {/*<Text
                  style={{ fontSize: 16, fontWeight: "700" }}
                  color={theme.colors.primary2}
                >
                  Recent
                </Text>*/}

                <FlatList
                  data={donationsMadeData.donationsMade
                    .filter((transaction) => {
                      return transaction.transactiontype === 2;
                    })
                    .slice(0, 2)}
                  refreshControl={
                    <RefreshControl
                      colors={[theme.colors.primary2]}
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                  showsVerticalScrollIndicator={true}
                  keyExtractor={(item) => {
                    return item.transactionid.toString();
                  }}
                  ItemSeparatorComponent={() => (
                    <Block style={{ marginTop: 2 }} />
                  )}
                  ListEmptyComponent={() => (
                    <Block center style={{ marginTop: 30 }}>
                      <FontAwesome5
                        name="box-open"
                        size={45}
                        color={theme.colors.gray}
                      />
                      <Text
                        color={theme.colors.gray}
                        style={{ fontSize: 16, fontWeight: "700" }}
                      >
                        You don't have any donations made data.
                      </Text>
                    </Block>
                  )}
                  renderItem={(post) =>
                    post.item.clientList[1] != undefined ? (
                      <DonationsDetail
                        profilePic={post.item.clientList[1].profilepic}
                        name={post.item.clientList[1].account.fullname}
                        amount={post.item.amount}
                        date={post.item.createdat}
                        textColor={theme.colors.green}
                      />
                    ) : (
                      <Block style={{ paddingHorizontal: 18 }} />
                    )
                  }
                />
              </Block>
            </Block>

            <Block style={{ paddingHorizontal: 20 }}>
              <Block row style={{ flex: 0.2, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Receivers
                </Text>
                <Text
                  onPress={() => navigation.navigate("Receivers")}
                  style={{ fontSize: 16, fontWeight: "500" }}
                  color={theme.colors.solidGray}
                >
                  View All
                </Text>
              </Block>
              <Block style={{ flex: 1 }}>
                <FlatList
                  data={receiversData.receivers.clientsList.slice(0, 2)}
                  showsVerticalScrollIndicator={true}
                  keyExtractor={(item) => {
                    return item.clientid.toString();
                  }}
                  ItemSeparatorComponent={() => (
                    <Block style={{ marginTop: 2 }} />
                  )}
                  refreshControl={
                    <RefreshControl
                      colors={[theme.colors.primary2]}
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                  renderItem={(post) => (
                    <ReceiversDetail
                      profilePic={post.item.profilepic}
                      name={post.item.account.fullname}
                      clientType={post.item.clienttype}
                     onPress={() => {
                        setConfirmationSuccessfulVisible(!confirmationSuccessfulVisible)
                        setAccountData(post.item);
                  }}
                    />
                  )}
                />
              </Block>
            </Block>
          </Block>

          <FloatingButton
          onPress={() => navigation.navigate("Donate")}
          iconComponent={<DonateIconComponent/>}

          />
        </>
      )}
      {DonateModal()}
      {ConfirmationMessage()}
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
    paddingHorizontal:16
  },

});