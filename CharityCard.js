import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Card, ListItem, Button, Image } from 'react-native-elements'

class CharityCard extends React.Component {

  render() {
    console.log(this.props)
      return(
        <ScrollView>
          <Card>
            <Text>{this.props.charity.charityName}</Text>
            <Button title="view"></Button>
          </Card>
        </ScrollView>
      )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7CA1B4',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default CharityCard;
