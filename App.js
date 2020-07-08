import * as React from 'react';
import {  StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  state = {
    data:[]
  };
  componentDidMount(){
    this.fetchData();
  }
  fetchData = async() =>{
    const response = await fetch("https://nhom01-cloud-thayhuynhnam.herokuapp.com/iot/60.0");
    const json = await response.json();
    this.setState({
      data: json.temp,
      data1 : json.humidity
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Thủ Đức - SPKT</Text>
        <Text> Đô ẩm là : {this.state.data1}</Text>
        <Text> Nhiệt độ là : {this.state.data}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
