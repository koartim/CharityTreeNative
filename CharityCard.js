import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { Card, ListItem, Button, Header } from 'react-native-elements'

class CharityCard extends React.Component {

  render() {
    let pic = {
      uri: this.props.charity.cause.image
    }
      return(
        <ScrollView style={styles.container}>
          <Card>
            <Text style={styles.titleText}>{this.props.charity.charityName}</Text>
            <Image source={pic} style={{width: 75, height: 75}}/>
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
