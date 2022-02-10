import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  RefreshControl,
  Dimensions,
  ImageBackground,
  Text,
  View,
  Image,
  Touchable,
  Pressable
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Empty,
  CampaignCard,
  FloatingButton,
} from "../../../components/Index.js";
import AddIconComponent from "../../../assets/icons/addIconComponent";
import BellIconComponent from "../../../assets/icons/bellIconComponent";
import UserIconComponent from "../../../assets/icons/userIconComponent";
import WebIconComponent from "../../../assets/icons/WebIconComponent";
import Ellipse from "../../../assets/images/Ellipse.png";
import BwScreen from "../../../components/BwScreen.js";
import { Card, CardText, CardTitle, ColCard, Container, HeaderText, Row, RowNoPadding, TextClick, UserIconPlace } from "../../../utility/styledComponents.js";
import { TouchableOpacity } from "react-native-gesture-handler";

const HEIGHT = Dimensions.get("window").height
const Community = ({ navigation, data, loginData, campaigns, campaignId, startACampaignThirdUpdateData, startACampaignThirdData }) => {
  const [refreshing, setRefreshing] = useState(false);
  const type = [{ type: 'Suggestions', id: 1 }, { type: 'My Communities', id: 2 }]
  const details = [{ type: 'Re-building Mandir', des: 'Re-building Mandir after earthquake' }, { type: 'Newar Community', des: 'For newari people' }]

  return (
    <BwScreen header={
      <Row style={{ justifyContent: 'space-between', flexDirection: "row", }}>
        <View style={{ justifyContent: 'space-around' }}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: theme.colors.white }}
          >
            Communities
          </Text>
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '15%', alignItems: 'center' }}>
          <Text

            style={{ fontSize: 20, fontWeight: "700", color: theme.colors.white }}
          >
            <BellIconComponent /></Text>
          <Text
            style={{ fontSize: 20, fontWeight: "700", color: theme.colors.white }}
          >
            <UserIconComponent />
          </Text>
        </View>
      </Row>
    }
      body={
        <Container>
          {type.map((data, i) => {
            return (
              <>
                <View key={i}>
                  <HeaderText>
                    {data.type}
                  </HeaderText>

                  <RowNoPadding style={{ paddingRight: 0 }}>
                    {details.map((item, id) => {
                      return (
                     
                          <ColCard style={{ width: "47%" }}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Community Details')} style={{width:"100%"}}>
                            <CardTitle>
                              {item.type}
                            </CardTitle>
                            <RowNoPadding style={{ width: "90%", maxHeight: 50 }} >
                              <CardText>
                                {item.des}
                              </CardText>
                              <WebIconComponent />
                            </RowNoPadding>
                            <RowNoPadding>
                              <UserIconPlace>
                                <Image source={Ellipse} style={{ borderRadius: 30 }} />
                              </UserIconPlace>
                              <UserIconPlace>
                                <Image source={Ellipse} style={{ borderRadius: 30 }} />
                              </UserIconPlace>
                              <TextClick>
                                Join Group
                              </TextClick>
                            </RowNoPadding>
                            </TouchableOpacity>
                          </ColCard>
                
                      )
                    })}
                  </RowNoPadding>

                </View>
              </>
            )
          })}
        </Container>

      }

      floating={
        <FloatingButton
          iconComponent={<AddIconComponent />}
          onPress={() => navigation.navigate("New Community")}
        />
      }
    />
  )
}
export default Community;

















