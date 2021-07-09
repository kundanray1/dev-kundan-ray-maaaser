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
import countryData from "./../../../../constants/country.json";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  Block,
  Text,
} from "../../../../components/Index.js";
import styles from "../../../../utility/globalStyles.js";

const WIDTH = Dimensions.get("window").width;

export default Country = ({
  country,setCountry,setCountryCode
}) => {
  const [search, setSearch] = useState();
  const [filteredDataSource, setFilteredDataSource] = useState(countryData);
  const [masterDataSource, setMasterDataSource] = useState(countryData);
  const [countryModalVisible, setCountryModalVisible] = useState(false);

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

  const onCountryItem = useCallback(
    (name,code) => {
      setCountry(name);
      setCountryCode(code);
      setCountryModalVisible(false);
    },
    [setCountry]
  );

  const RenderCountryOptions = ({ code, url, name }) => (
    <TouchableOpacity
      onPress={() => onCountryItem(name,code)}
      style={{ marginVertical: 2 }}
    >
      <Block row>
        <Text bold style={{ paddingVertical: 4, fontSize: 16 }}>
          {name}
        </Text>
      </Block>
    </TouchableOpacity>
  );

  return (    
  	<SafeAreaView style={{ paddingVertical: 6 }}>
      <Text bold style={{ fontSize: 16 }}>
        Country
      </Text>
      <TouchableOpacity
        style={styles.customPicker}
        onPress={() => setCountryModalVisible(!countryModalVisible)}
      >
        <Block style={{flex:3}}>
          <Text bold style={{ fontSize: 16, color: theme.colors.solidGray }}>
            {country}
          </Text>
        </Block>
        <Block style={{ flex:0.5,alignItems: "flex-end" }}>
          <AntDesign
            name="caretdown"
            size={16}
            color={theme.colors.solidGray}
          />
        </Block>
      </TouchableOpacity>
      <Modal
        visible={countryModalVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setCountryModalVisible(!countryModalVisible)
        }
      >
        <View style={[styles.container,{marginTop:"80%"}]}>
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
                <RenderCountryOptions
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
