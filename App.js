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

// import * as React from 'react';
// import { View, StyleSheet, Button } from 'react-native';
// import { Video, AVPlaybackStatus } from 'expo-av';

// export default function App() {
//   const video = React.useRef(null);
//   const [status, setStatus] = React.useState({});
//   return (
//     <View style={styles.container}>
//       <Video
//         ref={video}
//         style={styles.video}
//         source={{
//           uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
//         }}
//         useNativeControls
//         resizeMode="contain"
//         isLooping
//         onPlaybackStatusUpdate={status => setStatus(() => status)}
//       />
//       <View style={styles.buttons}>
//         <Button
//           title={status.isPlaying ? 'Pause' : 'Play'}
//           onPress={() =>
//             status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
//           }
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//   },
//   video: {
//     alignSelf: 'center',
//     width: 320,
//     height: 200,
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
