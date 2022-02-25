import React, { useState, useCallback, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import * as theme from "constants/theme.js";
import {WIDTH} from "constants/theme.js";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Block, Text } from "components/Index.js";
import globalStyles from "utility/globalStyles.js";


export default ReceiversList = ({
  setReceiverId,
  setReceiverIdError,
  data,
  receiverName,
  setReceiverName,
  manualReceiversStart,
}) => {
  const [receiver, setReceiver] = useState(
    receiverName !== "" ? receiverName : ""
  );
  const [filteredDataSource, setFilteredDataSource] = useState(
    data.manualReceivers != null ? data.manualReceivers.clientsList : null
  );
  const [masterDataSource, setMasterDataSource] = useState(
    data.manualReceivers != null ? data.manualReceivers.clientsList : null
  );
  const [receiversListModalVisible, setReceiversListModalVisible] = useState(
    false
  );
  function searchFilterFunction(text) {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.account.fullname
          ? item.account.fullname.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
    } else {
      setMasterDataSource(masterDataSource);
    }
  }
  const onReceiverIdItem = useCallback(
    (name, id) => {
      setReceiver(name)
      setReceiverName(name);
      setReceiverId(id);
      setReceiversListModalVisible(false);
      setReceiverIdError(false);
    },
    [setReceiverId]
  );
  useEffect(() => {
    if (data.manualReceivers == null) {
      manualReceiversStart();
    } else {
      setFilteredDataSource(data.manualReceivers.clientsList);
      setMasterDataSource(data.manualReceivers.clientsList);
    }
  }, [data.manualReceivers]);

  const RenderReceiversListOptions = ({ name, email, id }) => (
    <TouchableOpacity
      onPress={() => onReceiverIdItem(name, id)}
      style={{ marginVertical: 2 }}
    >
      <Text bold style={{ paddingVertical: 4, fontSize: 14 }}>
        {name}({email})
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ paddingVertical: 6 }}>
      <Text bold style={{ fontSize: 16 }}>
        Receiver's name
      </Text>
      <TouchableOpacity
        style={globalStyles.customPicker}
        onPress={() => setReceiversListModalVisible(!receiversListModalVisible)}
      >
        <Block>
          <Text bold style={{ fontSize: 16, color: theme.colors.solidGray }}>
            {receiver}
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

      {receiversListModalVisible && (
        <View
          style={[
            globalStyles.modal,
            {
              width: WIDTH - 30,
              height: 235,
              padding: 0,
              paddingTop: 2,
            },
          ]}
        >
          <Block style={globalStyles.searchContainer}>
            <Block style={globalStyles.vwSearch}>
              <Ionicons name="search" color="#676767" size={18} />
            </Block>
            <TextInput
              placeholder="Search"
              placeholderTextColor="#999999"
              style={styles.textInput}
              onChangeText={(text) => searchFilterFunction(text)}
            />
          </Block>

          <FlatList
            data={filteredDataSource}
            showsVerticalScrollIndicator={true}
            keyExtractor={(item) => {
              return item.clientid.toString();
            }}
            renderItem={(data) => (
              <Block style={{ flex: 0, paddingHorizontal: 10 }}>
                <RenderReceiversListOptions
                  name={data.item.account.fullname}
                  email={data.item.account.email}
                  id={data.item.account.accountid}
                />
              </Block>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});
