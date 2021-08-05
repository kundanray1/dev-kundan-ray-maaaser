import React,{useEffect} from "react";
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Text,CustomActivityIndicator,FloatingButton } from "../../../components/Index.js";
import {Individual,Organization} from "./Dummy.js";
import DonateIconComponent from "./../../../assets/icons/DonateIconComponent";
import API from "../../../api/API.js";

const More = ({navigation,logout,loginData,logoutClear,loginClear,userLoggedOut,data}) => {
  useEffect(()=>{
    if(data.logout!==null){
      if(data.logout.success){
        loginClear();
        logoutClear();
        userLoggedOut();
      }
    }
  },[data.logout])


  const RenderOptions = ({ image, label,navigate }) => (
    <TouchableOpacity activeOpacity={0.8} style={{ marginVertical: 10 }} onPress={()=>{
      if(label=="Log out"){
        logout();
      }else{
      navigation.navigate(navigate)
      }
    }}>
    <Block row style={{
            flex: 1,
            alignItems: "center",

          }}>
             {image}
          <Text
            style={{ fontSize: 16, fontWeight: "700",paddingHorizontal:14 }}
            color={theme.colors.solidGray}
          >
            {label}{" "}
          </Text>
    </Block>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1}}> 
      <Block style={{ flex: 0, marginTop: 10, paddingHorizontal: 16 }}>
       {data.isLoading ? (
                    <CustomActivityIndicator
                      isLoading={data.isLoading}
                      label="Logging out..."
                    />
                  ) : (
                  <Block style={{flex:0}}/>
          )}
        <FlatList
          data={ loginData.employee==null?loginData.user.clienttype == 1?Individual:Organization:Individual}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
          renderItem={(post) => (
            <RenderOptions image={post.item.image} label={post.item.label} navigate={post.item.navigate}/>
          )}
        />
      </Block>
  {loginData.user.account.accounttype==2 &&

      <FloatingButton
        onPress={() => navigation.navigate("Donate")}
        iconComponent={<DonateIconComponent />}
      />
    }
    </SafeAreaView>
  );
};

export default More;
