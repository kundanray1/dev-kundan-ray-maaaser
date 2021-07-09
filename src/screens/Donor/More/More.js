import React,{useEffect} from "react";
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Text,CustomActivityIndicator } from "../../../components/Index.js";
import {Individual,Organization} from "./Dummy.js";

const More = ({navigation,logout,loginData,logoutClear,loginClear,userLoggedOut,data}) => {
  useEffect(()=>{
    if(data.logout!==null){
      if(data.logout.success){
        loginClear();
        logoutClear();
        userLoggedOut()
      }
    }
  },[data.logout])
  const RenderOptions = ({ image, label }) => (
    <TouchableOpacity activeOpacity={0.8} style={{ marginVertical: 10 }} onPress={()=>{
      if(label=="Logout"){
        logout();
      }else{
      navigation.navigate("Members")
      }
    }}>
    <Block row style={{
            flex: 1,
            alignItems: "center",

          }}>
             {image}
          <Text
            style={{ fontSize: 18, fontWeight: "700",paddingHorizontal:14 }}
            color={theme.colors.solidGray}
          >
            {label}{" "}
          </Text>
    </Block>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
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
          data={ loginData.user.clienttype == 1?Individual:Organization}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          ItemSeparatorComponent={() => <Block style={{ marginTop: 2 }} />}
          renderItem={(post) => (
            <RenderOptions image={post.item.image} label={post.item.label}/>
          )}
        />
      </Block>
    </SafeAreaView>
  );
};

export default More;
