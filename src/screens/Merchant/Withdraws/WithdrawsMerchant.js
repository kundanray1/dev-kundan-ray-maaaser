import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
  Dimensions,
  ImageBackground,
  View,
  Image,
  SectionList,

  Pressable,
  TextInput,

} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Empty,
  Text,

  ReceiverTransactionDetailCard,
} from "../../../components/Index.js";
import TransactionsSearchIconComponent from "../../../assets/icons/transactionsSearchIconComponent.js";
import BellIconComponent from "../../../assets/icons/bellIconComponent";
import CardIconComponent from "../../../assets/icons/cardIconComponent";
import ManualDonationIconComponent from "../../../assets/icons/ManualDonationIconComponent";
import SmallYellowBankIcon from "../../../assets/icons/SmallYellowBankIcon";
import dummy from "../../../assets/images/dummy.png";
import BwScreen from "../../../components/BwScreen.js";
import { Card, CardText, CardTitle, ColCard, Container, HeaderText, Row, RowNoPadding, Seperator, TextClick, UserIconPlace } from "../../../utility/styledComponents.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import searchStyles from "../../../utility/globalStyles.js";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
const dummydata = [{ "title": "14 Feb, 2022", "data": [{ "transactionid": "4a36669848714c99987e90dfdc489b9e", "trackingid": "vTev78", "amount": 200, "donoraccountid": "d0c0f6f323964e7193b5522c46e237a6", "receiveraccountid": "4c37e6d0bc2c4cb8bd44306c5e75462e", "transactionstatus": 1, "transactiontype": 2, "transactionmedium": 3, "refid": "", "remark": "Bb", "addedby": "d0c0f6f323964e7193b5522c46e237a6", "cardid": "", "bankid": "", "campaignid": "", "createdat": 1644815453022, "updatedat": 0, "transactiontimestamp": 0, "clientList": [{ "clientid": "e21f8a92389b4407b517a247cf641fe4", "profilepic": "https://storage.googleapis.com/maaser_resources/89836d7840194ba98d8716b3d6803fdb.jpg", "bio": "", "clienttype": 1, "addressesList": [], "contactsList": [], "account": { "accountid": "d0c0f6f323964e7193b5522c46e237a6", "email": "Joshan.pradhan@treeleaf.ai", "phone": "", "fullname": "Donated to Kundan Ray", "countrycode": "AFG", "password": "", "isdeleted": false, "isfirstlogin": false, "accounttype": 2, "accountstatus": 0, "isemailverified": false, "isphoneverified": false, "iskycverified": false, "createdat": 0, "updatedat": 0 }, "accountid": "" }, { "clientid": "b6229d7aa25043ee8e054acb9faa9d9a", "profilepic": "https://storage.googleapis.com/maaser_resources/a18a5e2704e64d608b50ac96c4199298.jpg", "bio": "", "clienttype": 1, "addressesList": [], "contactsList": [], "account": { "accountid": "4c37e6d0bc2c4cb8bd44306c5e75462e", "email": "Kundan.ray@treeleaf.ai", "phone": "", "fullname": "Kundan ray", "countrycode": "NPL", "password": "", "isdeleted": false, "isfirstlogin": false, "accounttype": 3, "accountstatus": 0, "isemailverified": false, "isphoneverified": false, "iskycverified": false, "createdat": 0, "updatedat": 0 }, "accountid": "" }], "donoraddress": "" }] }, { "title": "08 Feb, 2022", "data": [{ "transactionid": "a70f3262f3b4476c95058363ba22481f", "trackingid": "FiPgX6", "amount": 100, "donoraccountid": "9c3310486ee040a7b39853f9b7d67c86", "receiveraccountid": "4c37e6d0bc2c4cb8bd44306c5e75462e", "transactionstatus": 1, "transactiontype": 4, "transactionmedium": 3, "refid": "f4a0a0b5360949569689036df2e90827", "remark": "dafsf", "addedby": "9c3310486ee040a7b39853f9b7d67c86", "cardid": "", "bankid": "", "campaignid": "", "createdat": 1644316811724, "updatedat": 0, "transactiontimestamp": 0, "clientList": [{ "clientid": "6ca417da7fa44f6780d44641e176b2ed", "profilepic": "https://storage.googleapis.com/maaser_resources/a18a5e2704e64d608b50ac96c4199298.jpg", "bio": "", "clienttype": 1, "addressesList": [], "contactsList": [], "account": { "accountid": "9c3310486ee040a7b39853f9b7d67c86", "email": "sakshamta.manandhar+dind@treeleaf.ai", "phone": "", "fullname": "Individual Donor", "countrycode": "ALA", "password": "", "isdeleted": false, "isfirstlogin": false, "accounttype": 2, "accountstatus": 0, "isemailverified": false, "isphoneverified": false, "iskycverified": false, "createdat": 0, "updatedat": 0 }, "accountid": "" }, { "clientid": "b6229d7aa25043ee8e054acb9faa9d9a", "profilepic": "https://storage.googleapis.com/maaser_resources/a18a5e2704e64d608b50ac96c4199298.jpg", "bio": "", "clienttype": 1, "addressesList": [], "contactsList": [], "account": { "accountid": "4c37e6d0bc2c4cb8bd44306c5e75462e", "email": "Kundan.ray@treeleaf.ai", "phone": "", "fullname": "Kundan ray", "countrycode": "NPL", "password": "", "isdeleted": false, "isfirstlogin": false, "accounttype": 3, "accountstatus": 0, "isemailverified": false, "isphoneverified": false, "iskycverified": false, "createdat": 0, "updatedat": 0 }, "accountid": "" }], "campaign": { "campaignid": "f4a0a0b5360949569689036df2e90827", "targetamount": 0, "countrycode": "", "currencycode": "Save child", "title": "", "beneficiarytype": 0, "beneficiaryaccountid": "", "categorytype": 0, "description": "", "collectedamount": 0, "thumbnailurl": "", "accountid": "", "allowsubcampaign": false, "campaignstatus": 0, "availabletype": 0, "createdat": 0, "updatedat": 0, "subcampaignsList": [], "campaignbudgetingList": [] }, "donoraddress": "" }] }, { "title": "04 Feb, 2022", "data": [{ "transactionid": "8fccab99f72a45d891cf6733b9cd95df", "trackingid": "t6KmR6", "amount": 200, "donoraccountid": "d0c0f6f323964e7193b5522c46e237a6", "receiveraccountid": "4c37e6d0bc2c4cb8bd44306c5e75462e", "transactionstatus": 1, "transactiontype": 4, "transactionmedium": 3, "refid": "f4a0a0b5360949569689036df2e90827", "remark": "Ghh", "addedby": "d0c0f6f323964e7193b5522c46e237a6", "cardid": "", "bankid": "", "campaignid": "", "createdat": 1643961337320, "updatedat": 0, "transactiontimestamp": 0, "clientList": [{ "clientid": "e21f8a92389b4407b517a247cf641fe4", "profilepic": "https://storage.googleapis.com/maaser_resources/89836d7840194ba98d8716b3d6803fdb.jpg", "bio": "", "clienttype": 1, "addressesList": [], "contactsList": [], "account": { "accountid": "d0c0f6f323964e7193b5522c46e237a6", "email": "Joshan.pradhan@treeleaf.ai", "phone": "", "fullname": "Donated to Kundan Ray", "countrycode": "AFG", "password": "", "isdeleted": false, "isfirstlogin": false, "accounttype": 2, "accountstatus": 0, "isemailverified": false, "isphoneverified": false, "iskycverified": false, "createdat": 0, "updatedat": 0 }, "accountid": "" }, { "clientid": "b6229d7aa25043ee8e054acb9faa9d9a", "profilepic": "https://storage.googleapis.com/maaser_resources/a18a5e2704e64d608b50ac96c4199298.jpg", "bio": "", "clienttype": 1, "addressesList": [], "contactsList": [], "account": { "accountid": "4c37e6d0bc2c4cb8bd44306c5e75462e", "email": "Kundan.ray@treeleaf.ai", "phone": "", "fullname": "Kundan ray", "countrycode": "NPL", "password": "", "isdeleted": false, "isfirstlogin": false, "accounttype": 3, "accountstatus": 0, "isemailverified": false, "isphoneverified": false, "iskycverified": false, "createdat": 0, "updatedat": 0 }, "accountid": "" }], "campaign": { "campaignid": "f4a0a0b5360949569689036df2e90827", "targetamount": 0, "countrycode": "", "currencycode": "Save child", "title": "", "beneficiarytype": 0, "beneficiaryaccountid": "", "categorytype": 0, "description": "", "collectedamount": 0, "thumbnailurl": "", "accountid": "", "allowsubcampaign": false, "campaignstatus": 0, "availabletype": 0, "createdat": 0, "updatedat": 0, "subcampaignsList": [], "campaignbudgetingList": [] }, "donoraddress": "" }, { "transactionid": "43fd746702434fcb91abee64e685565b", "trackingid": "wIkmu9", "amount": 500000, "donoraccountid": "d0c0f6f323964e7193b5522c46e237a6", "receiveraccountid": "4c37e6d0bc2c4cb8bd44306c5e75462e", "transactionstatus": 1, "transactiontype": 4, "transactionmedium": 3, "refid": "f4a0a0b5360949569689036df2e90827", "remark": "Donate", "addedby": "d0c0f6f323964e7193b5522c46e237a6", "cardid": "", "bankid": "", "campaignid": "", "createdat": 1643961127067, "updatedat": 0, "transactiontimestamp": 0, "clientList": [{ "clientid": "e21f8a92389b4407b517a247cf641fe4", "profilepic": "https://storage.googleapis.com/maaser_resources/89836d7840194ba98d8716b3d6803fdb.jpg", "bio": "", "clienttype": 1, "addressesList": [], "contactsList": [], "account": { "accountid": "d0c0f6f323964e7193b5522c46e237a6", "email": "Joshan.pradhan@treeleaf.ai", "phone": "", "fullname": "Donated to Kundan Ray", "countrycode": "AFG", "password": "", "isdeleted": false, "isfirstlogin": false, "accounttype": 2, "accountstatus": 0, "isemailverified": false, "isphoneverified": false, "iskycverified": false, "createdat": 0, "updatedat": 0 }, "accountid": "" }, { "clientid": "b6229d7aa25043ee8e054acb9faa9d9a", "profilepic": "https://storage.googleapis.com/maaser_resources/a18a5e2704e64d608b50ac96c4199298.jpg", "bio": "", "clienttype": 1, "addressesList": [], "contactsList": [], "account": { "accountid": "4c37e6d0bc2c4cb8bd44306c5e75462e", "email": "Kundan.ray@treeleaf.ai", "phone": "", "fullname": "Kundan ray", "countrycode": "NPL", "password": "", "isdeleted": false, "isfirstlogin": false, "accounttype": 3, "accountstatus": 0, "isemailverified": false, "isphoneverified": false, "iskycverified": false, "createdat": 0, "updatedat": 0 }, "accountid": "" }], "campaign": { "campaignid": "f4a0a0b5360949569689036df2e90827", "targetamount": 0, "countrycode": "", "currencycode": "Save child", "title": "", "beneficiarytype": 0, "beneficiaryaccountid": "", "categorytype": 0, "description": "", "collectedamount": 0, "thumbnailurl": "", "accountid": "", "allowsubcampaign": false, "campaignstatus": 0, "availabletype": 0, "createdat": 0, "updatedat": 0, "subcampaignsList": [], "campaignbudgetingList": [] }, "donoraddress": "" }] }]
const HEIGHT = Dimensions.get("window").height
const WithdrawsMerchant = ({ navigation, data, loginData, campaigns, campaignId, startACampaignThirdUpdateData, startACampaignThirdData }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [transactionssearch, setTransactionssearch] = useState(false);
  const type = [{ type: 'Suggestions', id: 1 }, { type: 'My Communities', id: 2 }]
  const details = [{ type: 'Re-building Mandir', des: 'Re-building Mandir after earthquake' }, { type: 'Newar Community', des: 'For newari people' }]
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setRefreshing(false);
  });

  console.log(data);
