import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { Card, ListItem, Button, Header } from 'react-native-elements'

class CharityCard extends React.Component {

  render() {
    console.log(this.props)
    let pic = {
      uri: this.props.charity.cause.image
    }
    let ratingImage = {
      uri: this.props.charity.currentRating.ratingImage.large
    }
      return(
        <Router>
        <ScrollView style={styles.container}>
          <Card>
            <Text style={styles.titleText}>{this.props.charity.charityName}</Text>
            <Image source={ratingImage} style={{width: 100, height: 25}}/>
            <Button title="view"></Button>
          </Card>
        </ScrollView>
        </Router>
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
