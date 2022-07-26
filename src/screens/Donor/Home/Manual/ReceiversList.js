import React, { useState, useCallback, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  Dimensions,
  Modal,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";
import * as theme from "./../../../../constants/theme.js";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Block, Text } from "../../../../components/Index.js";
// import styles from "../../../../utility/globalStyles.js";
import { useDispatch } from "react-redux";
import { manualReceiversStart } from "./actions";

const WIDTH = Dimensions.get("window").width;

export default ReceiversList = ({ receiverId, setReceiverId,setReceiverName, data,setReceiverIdError }) => {
  const [receiver, setReceiver] = useState();
  const [search, setSearch] = useState();
  const [filteredDataSource, setFilteredDataSource] = useState(
    data.manualReceivers != null ? data.manualReceivers.clientsList : null
  );
  const [masterDataSource, setMasterDataSource] = useState(
    data.manualReceivers != null ? data.manualReceivers.clientsList : null
  );
  const [receiversListModalVisible, setReceiversListModalVisible] = useState(
    false
  );
  const dispatch = useDispatch();

  function searchFilterFunction(text) {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        console.log(item);
        const itemData = item.account.fullname ? item.account.fullname.toUpperCase() : "".toUpperCase();
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

  const onReceiverIdItem = useCallback(
    (name, id) => {
      setReceiver(name);
      setReceiverName(name)
      setReceiverId(id);
      setReceiversListModalVisible(false);
      setReceiverIdError(false)
    },
    [setReceiverId]
  );
  useEffect(() => {
    if (data.manualReceivers == null) {
      dispatch(manualReceiversStart());
    } else {
      setFilteredDataSource(data.manualReceivers.clientsList);
      setMasterDataSource(data.manualReceivers.clientsList);
    }
  }, [data.manualReceivers]);

  const RenderReceiversListOptions = ({ name,email, id }) => (
    <TouchableOpacity
      onPress={() => onReceiverIdItem(name, id)}
      style={{ marginVertical: 2 }}
    >
      <Text bold style={{ paddingVertical: 4, fontSize: 16 }}>
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
        style={styles.customPicker}
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
      <Modal
        visible={receiversListModalVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setReceiversListModalVisible(!receiversListModalVisible)
        }
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() =>
             setReceiversListModalVisible(!receiversListModalVisible)
          }
        >
          <TouchableWithoutFeedback>

          <View style={[styles.modal, { width: WIDTH - 30, height: 235,marginTop:"51.5%" }]}>
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