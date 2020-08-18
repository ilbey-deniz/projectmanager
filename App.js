
import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import Deneme from './components/Deneme';
import {
  Button,
  Alert, 
  View,
  Text,
  TextInput,
} from 'react-native';




function App(){
  return (
      <View style ={Deneme.container}>
          <Text> merhaba </Text>
          <Text> merhabana merhaba kardeş </Text>
          <View style = {{padding : 40}}>
      
              <TextInput placeholder = "merhaba de bakıyım" style = {{ borderColor:'blue', borderWidth: 1,}} />

          </View>      
     
          <Button
        title="Bas bakayım bi bana"
        color="#f194ff"
        onPress={() => Alert.alert(' yarra yedin ')}
      />

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
