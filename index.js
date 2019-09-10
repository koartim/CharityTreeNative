/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import reducer from './reducer'
const store = createStore(reducer)

AppRegistry.registerComponent(<Provider store={store}> appName, () => App</Provider>);
