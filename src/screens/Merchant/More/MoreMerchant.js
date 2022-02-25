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
  Pressable
} from "react-native";
import * as theme from "../../../constants/theme.js";
import {
  Block,
  Empty,
  CampaignCard,
  Text
} from "../../../components/Index.js";
import GreenBankIconComponent from "../../../assets/icons/greenBankIconComponent";
import QrOutlinedIcon from "../../../assets/icons/QrOutlinedIcon";
import UserIconComponent from "../../../assets/icons/UserIconOutlined";
import LockIconComponent from "../../../assets/icons/LockIconComponent";
import WalletIconComponent from "../../../assets/icons/WalletIconComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dummy from "../../../assets/images/dummy.png";
import { Card, CardText, CardTitle, Col, ColCard, Container, HeaderText, IconBackground,GraySafeAreaView, IconRow, Row, RowNoPadding, Section, Seperator, TextClick, UserIconPlace, SectionSeperator } from "../../../utility/styledComponents.js";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import background from "../../../assets/images/backgroundRectangle.png";
import Arrow from "../../../assets/icons/arrowRightOutlined";
const HEIGHT = Dimensions.get("window").height
 const MoreMerchant = ({navigation,logout,loginData,logoutClear,loginClear,userLoggedOut,data})=> {
  const [refreshing, setRefreshing] = useState(false);
  const type = [{ type: 'Suggestions', id: 1 }, { type: 'My Communities', id: 2 }]
  const details = [{ type: 'Re-building Mandir', des: 'Re-building Mandir after earthquake' }, { type: 'Newar Community', des: 'For newari people' }]
  
      console.log(data,'data', )

  useEffect(()=>{
    if(data.logout!==null){
      if(data.logout.success){
        loginClear();
        logoutClear();
        userLoggedOut();
        AsyncStorage.removeItem("LOGIN_DATA");
      }
    }
  },[data.logout])

  return (
    <>
      <GraySafeAreaView style={{justifyContent: "flex-end", flex:1, height:'60%' }}>
        <Container style={{flex:0.4}}>
          <Col style={{ justifyContent: 'center', alignItems: 'center' }} >
            <Seperator/>
            <Seperator/>
            <Image source={dummy} />
            <Seperator />
            <CardTitle>
              Nabil Merchant
            </CardTitle>
            <Text h4>  
              nabil.merchant@gmail.com</Text>
          </Col>

        </Container>

  <SectionSeperator/>
        <Block middle style={{ flex:0.6 }}>
        <ImageBackground
            style={{
              overflow:'visible',
              zIndex:1,
              width: "90%",
              justifyContent: 'center',
              paddingVertical: 20,
              alignSelf:'center',
              position:'absolute',
              bottom:'90%'
            }}
            imageStyle={{
              borderRadius: 10,
            width:"100%"            }}
            source={background}
          >
            <Row>
              <Col>
                <Text h4 light color="white">
                  Balance
                </Text>
                <Seperator/>

                <Text bold h4 color="white">
                  $240.00
                </Text>
              </Col>
              <Col>
              <WalletIconComponent/>
           <Seperator/>
                <Text h4 color="white">
                  Withdraw
                </Text>
              </Col>
            </Row>
          </ImageBackground>
          <Container style={{backgroundColor:theme.colors.white, flex:1, borderTopLeftRadius:20,borderTopRightRadius:20, justifyContent:'center', paddingHorizontal:0}}>
        
          <Row>
            <IconRow>
              <IconBackground>
                <UserIconComponent />
              </IconBackground>
              <Text>
                Profie
              </Text>
            </IconRow>
            <Arrow />
          </Row>
          <Row>
            <IconRow>
              <IconBackground style={{backgroundColor:'#DCF3FF'}}>
                <QrOutlinedIcon />
              </IconBackground>
              <Text   >
                QR Code
              </Text>
            </IconRow>
            <Arrow />
          </Row>
          <Row>
            <IconRow>
              <IconBackground style={{backgroundColor:'#E2F4EF'}}>
                <GreenBankIconComponent />
              </IconBackground>
              <Text   >
                Linked Account
              </Text>
            </IconRow>
            <Arrow />
          </Row>
          <Row>
            <IconRow>
              <IconBackground style={{backgroundColor:'#FFEFE2'}}>
                <LockIconComponent />
              </IconBackground>
              <Text   >
                Password
              </Text>
            </IconRow>
            <Arrow />
          </Row>
          <Row>
            <IconRow>       
                     <TouchableOpacity  style={{flexDirection:'row'}} onPress={()=>logout()} >
              <IconBackground style={{backgroundColor:'#FFEFE2'}}>
                <LockIconComponent />
              </IconBackground>

              <Text>
                Logout
              </Text>
              </TouchableOpacity>
            </IconRow>
            <Arrow />
          </Row>
</Container>
        </Block>
      </GraySafeAreaView>
    </>
  )
}

export default MoreMerchant;
















