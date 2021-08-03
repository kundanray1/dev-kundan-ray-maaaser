import React, { useState,useCallback } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Modal,
  Text,
  TouchableWithoutFeedback
} from "react-native";
import * as theme from "../../../constants/theme";
import { AntDesign } from "@expo/vector-icons";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default ClientType = ({ clientType,setClientType,setClientTypeError }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const options = ["Individual", "Organization"];
  
  const onPressItem = useCallback(
    (option) => {
      setClientType(option);
      setModalVisible(false);
      setClientTypeError(false)
    },
    [setClientType]
  );
  const renderOptions = options.map((option, index) => (
    <TouchableOpacity
      key={index}
      style={{ marginVertical: 2 }}
      onPress={() => onPressItem(option)}
    >
      <Text bold style={{ paddingVertical: 4, fontSize: 16}}>
        {option}
      </Text>
    </TouchableOpacity>
  ));
  return (
  	<SafeAreaView style={{ paddingVertical: 6 }}>
          
      <Text bold style={{ fontSize: 16 }}>
     Choose Account Type
      </Text>
      <TouchableOpacity
        style={styles.customPicker}
        onPress={() => setModalVisible(!isModalVisible)}
      >
        <Block>
          <Text bold style={{ fontSize: 16, color: theme.colors.solidGray }}>
            {clientType}
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
        visible={isModalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(!isModalVisible)}
      >
          <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPressOut={() =>
           setModalVisible(!isModalVisible)
          }
        >
          <TouchableWithoutFeedback>
          <View style={[styles.modal, { width: WIDTH - 40, height: 90,marginTop:"55%" }]}>
            {renderOptions}
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
    // justifyContent: "center",
  },
  modal: {
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    padding: 10,
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
});
