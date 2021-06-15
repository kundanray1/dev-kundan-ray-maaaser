import React, { useState,useCallback } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as theme from "./../../../constants/theme.js";
import {
  Block,
  Text,
} from "./../../../components/Index.js";

const WIDTH = Dimensions.get("window").width;
const monthOptions = ["Weekly", "Monthly", "Yearly"];

const MonthPicker = ({ month, setMonth,setLayoutPosition }) => {
  const [monthModalVisible, setMonthModalVisible] = useState(false);
  
  const onPressMonthItem = useCallback(
    (option) => {
      setMonth(option);
      setMonthModalVisible(false);
    },
    [setMonth]
  );
 const handleLayoutPosition = useCallback(
    (position) => {
      setLayoutPosition(position);
    },
    [setLayoutPosition]
  );

  const RenderMonthOptions = monthOptions.map((option, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => onPressMonthItem(option)}
      style={{ marginVertical: 2 }}
    >
      <Text bold style={{ paddingVertical: 4, fontSize: 18 }}>
        {option}
      </Text>
    </TouchableOpacity>
  ));
  return (
    <SafeAreaView>
      <Block style={{ marginTop: 8 }}>
        <Text bold style={{ fontSize: 16, fontWeight: "500" }}>
          Schedule Donation
        </Text>
      </Block>
      <TouchableOpacity
        style={styles.customPicker}
        activeOpacity={0.8}
        onPress={() => setMonthModalVisible(!monthModalVisible)}
        onLayout={({nativeEvent})=>{
                handleLayoutPosition(nativeEvent.layout)
        }} 
      >
        <Block>
          <Text bold style={{ fontSize: 16, color: theme.colors.solidGray }}>
            {month}
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
        visible={monthModalVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() => setMonthModalVisible(!monthModalVisible)}
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 30 }]}>
            {RenderMonthOptions}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MonthPicker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: theme.colors.white,
    borderRadius: 3,
    padding: 10,
  },
  option: {
    alignItems: "flex-start",
  },
  customPicker: {
    height: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: theme.colors.solidGray,
    alignItems: "center",
    borderBottomWidth: 1,
  },
});
