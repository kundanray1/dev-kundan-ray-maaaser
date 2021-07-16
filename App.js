import React, { useState } from "react";
import { StatusBar } from "react-native";
import store from "./src/store/ConfigureStore";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Navigation from "./src/navigators/Index.js";
import FlashMessage from "react-native-flash-message";
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" translucent={true} />
      <Provider store={store}>
        <Navigation />
        <FlashMessage
          position="top"
          icon={{ icon: "auto", position: "right" }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            top: StatusBar.currentHeight,
          }}
          duration={1000}
        />
      </Provider>
    </SafeAreaProvider>
  );
}

// import React,{useState} from "react";
// import { Text, View, StyleSheet, Button } from "react-native";
// import SvgQRCode from "react-native-qrcode-svg";
// import * as Print from "expo-print";

// function Simple() {
//   return <SvgQRCode
//   value="http://example.com"
//   getRef={(ref?) => (this.svg = ref)}
//     />;
// }
 
// function getDataURL() {
//   svg.toDataURL(callback);
// }

// function callback(dataURL) {
//   console.log(dataURL);
// }
// async function downloadFile() {
//   try {
//     let filePath = await Print.printToFileAsync({
//       html:
//         ' <div style = "margin-top: 40%; margin-left: 30%;"><h2 style = "margin-left: 50px; font-size: 45px;">LetMeIn</h2>' +
//         '<img src="' +
//         base64_qr +
//         '"' +
//         'alt="Red dot" style = "margin-left: 20px; margin-top: 10px;" />' +
//         '<h2 style = "margin-top: 50px;">Scan the QR Code to check in</h2>' +
//         "</div>",
//       width: 612,
//       height: 792,
//     });

//     const pdfName = `${filePath.uri.slice(
//       0,
//       filePath.uri.lastIndexOf("/") + 1
//     )}QRCode.pdf`;

//     await FileSystem.moveAsync({
//       from: filePath.uri,
//       to: pdfName,
//     });

//     console.log("PDF Generated", pdfName);
//     this.saveFile(pdfName);
//   } catch (error) {
//     console.error(error);
//   }

// export default function App() {
//   const [svg,setSvg]=useState()
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           width: "100%",
//           flexDirection: "row",
//           justifyContent: "space-around",
//           alignItems: "center",
//         }}
//       >
//         <Simple />
//         <Button
//           onPress={()=>downloadFile()}
//           title="Download"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "space-around",
//     paddingTop: 20,
//     alignItems: "center",
//     backgroundColor: "#ecf0f1",
//   },
// });

// import React, { useRef, useState } from "react";
// import { StyleSheet, Text, ScrollView } from "react-native";
// import {
//   actions,
//   defaultActions,
//   RichEditor,
//   RichToolbar,
// } from "react-native-pell-rich-editor";
// import HTMLView from "react-native-htmlview";

// const EditorScreen = () => {
//   const strikethrough = require("./src/assets/icons/box.png"); //icon for strikethrough
//   const video = require("./src/assets/icons/logo.png"); //icon for Addvideo
//   const RichText = useRef(); //reference to the RichEditor component
//   const [article, setArticle] = useState("");

//   // this function will be called when the editor has been initialized
//   function editorInitializedCallback() {
//     RichText.current?.registerToolbar(function (items) {
//       // items contain all the actions that are currently active
//       console.log(
//         "Toolbar click, selected items (insert end callback):",
//         items
//       );
//     });
//   }

//   // Callback after height change
//   function handleHeightChange(height) {
//     // console.log("editor height change:", height);
//   }

//   function onPressAddImage() {
//     // you can easily add images from your gallery
//     RichText.current?.insertImage(
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
//     );
//   }

//   function insertVideo() {
//     // you can easily add videos from your gallery
//     RichText.current?.insertVideo(
//       "https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4"
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.text}>Editor</Text>
//       <RichEditor
//         disabled={false}
//         // containerStyle={styles.editor}
//         ref={RichText}
//         // style={styles.rich}
//         placeholder={"Start Writing Here"}
//         onChange={(text) => setArticle(text)}
//         editorInitializedCallback={editorInitializedCallback}
//         onHeightChange={handleHeightChange}
//       />
//       <RichToolbar
//         style={[styles.richBar]}
//         // editor={RichText}
//         disabled={false}
//         iconTint={"black"}
//         selectedIconTint={"blue"}
//         disabledIconTint={"black"}
//         onPressAddImage={onPressAddImage}
//         iconSize={20}
//         actions={[
//           "insertVideo",
//           ...defaultActions,
//           actions.setStrikethrough,
//           actions.heading1,
//         ]}
//         // map icons for self made actions
//         iconMap={{
//           [actions.heading1]: ({ tintColor }) => (
//             <Text style={[styles.tib, { color: tintColor }]}>H1</Text>
//           ),
//           [actions.setStrikethrough]: strikethrough,
//           ["insertVideo"]: video,
//         }}
//         insertVideo={insertVideo}
//       />
//       <Text style={styles.text}>Result</Text>
//       <HTMLView value={article} stylesheet={styles} />
//     </ScrollView>
//   );
// };

// export default EditorScreen;

// const styles = StyleSheet.create({
//   /********************************/
//   /* styles for html tags */
//   a: {
//     fontWeight: "bold",
//     color: "purple",
//   },
//   div: {
//     fontFamily: "monospace",
//   },
//   p: {
//     fontSize: 30,
//   },
//   /*******************************/
//   container: {
//     flex: 1,
//     marginTop: 40,
//     backgroundColor: "#F5FCFF",
//   },
//   editor: {
//     backgroundColor: "#F5FCFF",
//     borderColor: "black",
//     borderWidth: 1,
//   },
//   rich: {
//     minHeight: 500,
//     flex: 1,
//   },
//   richBar: {
//     height: 50,
//     backgroundColor: "#F5FCFF",
//   },
//   text: {
//     fontWeight: "bold",
//     fontSize: 20,
//   },
//   tib: {
//     textAlign: "center",
//     color: "#515156",
//   },
// });

