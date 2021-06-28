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
import * as theme from "./../../../../constants/theme.js";
import {
  Block,
  Text,
} from "./../../../../components/Index.js";

const WIDTH = Dimensions.get("window").width;
const scheduleTypeOptions = ["One Time","Daily","Weekly", "Monthly","Quarterly","Yearly","Nth Day"];

const ScheduleType = ({ scheduleType, setScheduleType }) => {
  const [scheduleTypeModalVisible, setScheduleTypeModalVisible] = useState(false);
  const onPressScheduleTypeItem = useCallback(
    (option) => {
      setScheduleType(option);
      setScheduleTypeModalVisible(false);
    },
    [setScheduleType]
  );

  const RenderScheduleTypeOptions = scheduleTypeOptions.map((option, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => onPressScheduleTypeItem(option)}
      style={{ marginVertical: 2 }}
    >
      <Text bold style={{ paddingVertical: 4, fontSize: 18 }}>
        {option}
      </Text>
    </TouchableOpacity>
  ));
  return (
    <SafeAreaView>
      <Block style={{ paddingVertical: 8 }}>
        <Text bold style={{ fontSize: 16, fontWeight: "500" }}>
          Schedule Type
        </Text>
      <TouchableOpacity
        style={styles.customPicker}
        activeOpacity={0.8}
        onPress={() => setScheduleTypeModalVisible(!scheduleTypeModalVisible)}
       
      >
        <Block>
          <Text bold style={{ fontSize: 16, color: theme.colors.solidGray }}>
            {scheduleType}
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
        visible={scheduleTypeModalVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() => setScheduleTypeModalVisible(!scheduleTypeModalVisible)}
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 30 }]}>
            {RenderScheduleTypeOptions}
          </View>
        </View>
      </Modal>
        </Block>
    </SafeAreaView>
  );
};

export default ScheduleType;
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
    paddingVertical:6,
    
  },
});
