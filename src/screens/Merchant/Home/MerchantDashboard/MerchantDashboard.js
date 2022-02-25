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
  Touchable,
  ScrollView,
  Pressable
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import {
  Block,
  Empty,
  CampaignCard,
} from "../../../../components/Index.js";
import PendingIconComponent from "../../../../assets/icons/PendingIconComponent";
import BellIconComponent from "../../../../assets/icons/bellIconComponent";
import BlueWalletIcon from "../../../../assets/icons/BlueWalletIcon";
import TickComponent from "../../../../assets/icons/TickComponent";
import dummy from "../../../../assets/images/dummy.png";
import Text from "../../../../components/Text";
import CheckboxIconComponent from "../../../../assets/icons/CheckboxIconComponent";
import BwScreen from "../../../../components/BwScreen.js";
import { CardText, CardTitle, ColCard, Container, HeaderText, IconBackground, Row, RowNoPadding, SectionSeperator, Seperator, SmallCard, TextClick, UserIconPlace } from "../../../../utility/styledComponents.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import PercentageBar from "../../../../components/PercentageBar.js";
import NumberFormat from "react-number-format";

const HEIGHT = Dimensions.get("window").height
const MerchantDashboard = ({ navigation, data, loginData, campaigns, campaignId, startACampaignThirdUpdateData, startACampaignThirdData }) => {
  const [refreshing, setRefreshing] = useState(false);
  const type = [{ label: 'Assigned', id: 1, value: 15, icon: <CheckboxIconComponent /> }, { label: 'Completed', id: 1, value: 8, icon: <TickComponent /> }, { label: 'Pending', id: 1, value: 7, icon: <PendingIconComponent /> }, { label: 'Total Balance', id: 1, value: '$1000.98', icon: <BlueWalletIcon /> },]
  const details = [{ type: 'Re-building Mandir', des: 'Re-building Mandir after earthquake' }, { type: 'Newar Community', des: 'For newari people' }]
  console.log(data);

  const ACPT = () => {

return( 
    type.map((data, i) => {
      return (

        <SmallCard key={i} style={{ width: 180, zIndex: 2, margin: 5 }}>
          <RowNoPadding style={{ paddingHorizontal: 0, justifyContent: 'space-around' }} key={i}>
            <IconBackground style={{ backgroundColor: '#E1F7FF' }}>
              {data.icon}
            </IconBackground>
            <View>
              <Text h4 light color={theme.colors.solidGray} size={14}>
                {data.label}
              </Text>
              <Text bold>
                {data.value}
              </Text>
            </View>
          </RowNoPadding>

        </SmallCard>)
    })
  )



  }

  const Campaigns=()=>{
    return(
      <FlatList
      data={[
        { key: 'Devin' },
        { key: 'Dan' },
        { key: 'Dominic' },
        { key: 'Jackson' },
        { key: 'James' },
        { key: 'Joel' },
        { key: 'John' },
        { key: 'Jillian' },
        { key: 'Jimmy' },
        { key: 'Julie' },
      ]}
      renderItem={({ item }) =>
        <ColCard style={{ marginVertical: 10, marginHorizontal: 5 }}>
          <Text bold>
            Donate For Hunger
          </Text>
          <Text medium >
            For College
          </Text>
          <Text paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...
          </Text>
          <PercentageBar
            height={4}
            backgroundColor={"grey"}
            completedColor={theme.colors.primary2}
            percentage={70}
          />
          <Block row style={{ flex: 0 }}>
            <NumberFormat
              value={40000 / 100}
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
                    textTransform: "capitalize",
                    fontWeight: "700"
                  }}
                >
                  {formattedValue}
                </Text>
              )}
            />

            <NumberFormat
              value={80000 / 100}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              decimalScale={2}
              fixedDecimalScale={true}
              renderText={(formattedValue) => (
                <Text
                  color="#5F6062"
                  style={{ fontSize: 13 }}
                >
                  {" "}
                  raised of {formattedValue}
                </Text>
              )}
            />
          </Block>
        </ColCard>}
    />
    )
  }










  return (
    <BwScreen header={
      <Row style={{ justifyContent: 'space-between', flexDirection: "row", }}>
        <View style={{ justifyContent: 'space-around' }}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: theme.colors.white }}
          >
            Hi James!
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
        <>
          <Seperator />
          <Container>
            <ScrollView horizontal >
              {ACPT()}
            </ScrollView>
            <Seperator />
            <RowNoPadding>
              <Text h4 color={theme.colors.primary2}>
                Campaigns
              </Text>
              <Text color={theme.colors.gray}>
                View All
              </Text>
            </RowNoPadding>
           {Campaigns()}
          </Container>
        </>
      }


    />
  )
}
export default MerchantDashboard;

















