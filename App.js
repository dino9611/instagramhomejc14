


import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './src/components/header'
import Stories from './src/components/stories'
import Feed from './src/components/feed'
import Footer from './src/components/footer'
const App = () => {
  const [isdarkmode,setdarkmode]=useState(false)

  const theme={
    darkmode:{
      color:'#F5F5f5',
      backgroundColor:'#212121'
    },
    defaultmode:{
      color:'black',
      backgroundColor:'white'
    }
  }

  return (
    <View style={{flex:1}}>
      
      <Header isdarkmode={isdarkmode} setdarkmode={setdarkmode} theme={theme} />
      <ScrollView >
        <View>
          <Stories isdarkmode={isdarkmode} setdarkmode={setdarkmode} theme={theme}/>
        </View>
        <View>
          <Feed isdarkmode={isdarkmode} theme={theme}/>
          <Feed isdarkmode={isdarkmode} theme={theme}/>
        </View>
      </ScrollView>
      <Footer isdarkmode={isdarkmode} theme={theme}/>
    </View>
  );
};



export default App;
