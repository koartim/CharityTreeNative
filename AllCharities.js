import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

class AllCharities extends React.Component {

  state = {
    charities: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/charities")
      .then(rsp => rsp.json())
      .then(rsp => {
        this.setState({
          charities: rsp
        })
      }).catch(function(error) {
        console.log('there has been an error in your fetch operation:' + error.message);
      });
  }

  render() {
    return (
      <ScrollView containerStyle={styles.container}>
      {this.state.charities.map(charity => {
        return(
          <Card>
            <Text>{charity.charityName}</Text>
          </Card>
        )
      })}
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
  function mapStateToProps(state) {
    return {
      charities: state.charities
    }
  }

  function mapDispatchToProps(state) {
    return {
      fetchCharities: (charities) => {
        dispatch({type: "FETCH_ALL_CHARITIES", payload: charities})
      }
    }
  }

  export default connect (mapStateToProps, mapDispatchToProps)(AllCharities);
