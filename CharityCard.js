import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Card, ListItem, Button, Image, Header } from 'react-native-elements'

class CharityCard extends React.Component {

  render() {
    console.log(this.props)
      return(
        <ScrollView style={styles.container}>
          <Card>
            <Text style={styles.titleText}>{this.props.charity.charityName}</Text>
            <Button title="view"></Button>
          </Card>
        </ScrollView>
      )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7CA1B4'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default CharityCard;
