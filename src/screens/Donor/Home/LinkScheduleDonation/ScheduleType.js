import React, { useState,useCallback } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
  View,
  TouchableWithoutFeedback
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as theme from "./../../../../constants/theme.js";
import {
  Block,
  Text,
} from "./../../../../components/Index.js";
import styles from "../../../../utility/globalStyles.js";

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
         <TouchableOpacity
           style={styles.container}
          activeOpacity={1}
          onPressOut={() =>
           setScheduleTypeModalVisible(!scheduleTypeModalVisible)
          }
        >
          <TouchableWithoutFeedback>
          <View style={[styles.modal, { width: WIDTH - 30,marginTop:"72%" }]}>
            {RenderScheduleTypeOptions}
          </View>
          </TouchableWithoutFeedback>

         </TouchableOpacity>
      </Modal>
        </Block>
    </SafeAreaView>
  );
};
export default ScheduleType;
