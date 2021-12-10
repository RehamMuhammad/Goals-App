import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const App = () => {
  return (
    <View style={{padding:10}}>
      <View>
        <TextInput placeholder='Enter Your goal!' style={{borderColor:"black", borderWidth:1, padding:10, marginBottom:10}} />
        <Button title='ADD' />
      </View>
      <View></View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
