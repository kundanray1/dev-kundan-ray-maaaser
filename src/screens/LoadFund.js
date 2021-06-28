// // Modal.js
// import React from "react";
// import {
//   TouchableWithoutFeedback,
//   StyleSheet,
//   Modal,
//   View,
//   Text,
// } from "react-native";
// const LoadFund = ({ visible, transparent, dismiss, animationType }) => {
//   return (
//     <View>
//       <Modal
//         visible={visible}
//         transparent={transparent}
//         onRequestClose={dismiss}
//         animationType={animationType}
//       >
//         <TouchableWithoutFeedback onPress={dismiss}>
//           <View style={styles.modalOverlay} />
//         </TouchableWithoutFeedback>

//         <TouchableWithoutFeedback style={styles.modalContent} onPress={()=>console.log("Presed")}>
//           <Text>JOSHAN</Text>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   modalContent: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor:"white",
//   },
//   modalOverlay: {
//     borderWidth:1,
//     borderColor:"green",
//     position: "absolute",
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "rgba(0,0,0,0.5)",
//   },
// });

// export default LoadFund;
