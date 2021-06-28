import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import LoadFund from "./LoadFund";
const App = () => {
  let loadFundRef = React.createRef();
  const onShowPopup = () => {
    popupRef.show();
  };
  const onClosePopup = () => {
    popupRef.close();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={onShowPopup}>
        <Text style={{ fontSize: 20 }}>Show Popup</Text>
      </TouchableWithoutFeedback>
      <LoadFund
        ref={(target) => (popupRef = target)}
        onTouchOutside={onClosePopup}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
