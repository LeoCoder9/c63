import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TextComponent, TouchableOpacity } from 'react-native';
import{Header} from 'react-native-elements'


export default class App extends React.Component {

constructor(){
  super()
  this.state = {
    text: "",
    outputText: ""
  }
}

  render(){
    return (
      <View style={styles.container}>
        <Header  centerComponent={{ text: 'Monkey Chunky', style: { color: '#fff' } }} backgroundColor = "brown" ></Header>

        
        <TextInput style = {styles.textbox} onChangeText={mytext => {this.setState({text:mytext })}} value = {this.state.text} ></TextInput>
        
       <TouchableOpacity onPress = {()=>{
         {this.setState({outputText: this.state.text})}
       }}>
         <Text style={styles.goButton}>GO</Text>
       </TouchableOpacity>

        <Text style = {styles.output}>{this.state.outputText}</Text>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  textbox: {
    borderWidth: 4,
    width: 300,
    textAlign: "center",
    marginTop: 100,
    alignSelf: "center"
  },

  goButton: {
    width: 300,
    textAlign: "center",
    marginTop: 100,
    alignSelf: "center"
  },

  output: {
    width: 300,
    textAlign: "center",
    marginTop: 100,
    alignSelf: "center"
  }
});
