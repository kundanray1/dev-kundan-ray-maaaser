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



// import React from 'react';
// import { View, Image, Button, Platform } from 'react-native';
// import * as ImagePicker from "expo-image-picker";


// const SERVER_URL = 'http://34.102.69.148:9000';

// const createFormData = (photo, body = {}) => {
//   const data = new FormData();

//   data.append('photo', {
//     name: photo.fileName,
//     type: photo.type,
//     uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
//   });

//   Object.keys(body).forEach((key) => {
//     data.append(key, body[key]);
//   });

//   return data;
// };

// const App = () => {

//   const [photo, setPhoto] = React.useState(null);
//   //select image function 
//   const handleChoosePhoto = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
//     console.log(result);
//     if (!result.cancelled) {
//       setPhoto(result.uri);
//     }
//   };


//   const handleUploadPhoto = () => {
//     fetch(`${SERVER_URL}/upload/image`, {
//       method: 'POST',
//       body: createFormData(photo, { userId: '123' }),
//     })
//       .then((response) =>console(response.json()))
//       .then((response) => {
//         console.log('response', response);
//       })
//       .catch((error) => {
//         console.log('error', error);
//       });
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {photo && (
//         <>
//           <Image
//             source={{ uri: photo.uri }}
//             style={{ width: 300, height: 300 }}
//           />
//           <Button title="Upload Photo" onPress={handleUploadPhoto} />
//         </>
//       )}
//       <Button title="Choose Photo" onPress={handleChoosePhoto} />
//     </View>
//   );
// };

// export default App;