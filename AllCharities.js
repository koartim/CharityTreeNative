import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import CharityCard from './CharityCard'
import { connect } from 'react-redux'

class AllCharities extends React.Component {

  state = {
    charities: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/charities")
      .then(rsp => rsp.json())
      .then(rsp => {
        this.props.fetchCharities(rsp)
      }).catch(function(error) {
        console.log('there has been an error in your fetch operation:' + error.message);
      });
  }

  render() {
    console.log(this.props)
    return (
      <ScrollView containerStyle={styles.container}>
      {this.state.charities.map(charity => {
        return(
          <CharityCard charity={charity} key={charity.name}/>
        )
      })}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    charities: state.charities
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCharities: (charities) => {
      dispatch({type: "FETCH_ALL_CHARITIES", payload: charities})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AllCharities);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
    },
  });
