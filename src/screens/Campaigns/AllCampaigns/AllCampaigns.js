import React, { useState, useEffect,useRef } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
  TextInput
} from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Empty, CampaignCard,Text,ErrorMessage,FloatingButton } from "../../../components/Index.js";
import TransactionsSearchIconComponent from "../../../assets/icons/transactionsSearchIconComponent.js";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
const WIDTH = Dimensions.get("window").width;
import { MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";
import CountryCode from "./CountryCode";
import DonateIconComponent from "./../../../assets/icons/DonateIconComponent";
import searchStyles  from "../../../utility/globalStyles.js";
import { Modalize } from "react-native-modalize";
import { Portal } from 'react-native-portalize';

const AllCampaigns = ({
  navigation,
  data,
  loginData,
  allCampaigns,
  campaignId,
  allCampaignsSearch
}) => {
  const [countryName, setCountryName] = useState("");
  const [search, setSearch] = useState();
  const [fromDate, setFromDate] = useState("2021-05-03T15:21:15.513Z");
  const [showFromDate, setShowFromDate] = useState(false);
  const [toDate, setToDate] = useState("2021-09-03T15:21:15.513Z");
  const [showToDate, setShowToDate] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [dateError, setDateError] = useState(false);
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
  setFromDate("2021-05-03T15:21:15.513Z");
  setToDate("2021-09-03T15:21:15.513Z");
  setCountryCode();
  setCountryName("")
  setDateError(false)
  };

  const onPressSubmitApply = () => {
    if((new Date(fromDate).getTime())>(new Date(toDate).getTime())){
    setDateError(true)
    }else{
      setDateError(false)
      allCampaignsSearch({
      fromDate:new Date(fromDate).getTime(),
      toDate:new Date(toDate).getTime(),
      country:countryCode==undefined?"":countryCode,
      search:search==undefined?"":" ",
    })
     onPressReset();
    modalizeRef.current?.close();
    }
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
       <TouchableOpacity
              activeOpacity={0.8}
              onPress={onOpen}
              style={{ alignItems: "flex-end",marginRight:16,justifyContent:"center" }}
                >
                   <TransactionsSearchIconComponent height={25} width={20}/>
                </TouchableOpacity>
      ),
    });
  }, [navigation]);
  
const modalizeRef = useRef();

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  

function searchFilterFunction(text) {
    if(text){
      allCampaignsSearch({
      fromDate:new Date(fromDate).getTime(),
      toDate:new Date(toDate).getTime(),
      country:countryCode==undefined?"":countryCode,
      search:text
    })
    }else{
      allCampaignsSearch({
      fromDate:new Date(fromDate).getTime(),
      toDate:new Date(toDate).getTime(),
      country:countryCode==undefined?"":countryCode,
      search:""
    })
    }
  }
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
        <Block style={{ flex: 0, marginTop: 6 }}>
          <FlatList
            data={data.allCampaignsSearch.campaignsList}
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
                  <Empty iconName="campaigns" title="No campaigns data." />
                )}
            ListFooterComponent={() => (
              <Block style={{ marginVertical: 40, flex: 0 }} />
            )}
            renderItem={(post) => (
              (post.item.campaignstarter.account.accountid !==loginData.user.account.accountid && post.item.campaignstatus == 1) &&
             <Block style={{marginTop:12}}>
              <CampaignCard
                image={post.item.thumbnailurl}
                label={post.item.title}
                targetAmount={post.item.targetamount}
                collectedAmount={post.item.collectedamount}
                date={post.item.createdat}
                navigation={navigation}
                campaignstatus={post.item.campaignstatus}
                countryCode={post.item.countrycode}
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
       {loginData.user.account.accounttype==2 &&
      <FloatingButton
        onPress={() => navigation.navigate("Donate")}
        iconComponent={<DonateIconComponent />}
      />
    }
     <Portal>
      <Modalize
        ref={modalizeRef}
        snapPoint={250}
        modalHeight={250}
        withHandle={false}
      >
      <View
            style={{ width: "100%", paddingHorizontal: 18 }}
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
                      fromDate=="2021-05-03T15:21:15.513Z"?"":
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
                    maximumDate={new Date()}
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
                      toDate=="2021-09-03T15:21:15.513Z"?"":
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
             <ErrorMessage
                error={"Please enter a valid date"}
                visible={dateError}
              />
               <CountryCode
                countryCode={countryCode}
                setCountryCode={setCountryCode}
                countryName={countryName}
                setCountryName={setCountryName}
              />
           
            <Button onPress={onPressSubmitApply}>
              <Text button style={{ fontSize: 18 }}>
                Apply
              </Text>
            </Button>
          </View>
      </Modalize>
      </Portal>
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
