import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

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
    return (
      <ScrollView containerStyle={styles.container}>
      {this.state.charities.map(charity => {
        return <Text>{charity.charityName}</Text>
      })}
        <Text>Hello, world!</Text>
      </ScrollView>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
    },
  });
