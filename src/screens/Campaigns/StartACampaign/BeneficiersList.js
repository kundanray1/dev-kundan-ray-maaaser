import React, { useState, useCallback, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  Dimensions,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import * as theme from "./../../../constants/theme.js";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Block, Text } from "../../../components/Index.js";
// import styles from "../../../utility/globalStyles.js";
import { useDispatch } from "react-redux";
import { receiversStart } from "./../../Donor/Home/Receivers/actions";

const WIDTH = Dimensions.get("window").width;

export default BeneficiersList = ({
  navigation,
  beneficierName,
  loginData,
  setBeneficierId,
  setBeneficierName,
  receiversData,
  setBeneficierIdError,
  disabled,
}) => {
  const [beneficier, setBeneficier] = useState();
  const [search, setSearch] = useState();
  const [filteredDataSource, setFilteredDataSource] = useState(
    receiversData.beneficiaryList.clientsList
  );
  const [masterDataSource, setMasterDataSource] = useState(
    receiversData.beneficiaryList.clientsList
  );
  const [
    beneficiersListModalVisible,
    setBeneficiersListModalVisible,
  ] = useState(false);

  const dispatch = useDispatch();

  function searchFilterFunction(text) {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        console.log(item);
        const itemData = item.account.fullname
          ? item.account.fullname.toUpperCase()
          : "".toUpperCase();
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

  const onBeneficierIdItem = useCallback(
    (name, id) => {
      setBeneficierName(name);
      setBeneficierId(id);
      setBeneficiersListModalVisible(false);
      setBeneficierIdError(false);
    },
    [setBeneficierId]
  );

  const RenderBeneficiersListOptions = ({ name, email, id }) => (
    <TouchableOpacity
      onPress={() => onBeneficierIdItem(name, id)}
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
        Beneficier's name
      </Text>
      <TouchableOpacity
        style={styles.customPicker}
        onPress={() =>
          setBeneficiersListModalVisible(!beneficiersListModalVisible)
        }
        disabled={disabled}
      >
        <Block>
          <Text bold style={{ fontSize: 16, color: theme.colors.solidGray }}>
            {beneficierName}
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
        visible={beneficiersListModalVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setBeneficiersListModalVisible(!beneficiersListModalVisible)
        }
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() =>
            setBeneficiersListModalVisible(!beneficiersListModalVisible)
          }
        >
          <TouchableWithoutFeedback>
            <View
              style={[
                styles.modal,
                { width: WIDTH - 30, height: 200, marginTop: "120%" },
              ]}
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
                    <Ionicons
                      name="close-circle-sharp"
                      color="black"
                      size={18}
                    />
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
                renderItem={(receiversData) =>
                  loginData.user.account.accountid !==
                    receiversData.item.account.accountid && (
                    <Block style={{ flex: 0, paddingHorizontal: 10 }}>
                      <RenderBeneficiersListOptions
                        name={receiversData.item.account.fullname}
                        email={receiversData.item.account.email}
                        id={receiversData.item.account.accountid}
                      />
                    </Block>
                  )
                }
              />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setBeneficiersListModalVisible(false);
                  navigation.navigate("Add Beneficiary");
                }}
                style={{
                  flex: 0,
                  paddingVertical: 8,
                  borderTopWidth: 1,
                  borderColor: theme.colors.gray2,
                }}
              >
                <Text
                  bold
                  style={{
                    fontSize: 18,
                    paddingHorizontal: 10,
                    color: theme.colors.primary2,
                  }}
                >
                  + Add beneficiary
                </Text>
              </TouchableOpacity>
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
    alignItems: "center",
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
    paddingVertical: 6,
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
    borderColor: theme.colors.gray2,
    paddingHorizontal: 10,
    borderRadius: 2,
  },
});
