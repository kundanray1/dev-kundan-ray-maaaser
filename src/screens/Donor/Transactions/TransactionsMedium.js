import React, { useState, useCallback } from "react";
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
import { Block, Text } from "./../../../components/Index.js";

const WIDTH = Dimensions.get("window").width;
const transactionsMediumOptions = [
  "One Time",
  "Daily",
  "Weekly",
  "Monthly",
  "Quarterly",
  "Yearly",
  "Nth Day",
];

const TransactionsMedium = ({ transactionsMedium, setTransactionsMedium }) => {
  const [
    transactionsMediumModalVisible,
    setTransactionsMediumModalVisible,
  ] = useState(false);
  const onPressTransactionsMediumItem = useCallback(
    (option) => {
      setTransactionsMedium(option);
      setTransactionsMediumModalVisible(false);
    },
    [setTransactionsMedium]
  );

  const RenderTransactionsMediumOptions = transactionsMediumOptions.map(
    (option, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => onPressTransactionsMediumItem(option)}
        style={{ marginVertical: 2 }}
      >
        <Text bold style={{ paddingVertical: 4, fontSize: 18, color:theme.colors.solidGray,}}>
          {option}
        </Text>
      </TouchableOpacity>
    )
  );
  return (
    <Block style={{flex:0, paddingVertical: 8 }}>
      <Text bold style={{ fontSize: 14, fontWeight: "700" }}>
        Medium
      </Text>
      <TouchableOpacity
        style={styles.customPicker}
        activeOpacity={0.8}
        // onPress={() =>
        //   setTransactionsMediumModalVisible(!transactionsMediumModalVisible)
        // }
      >
        <Block>
          <Text bold style={{ fontSize: 16, color:"#999999" }}>
            {transactionsMedium}
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
        visible={transactionsMediumModalVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setTransactionsMediumModalVisible(!transactionsMediumModalVisible)
        }
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 30 }]}>
            {RenderTransactionsMediumOptions}
          </View>
        </View>
      </Modal>
    </Block>
  );
};

export default TransactionsMedium;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
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
    borderColor:"#E7E7E7",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 6,
  },
});
