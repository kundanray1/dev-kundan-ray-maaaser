import React, { useState, useCallback, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  Dimensions,
  Modal,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import * as theme from "./../../../constants/theme.js";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Block, Text } from "../../../components/Index.js";
import styles from "../../../utility/globalStyles.js";
import { useDispatch } from "react-redux";
import { receiversStart } from "./../../Donor/Home/Receivers/actions";

const WIDTH = Dimensions.get("window").width;

export default BeneficiersList = ({navigation, beneficierName, setBeneficierId,setBeneficierName, receiversData }) => {
  const [beneficier, setBeneficier] = useState();
  const [search, setSearch] = useState();
  const [filteredDataSource, setFilteredDataSource] = useState(receiversData.receivers.clientsList);
  const [masterDataSource, setMasterDataSource] = useState(receiversData.receivers.clientsList);
  const [beneficiersListModalVisible, setBeneficiersListModalVisible] = useState(
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

  const onBeneficierIdItem = useCallback(
    (name, id) => {
      setBeneficierName(name)
      setBeneficierId(id);
      setBeneficiersListModalVisible(false);
    },
    [setBeneficierId]
  );
  useEffect(() => {
    if (receiversData.receivers == null) {
      dispatch(receiversStart());
    } else {
      setFilteredDataSource(receiversData.receivers.clientsList);
      setMasterDataSource(receiversData.receivers.clientsList);
    }
  }, [receiversData.receivers]);

  const RenderBeneficiersListOptions = ({ name,email, id }) => (
    <TouchableOpacity
      onPress={() => onBeneficierIdItem(name, id)}
      style={{ marginVertical: 2 }}
    >
      <Text bold style={{ paddingVertical: 4, fontSize: 18 }}>
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
        onPress={() => setBeneficiersListModalVisible(!beneficiersListModalVisible)}
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
          <View style={[styles.modal, { width: WIDTH - 30, height: 200,marginTop:"120%" }]}>
            <Block style={styles.boxSearchContainer}>
              <Block style={styles.boxVwSearch}>
                <Ionicons name="search" color="#676767" size={18} />
              </Block>

              <TextInput
                placeholder="Search"
                placeholderTextColor="#999999"
                style={styles.boxTextInput}
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
              renderItem={(receiversData) => (
                <Block style={{ flex: 0, paddingHorizontal: 10 }}>
                  <RenderBeneficiersListOptions
                    name={receiversData.item.account.fullname}
                    email={receiversData.item.account.email}
                    id={receiversData.item.account.accountid}
                  />
                </Block>
              )}
            />
            <TouchableOpacity activeOpacity={0.8} onPress={()=>{
							setBeneficiersListModalVisible(false)
							navigation.navigate("Add Beneficiary")
						}} style={{ flex: 0, paddingVertical: 8,borderTopWidth:1,borderColor:theme.colors.gray2 }}>
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
