
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
  TextInput,
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
          <View style = {{padding : 40}}>
      
              <TextInput placeholder = "merhaba de bakıyım" style = {{ borderColor:'blue', borderWidth: 1,}} />

          </View>      
      <View>
        <Separator />
      </View>
          <Button
        title="Bas bakayım bi bana"
        color="#f194ff"
        onPress={() => Alert.alert(' yarra yedin ')}
      />
      <View>
        <Separator />
      </View>
      <View style ={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
        title="Basma"
        color="#00ff7f"
        style= {{width: '200%'}}
        onPress={() => Alert.alert(' Basma amk')}
      />
      <Button
        title="Basma"
        color="#cd853f"
        style= {{width: '200%'}}
        onPress={() => Alert.alert(' Basma amk ')}
      />
      </View>
      </View>
  );
};

export default App;
