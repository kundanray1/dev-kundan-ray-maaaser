import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Text,
  Empty,
  ErrorMessage,
  ReceiversDetail,
  CustomActivityIndicator,
} from "../../../../components/Index.js";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import { ManualValidationSchema } from "./../../../../utility/ValidationSchema.js";
import PaymentProto from "./../../../../protos/payment_pb";
import TickIconComponent from "./../../../../assets/icons/tickIconComponent.js";
import searchStyles from "../../../../utility/globalStyles.js";

const WIDTH = Dimensions.get("window").width;

const Receivers = ({
  data,
  loginData,
  receivers,
  manualDonateConfirmationStart,
  manualDonateConfirmationClear,
  manualDonateConfirmationData,
}) => {
  const [search, setSearch] = useState();
  const [accountData, setAccountData] = useState();
  const [amountFocus, setAmountFocus] = useState();
  const [remarksFocus, setRemarksFocus] = useState();
  const [donateModalVisible, setDonateModalVisible] = useState(false);
  const [
    receiversConfirmationMessageVisible,
    setReceiversConfirmationMessageVisible,
  ] = useState(false);
  const [filteredDataSource, setFilteredDataSource] = useState(
    data.receivers != null ? data.receivers.clientsList : null
  );
  const [masterDataSource, setMasterDataSource] = useState(
    data.receivers != null ? data.receivers.clientsList : null
  );

  useEffect(() => {
    if (data.receivers === null) {
      receivers();
    } else {
      setFilteredDataSource(data.receivers.clientsList);
      setMasterDataSource(data.receivers.clientsList);
    }
  }, [data.receivers]);

  useEffect(() => {
    if (manualDonateConfirmationData.manualDonateConfirmation !== null) {
      if (manualDonateConfirmationData.manualDonateConfirmation.success) {
        setDonateModalVisible(false);
        setReceiversConfirmationMessageVisible(true);
        manualDonateConfirmationClear();
      }
    }
  }, [manualDonateConfirmationData.manualDonateConfirmation]);

  function searchFilterFunction(text) {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        console.log(item.account);
        const itemData = item.account.fullname
          ? item.account.fullname.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setMasterDataSource(masterDataSource);
      setSearch(text);
    }
  }

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
    manualDonateConfirmationStart(donationProto);
    setDonateModalVisible(false);
  };

  const ReceiverConfirmationMessage = () => (
    <SafeAreaView>
      <Modal
        visible={receiversConfirmationMessageVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() => setReceiversConfirmationMessageVisible(false)}
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 45 }]}>
            <Text center style={{ fontSize: 18, fontWeight: "700" }}>
              Donation Successful!
            </Text>
            <View style={{ paddingVertical: 25, alignItems: "center" }}>
              <TickIconComponent />
            </View>
            <View style={{ paddingHorizontal: 30 }}>
              <Button
                onPress={() => setReceiversConfirmationMessageVisible(false)}
              >
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
        onRequestClose={() => setDonateModalVisible(!donateModalVisible)}
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() => setDonateModalVisible(!donateModalVisible)}
        >
          <TouchableWithoutFeedback>
            <View style={[styles.modal, { width: WIDTH - 45 }]}>
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
                          {manualDonateConfirmationData.isLoading ? (
                            <>
                              <CustomActivityIndicator
                                label="Requesting..."
                                isLoading={
                                  manualDonateConfirmationData.isLoading
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Block style={{ flex: 0, paddingHorizontal: 16 }}>
        <Block style={searchStyles.boxSearchContainer}>
          <Block style={searchStyles.boxVwSearch}>
            <Ionicons name="search" color={theme.colors.solidGray} size={18} />
          </Block>

          <TextInput
            placeholder="Search"
            placeholderTextColor={theme.colors.solidGray}
            style={searchStyles.boxTextInput}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
          />

          {search ? (
            <TouchableOpacity
              onPress={() => searchFilterFunction()}
              style={searchStyles.vwClear}
            >
              <Ionicons name="close-circle-sharp" color="black" size={18} />
            </TouchableOpacity>
          ) : (
            <Block style={searchStyles.vwClear} />
          )}
        </Block>
      </Block>

      {data.isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary2} />
      ) : (
        <Block style={{ flex: 0, marginTop: 10 }}>
          <FlatList
            data={filteredDataSource}
            showsVerticalScrollIndicator={true}
            keyExtractor={(item) => {
              return item.clientid.toString();
            }}
            ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
            ListFooterComponent={() => (
              <Block
                middle
                center
                style={{ marginBottom: 120, flex: 0 }}
              ></Block>
            )}
            ListFooterComponentStyle={{
              paddingVertical: 20,
            }}
            ListEmptyComponent={() => (
              <Empty iconName="receivers" title="You don't have any data." />
            )}
            renderItem={(post) => (
              <Block style={{ flex: 0, paddingHorizontal: 16 }}>
                <ReceiversDetail
                  profilePic={post.item.profilepic}
                  name={post.item.account.fullname}
                  clientType={post.item.clienttype}
                  onPress={() => {
                    setDonateModalVisible(!donateModalVisible);
                    setAccountData(post.item);
                  }}
                />
              </Block>
            )}
          />
        </Block>
      )}
      {DonateModal()}
      {ReceiverConfirmationMessage()}
    </SafeAreaView>
  );
};
export default Receivers;

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
