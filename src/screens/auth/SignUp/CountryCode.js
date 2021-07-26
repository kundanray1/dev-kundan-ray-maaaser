import React, { useState, useCallback } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Modal,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import * as theme from "./../../../constants/theme.js";
import country from "./../../../constants/country.json";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  Block,
  Text,
} from "../../../components/Index.js";
import SvgUri from "expo-svg-uri";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default CountryCode = ({
  countryName,countryCode,setCountryCode,setCountryCodeError,setCountryName
}) => {
  const [search, setSearch] = useState();
  const [filteredDataSource, setFilteredDataSource] = useState(country);
  const [masterDataSource, setMasterDataSource] = useState(country);
  const [countryCodeModalVisible, setCountryCodeModalVisible] = useState(false);

  function searchFilterFunction(text) {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
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

  const onCountryCodeItem = useCallback(
    (code,name) => {
      setCountryCode(code);
      setCountryCodeModalVisible(false);
      setCountryCodeError(false);
      setCountryName(name)
    },
    [setCountryCode]
  );


  const RenderCountryCodeOptions = ({ code, name }) => (
    <TouchableOpacity
      onPress={() => onCountryCodeItem(code,name)}
      style={{ marginVertical: 2 }}
    >
      <Block row>
        <Image
            source={{ uri: `https://www.countryflags.io/${code}/flat/64.png` }}
            style={{height:20,width:35}}
          />
        <Text style={{ paddingVertical: 4, fontSize: 15,justifyContent:"center",fontWeight:"700",marginLeft:14 }}>
          {code}
        </Text>
      </Block>
    </TouchableOpacity>
  );

 
  return (    
  	<SafeAreaView style={{ paddingVertical: 6 }}>
       <Text bold style={{ fontSize: 16 }}>
        Country Code
      </Text>
      <TouchableOpacity
        style={styles.customPicker}
        onPress={() => setCountryCodeModalVisible(!countryCodeModalVisible)}
      >
        <Block row>
         <Image
            source={{ uri: `https://www.countryflags.io/${countryCode}/flat/64.png` }}
            style={{height:20,width:35}}
          />
          <Text bold style={{ fontSize: 16, color: theme.colors.solidGray,marginLeft:12 }}>
            {countryName}
          </Text>
        </Block>
        <Block style={{ alignItems: "flex-end" }} >
          <AntDesign
            name="caretdown"
            size={16}
            color={theme.colors.solidGray}
          />
        </Block>
      </TouchableOpacity>
      <Modal
        visible={countryCodeModalVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setCountryCodeModalVisible(!countryCodeModalVisible)
        }
      >

        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() =>
            setCountryCodeModalVisible(!countryCodeModalVisible)
          }
        >
          <TouchableWithoutFeedback>

          <View
            style={[styles.modal, { width: WIDTH - 40, height: 235,marginTop:"108%" }]}
          >
            <Block style={styles.searchContainer}>
              <Block style={styles.vwSearch}>
                <Ionicons name="search" color="#676767" size={18} />
              </Block>

              <TextInput
                placeholder="Search"
                placeholderTextColor="#999999"
                style={styles.textInput}
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
              />

              {search ? (
                <TouchableOpacity
                  onPress={() => searchFilterFunction()}
                  style={styles.vwClear}
                >
                  <Ionicons name="close-circle-sharp" color="black" size={18} />
                </TouchableOpacity>
              ) : (
                <Block style={styles.vwClear} />
              )}
            </Block>

            <FlatList
              data={filteredDataSource}
              showsVerticalScrollIndicator={true}
              keyExtractor={(data) => {
                return data.code;
              }}
              renderItem={(data) => (
                <Block style={{flex:0,paddingHorizontal:10}}>
                <RenderCountryCodeOptions
                  code={data.item.code}
                  name={data.item.name}
                />
                </Block>
              )}
            />
          </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  alignItems:"center"

  },
  modal: {
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    borderRadius: 3,
    paddingTop: 2,

  },
  option: {
    alignItems: "flex-start",
  },
  customPicker: {
    height: 28,
    flexDirection: "row",
    paddingTop: 6,
    justifyContent: "space-between",
    borderColor: theme.colors.solidGray,
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical:6,
    
  },
  vwClear: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },

  vwSearch: {
    flex: 0.1,
    justifyContent: "center",
  },
  icSearch: {
    height: 20,
    width: 20,
  },
  searchContainer: {
    backgroundColor: theme.colors.white,
    width: "100%",
    height: 35,
    marginBottom: 6,
    flexDirection: "row",
    borderBottomWidth: 1,
    flex: 0,
    borderColor:theme.colors.gray2,
    paddingHorizontal:10,
    borderRadius: 2,
  },
});
