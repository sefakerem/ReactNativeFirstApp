import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import CardView from './src/Components/CardView/CardView';
import urun_data from './src/data';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
function App(){
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.patikaText}>PatikaStore</Text>
          <FlatList
          style={{marginRight:3}} 
          numColumns='2' 
          data={urun_data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CardView product={item}/> } ListHeaderComponent={
            <View>
              <TextInput placeholder='Ara..' style={styles.search}></TextInput>
            </View>
          }/>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:10
  },
  patikaText:{
    color:'purple',
    fontSize:35,
    margin:13
  
  },
  search:{
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }

});

export default App;