let transactionImage;
let fullname;
  const renderItems = ({ item }) => {
let transactionMedium=item.transactionmedium
// console.log(item.transactiontype,item.clientList[0].account.fullname)
    if (item.transactiontype == 4) {
      transactionImage =
        transactionMedium == 3 ? (
          <SmallYellowBankIcon height={30} width={30}/>
        ) : transactionMedium == 1 ? (
          <CardIconComponent height={33} width={27}/>
        ) : (
          <ManualDonationIconComponent />
        );
  
      //donate transactionType
    }
    else {
      transactionImage =
        transactionMedium == 3 ?(
          <ManualDonationIconComponent />
        ):null;
  
      //donate transactionType
    }

fullname= item.transactiontype==4?'Nabil Bank': item.clientList[0].account.fullname;

    return (
      <Block style={{ paddingHorizontal: 0 }}>
        <RowNoPadding style={{ textAlign: 'center' }} >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
<View style={{padding:5}}>
<Block middle center>
				{transactionImage}
			</Block>  
                </View>
            <View>
              <Text bold center h4>{fullname}</Text>
              <Text paragraph color={theme.colors.gray}> 2:32 PM</Text>
            </View>
          </View>
          <View>
            <Text h4 bold center >
              $500
            </Text>
          </View>
        </RowNoPadding>

       




      </Block>
    );
  };

  const renderHeader = ({ section }) => {
    return (
      <Block
        style={{
          backgroundcolor: theme.colors.gray2,
          paddingHorizontal: 0,
          paddingVertical: 8,
        }}
      >
        <Text
          color={theme.colors.gray}
          style={{ fontSize: 16, fontWeight: "700" }}
        >
          {section.title}
        </Text>
      </Block>
    );
  };



  return (
    <BwScreen header={
      <Row style={{ justifyContent: 'space-between', flexDirection: "row", }}>
        <View style={{ justifyContent: 'space-around' }}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: theme.colors.white }}
          >
            Withdraws
          </Text>
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '15%', alignItems: 'center' }}>
          <Text

            style={{ fontSize: 20, fontWeight: "700", color: theme.colors.white }}
          >
            <BellIconComponent /></Text>
          <View >
            <Image source={dummy} style={{ resizeMode: 'contain', width: 40, height: 40, borderRadius: 2, marginHorizontal: 10 }} />
          </View>
        </View>
      </Row>
    }
      body={
        <Container>
          {/* <Block row style={{ flex: 0 }}>
            <TouchableOpacity
              activeOpacity={0}
              // onPress={onOpen}
              style={{
                alignItems: "flex-end",
                marginRight: 16,
                justifyContent: "center",
              }}
            >
              <ReceiptIconComponent
                style={{ marginRight: 10 }}
                height={20}
                width={20}
              />
            </TouchableOpacity>

          </Block> */}  
          <Seperator/>
          <Block style={{ flex: 0, paddingHorizontal: 16, flexDirection: 'row', alingItems: 'center', justifyContent: 'center', }}>
            <Block style={searchStyles.boxSearchContainer}>
              <Block style={searchStyles.boxVwSearch}>
                <Ionicons name="search" color={theme.colors.gray2} size={18} style={{ alignSelf: 'center', }} />
              </Block>

              <TextInput
                placeholder="Search"
                placeholderTextColor={theme.colors.gray2}
                style={searchStyles.boxTextInput}
                onChangeText={(text) => searchFilterFunction(text)}
              // value={transactionssearch}
              />


              {transactionssearch ? (
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
            <TouchableOpacity
              activeOpacity={1}
              // onPress={onOpen2}
              style={{
                // alignItems: "flex-end",
                // margin: 5,
                width: 40,
                height: 40,
                alignSelf: 'center',
                justifyContent: "center",
                backgroundColor: '#F4F4F4',
                alignItems: 'center',
                borderRadius: 40,
                marginLeft: 20,
              }}
            >
              <TransactionsSearchIconComponent height={25} width={20} />
            </TouchableOpacity>
          </Block>
          {/* <Block center middle>
            <ActivityIndicator size="large" color={theme.colors.primary2} />
          </Block> */}
            <SectionList
              sections={dummydata}
              keyExtractor={(item, index) => item + index}
              renderItem={renderItems}
              renderSectionHeader={renderHeader}
              ListEmptyComponent={() => (
                <Empty iconName="transactions" title="You don't have any data." />
              )}
              refreshControl={
                <RefreshControl
                  colors={[theme.colors.primary2]}
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
              ListFooterComponent={() => (
                <Block
                  middle
                  center
                  style={{ marginBottom: 120, flex: 0 }}
                ></Block>
              )}
              ListFooterComponentStyle={{
                paddingVertical: 10,
              }}
            />
        </Container>

      }


    />
  )
}
export default WithdrawsMerchant;

















