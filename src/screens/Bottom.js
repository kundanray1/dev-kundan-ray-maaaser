import * as React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default function App() {

  function choosePhotoFromLibrary(){
   console.log("Hello Joshan");
  }
  
  const renderContent = () => {
    return(
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
    <TouchableOpacity onPress={()=>console.log("Hello")}>
      <Text>Click me</Text>

    </TouchableOpacity>
    </View>
  );
}

  const sheetRef = React.useRef(null);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(0)}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[300, 0]}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={1}
         callbackNode={ new Animated.Value(1)}
        enabledGestureInteraction={false}
      />
    </>
  );
}
