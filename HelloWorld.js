import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorld extends Component {

  state = {
    charities: []
  }

  componentDidMount() {
    fetch("https://api.data.charitynavigator.org/v2/Organizations?categoryID=6&app_id=b01bcc4b&app_key=0acb4a18c3b6fba8b293612eb0a029f5")
      .then(rsp => rsp.json())
      .then(rsp => {
        this.setState({
          charities: rsp
        })
      })
  }

  render() {
    console.log(this.state.charities)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {this.state.charities.map(charity => {
        return <Text>{charity.charityName}</Text>
      })}
        <Text>Hello, world!</Text>
      </View>
    );
  }
}
