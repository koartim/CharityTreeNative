import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import { Button, Icon} from 'react-native-elements'

export default ({ history }) => (
  <ScrollView>
    <Text> Welcome To Charity Tree </Text>
    <Button title="view charities" onPress={() => history.push("/charities")}/>
  </ScrollView>
)
