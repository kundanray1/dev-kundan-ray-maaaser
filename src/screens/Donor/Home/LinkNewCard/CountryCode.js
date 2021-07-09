import React, { useState, useCallback } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  Dimensions,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as theme from "./../../../../constants/theme.js";
import country from "./../../../../constants/country.json";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  Block,
  Text,
} from "../../../../components/Index.js";
import styles from "../../../../utility/globalStyles.js";

const WIDTH = Dimensions.get("window").width;

export default SignUp = ({
  countryCode,setCountryCode
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
    (code) => {
      setCountryCode(code);
      setCountryCodeModalVisible(false);
    },
    [setCountryCode]
  );


  const RenderCountryCodeOptions = ({ code, url, name }) => (
    <TouchableOpacity
      onPress={() => onCountryCodeItem(code)}
      style={{ marginVertical: 2 }}
    >
      <Block row>
        {/*<SvgUri
      width="20"
      height="20"
      source={{
        uri:  `https:${url}`
      }}
    />*/}
        <Text bold style={{ paddingVertical: 4, fontSize: 18 }}>
          {name}
        </Text>
        <Text bold style={{ paddingVertical: 4, fontSize: 18 }}>
          ({code})
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
        <Block>
          <Text bold style={{ fontSize: 16, color: theme.colors.solidGray }}>
            {countryCode}
          </Text>
        </Block>
        <Block style={{ alignItems: "flex-end" }}>
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
        <View style={[styles.container,{marginTop:"90%"}]}>
          <View
            style={[styles.modal, { width: WIDTH - 30, height: 235 }]}
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
                return data.alpha3;
              }}
              renderItem={(data) => (
                <Block style={{flex:0,paddingHorizontal:10}}>
                <RenderCountryCodeOptions
                  code={data.item.alpha3}
                  url={data.item.file_url}
                  name={data.item.name}
                />
                </Block>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
