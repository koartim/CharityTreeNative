/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import App from './App';
import {name as appName} from './app.json';
import { BrowserRouter as Router, Route } from 'react-router-dom'

AppRegistry.registerComponent( appName, () => App);
