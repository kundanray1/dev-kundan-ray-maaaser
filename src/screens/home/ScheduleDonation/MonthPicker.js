import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as theme from "./../../../constants/theme.js";
import {
  Block,
  Text,
  ErrorMessage,
  Empty
} from "./../../../components/Index.js";
import {Months} from './Dummy';


const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
const monthOptions = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
const MonthPicker = ({  }) => {
  const [month, setMonth] = useState();
  const [monthModalVisible, setMonthModalVisible] = useState(false);

  const onPressMonthItem = (option) => {
    setMonth(option);
    setMonthModalVisible(false);
  };


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
    <TouchableOpacity
      style={styles.customPicker}
      activeOpacity={0.8}
      onPress={() => setMonthModalVisible(!monthModalVisible)}
    >
      <Block>
        <Text bold style={{ fontSize: 16, color: theme.colors.solidGray }}>
          {month}
        </Text>
      </Block>
      <Block style={{ alignItems: "flex-end" }}>
        <AntDesign name="caretdown" size={16} color={theme.colors.solidGray} />
      </Block>
      
    </TouchableOpacity>
    <Modal
        visible={monthModalVisible}
        transparent={true}
        style={{paddingHorizontal:50}}
        nRequestClose={() => setMonthModalVisible(!monthModalVisible)}
      >
          <Block style={[styles.modal]}>
               {RenderMonthOptions}
          </Block>
      </Modal>
    </SafeAreaView>

  );
};

export default MonthPicker;
const styles = StyleSheet.create({
  
  modal: {
    flex:0.5,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: theme.colors.white,
    borderRadius: 3,
    padding: 10,
    height:HEIGHT-400,
    width:WIDTH-200
  },
  option: {
    alignItems: "flex-start",
  },
  customPicker: {
    width:"90%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: theme.colors.solidGray,
    alignItems: "center",
    borderWidth: 1,
    paddingHorizontal:5

  },
});


    
