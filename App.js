// import React, { useState } from "react";
// import { StatusBar } from "react-native";
// import store from "./src/store/ConfigureStore";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { Provider } from "react-redux";
// import Navigation from "./src/navigators/Index.js";
// import FlashMessage from "react-native-flash-message";
// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle="light-content" translucent={true} />
//       <Provider store={store}>
//         <Navigation />
//         <FlashMessage
//           position="top"
//           icon={{ icon: "auto", position: "right" }}
//           style={{
//             justifyContent: "center",
//             alignItems: "center",
//             top: StatusBar.currentHeight,
//           }}
//           duration={1000}
//         />
//       </Provider>
//     </SafeAreaProvider>
//   );
// }

import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

 function App(){
  const modalizeRef = useRef();

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <TouchableOpacity onPress={onOpen} style={{alignItems:"center",flex:1,justifyContent:"center"}}>
        <Text>Open the modal</Text>
      </TouchableOpacity>

      <Modalize ref={modalizeRef}><Text>Joshan</Text></Modalize>
    </>
  );
};

export default App;