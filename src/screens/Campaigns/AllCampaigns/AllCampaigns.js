import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
  Modal,
  View,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Empty, CampaignCard,Text } from "../../../components/Index.js";
import TransactionsSearchIconComponent from "../../../assets/icons/transactionsSearchIconComponent.js";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
const WIDTH = Dimensions.get("window").width;
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AllCampaigns = ({
  navigation,
  data,
  loginData,
  allCampaigns,
  campaignId,
  allCampaignsSearch
}) => {
  const [
    confirmationMessageVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);
  const [fromDate, setFromDate] = useState("2021-07-03T15:21:15.513Z");
  const [showFromDate, setShowFromDate] = useState(false);
  const [toDate, setToDate] = useState("2021-07-03T15:21:15.513Z");
  const [showToDate, setShowToDate] = useState(false);
  const [transactionsMedium, setTransactionsMedium] = useState();
  const [countryCode, setCountryCode] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    allCampaigns(loginData.user.account.accountid);
    setRefreshing(false);
  });
  useEffect(() => {
      allCampaigns(loginData.user.account.accountid);
  }, []);
   const onChangeFromDate = (event, selectedDate) => {
    const currentDate = selectedDate || fromDate;
    setShowFromDate(Platform.OS === "ios");
    setFromDate(currentDate);
    setShowFromDate(false);
  };
  const onChangeToDate = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setShowToDate(Platform.OS === "ios");
    setToDate(currentDate);
    setShowToDate(false);
  };
  const onPressReset = () => {
  setFromDate("2021-07-03T15:21:15.513Z");
  setToDate("2021-07-03T15:21:15.513Z");
  setCountryCode();
  };

  const onPressSubmitApply = () => {
    setConfirmationSuccessfulVisible(false)
    allCampaignsSearch({
      fromDate:new Date(fromDate).getTime(),
      toDate:new Date(toDate).getTime(),
      country:countryCode,
    })
     onPressReset();
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
       <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setConfirmationSuccessfulVisible(true)
              }}
              style={{ alignItems: "flex-end",marginRight:16,justifyContent:"center" }}
                >
                   <TransactionsSearchIconComponent height={25} width={20}/>
                </TouchableOpacity>
      ),
    });
  }, [navigation]);
    const ConfirmationMessage = () => (
    <SafeAreaView>
      <Modal
        visible={confirmationMessageVisible}
        transparent={true}
        animationType="slide"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setConfirmationSuccessfulVisible(!confirmationMessageVisible)
        }
      >
      <TouchableOpacity 
            style={styles.container} 
            activeOpacity={1} 
            onPressOut={()=>setConfirmationSuccessfulVisible(!confirmationMessageVisible)}
          >
         <TouchableWithoutFeedback>
          <View
            style={[styles.modal, { width: "100%", paddingHorizontal: 18 }]}
          >

          <Block style={{flex:0,alignItems:"center",paddingVertical:10}}>
          <Block style={{flex:0,backgroundColor:"#E2E2E2",width:WIDTH-280,borderRadius:10,paddingVertical:2}}/>
            </Block>
              <TouchableOpacity
                  activeOpacity={0.8}
                  style={{flexDirection:"row", justifyContent: "flex-end", paddingBottom: 8 }}
                  onPress={onPressReset}
                >
              <Text bold style={{ fontSize: 14, fontWeight: "700" }} color={theme.colors.red}>
                  Reset
                </Text>
                </TouchableOpacity>

            <Block row style={{ flex: 0 }}>
              <Block style={{ paddingVertical: 8 }}>
                <Text bold style={{ fontSize: 14, fontWeight: "700" }}>
                  From
                </Text>
                <TouchableOpacity
                  style={[styles.customPicker,{width:"95%"}]}
                  activeOpacity={0.8}
                  onPress={() => setShowFromDate(true)}
                >
                  <Text
                    bold
                    style={{
                      fontSize: 16,
                      color:"#999999",
                    }}
                  >
                   {
                      fromDate=="2021-07-03T15:21:15.513Z"?"":
                       moment(fromDate).format("DD/MM/YYYY")
                    }
                  </Text>
                  <Block style={{ alignItems: "flex-end" }}>
                    <MaterialCommunityIcons
                      name="calendar-month"
                      size={20}
                      color={theme.colors.primary2}
                    />
                  </Block>
                </TouchableOpacity>
                {showFromDate && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    textColor="red"
                    onChange={onChangeFromDate}
                  />
                )}
              </Block>

              <Block style={{ paddingVertical: 8 }}>
                <Text bold style={{ fontSize: 14, fontWeight: "700" }}>
                  To
                </Text>
                <TouchableOpacity
                  style={[styles.customPicker,{left:"10%"}]}
                  activeOpacity={0.8}
                  onPress={() => setShowToDate(true)}
                >
                  <Text
                    bold
                    style={{
                      fontSize: 16,
                      color:"#999999",

                    }}
                  >
                    {
                      toDate=="2021-07-03T15:21:15.513Z"?"":
                       moment(toDate).format("DD/MM/YYYY")
                    }
                  </Text>
                  <Block style={{ alignItems: "flex-end" }}>
                    <MaterialCommunityIcons
                      name="calendar-month"
                      size={20}
                      color={theme.colors.primary2}
                    />
                  </Block>
                </TouchableOpacity>
                {showToDate && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    maximumDate={new Date()}
                    value={new Date()}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    textColor="red"
                    onChange={onChangeToDate}
                  />
                )}
              </Block>
            </Block>
             <CountryCode
                countryCode={countryCode}
                setCountryCode={setCountryCode}
              />
            <Button onPress={onPressSubmitApply}>
              <Text button style={{ fontSize: 18 }}>
                Apply
              </Text>
            </Button>
          </View>
        </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary2} />
      ) : (
        <Block style={{ flex: 0, marginTop: 6 }}>
          <FlatList
            data={data.allCampaigns.campaignsList}
            showsVerticalScrollIndicator={true}
            keyExtractor={(item) => {
              return item.campaignid.toString();
            }}
            refreshControl={
              <RefreshControl
                colors={[theme.colors.primary2]}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            ListEmptyComponent={() => (
              <Empty
                iconName="campaigns"
                title="No any campaigns created yet."
              />
            )}
            ListFooterComponent={() => (
              <Block style={{ marginVertical: 40, flex: 0 }} />
            )}
            renderItem={(post) => (
              post.item.campaignstarter.account.accountid !==loginData.user.account.accountid &&
             <Block style={{marginTop:12}}>
              <CampaignCard
                image={post.item.thumbnailurl}
                label={post.item.title}
                targetAmount={post.item.targetamount}
                collectedAmount={post.item.collectedamount}
                date={post.item.createdat}
                navigation={navigation}
                campaignstatus={post.item.campaignstatus}
                onPress={() => {
                      campaignId(post.item.campaignid)
                      navigation.navigate("Campaign Details");
                }}
              />
             </Block>
            )}
          />
        </Block>
      )}
      {ConfirmationMessage()}
    </SafeAreaView>
  );
};

export default AllCampaigns;

const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modal: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    paddingVertical: 10,
  },
  customPicker: {
    height: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor:"#E7E7E7",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 6,
  },
});
