import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Modal,
} from "react-native";
import Text from "./Text";
import * as theme from "../constants/theme";
import { AntDesign } from "@expo/vector-icons";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default CustomPicker = ({ label, style, ...props }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState("Select");
  const options = ["Individual", "Organization"];
  const onPressItem = (option) => {
    setSelectedData(option);
    setModalVisible(false);
  };
  const renderOptions = options.map((option, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => onPressItem(option)}
      style={{ marginVertical: 2 }}
    >
      <Text bold style={{ paddingVertical: 4, fontSize: 18}}>
        {option}
      </Text>
    </TouchableOpacity>
  ));

  return (
    <SafeAreaView>
          
      <Text bold style={{ fontSize: 18 }}>
        {label}
      </Text>

      <TouchableOpacity
        style={styles.customPicker}
        onPress={() => setModalVisible(!isModalVisible)}
        {...props}
      >
        <Block>
          <Text bold style={{ fontSize: 18 , color: theme.colors.solidGray}}>
            {selectedData}
          </Text>
        </Block>
        <Block style={{ alignItems: "flex-end" }}>
          <AntDesign name="caretdown" size={18} color="black" />
        </Block>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent={true}
        nRequestClose={() => setModalVisible(!isModalVisible)}
      >
        
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 40, height: 90 }]}>
            {renderOptions}
          </View>
        </View>

      </Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    borderLeftWidth: 1,
    borderTopWidth:1,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    padding: 10,
  },
  option: {
    alignItems: "flex-start",
  },
  customPicker: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: theme.colors.solidGray,
    borderBottomWidth: 1.5,
  },
});
