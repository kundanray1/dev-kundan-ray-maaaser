import React, { useState,useCallback } from "react";
import {
  SafeAreaView,
  View,
  Dimensions,
  TouchableOpacity,
  Modal,
  Text,
} from "react-native";
import * as theme from "../../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import styles from "../../../utility/globalStyles.js";

const WIDTH = Dimensions.get("window").width;

export default RaisingMoneyType = ({ raisingMoneyType,setRaisingMoneyType }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const options = ["Myself", "Someone else"];
  
  const onPressItem = useCallback(
    (option) => {
      setRaisingMoneyType(option);
      setModalVisible(false);
    },
    [setRaisingMoneyType]
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
      <Text bold style={{ fontSize: 16,fontWeight: "500" }}>
      Who are you raising money?
      </Text>
      <TouchableOpacity
        style={styles.customPicker}
        onPress={() => setModalVisible(!isModalVisible)}
      >
        <Block style={{flex:3}}>
          <Text bold style={{ fontSize: 16, color: theme.colors.solidGray }}>
            {raisingMoneyType}
          </Text>
        </Block>
        <Block style={{flex:0.5, alignItems: "flex-end" }}>
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
          onPressOut={() => setModalVisible(!isModalVisible)}
        >
          <TouchableWithoutFeedback>
          <View style={[styles.modal, { width: WIDTH - 30, height: 80,marginTop:"40%" }]}>
            {renderOptions}
          </View>
          </TouchableWithoutFeedback>
         </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};
