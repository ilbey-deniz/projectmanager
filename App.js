
import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';

import {
  SafeAreaView,
  StyleSheet,
  Button,
  Alert, 
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
const Separator = () => (
  <View style={styles.separator} />
);

function App(){
  return (
      <View style ={styles.container}>
          <Text> merhaba </Text>
          <Text> merhabana merhaba kardeş </Text>
      
      <View>
        <Separator />
      </View>
          <Button
        title="Bas bakayım bi bana"
        color="#f194ff"
        onPress={() => Alert.alert(' yarra yedin ')}
      />
      </View>
  );
};

export default App;
