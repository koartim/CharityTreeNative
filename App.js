import React from 'react';
import Home from './Home'
import AllCharities from './AllCharities'
import { StyleSheet, ScrollView } from 'react-native';
import { Provider } from 'react-redux'
import { NativeRouter, Switch, Route } from 'react-router-native'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <ScrollView containerStyle={styles.container}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/charities" component={AllCharities} />
            </Switch>
          </ScrollView>
        </NativeRouter>
      </Provider>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
